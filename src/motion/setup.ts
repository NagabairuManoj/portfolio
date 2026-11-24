import { gsap } from 'gsap';
import {
  setTransition,
  onPage,
  onScroll,
  isTouch,
  prefersReducedMotion,
  ease,
} from '../engine';
import { idle, startIdle } from './idle';
import { startControlPlaneDriver } from './driver';

function registerHeaderFrame() {
  let last = 0;
  onScroll(({ y }) => {
    if (Math.abs(y - last) < 6) return;
    document.documentElement.classList.toggle('frame-away', y > 140 && y > last);
    last = y;
  });
}

function registerButtonFills() {
  onPage(() => {
    if (isTouch() || prefersReducedMotion()) return;
    const off: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>('[data-fill]').forEach((btn) => {
      const fill = btn.querySelector<HTMLElement>('.btn__fill');
      if (!fill) return;
      const from = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        return `${e.clientX - r.left}px ${e.clientY - r.top}px`;
      };
      let closed = true;
      const open = (at: string) => {
        if (closed) gsap.set(fill, { clipPath: `circle(0% at ${at})` });
        closed = false;
        btn.classList.add('is-filled');
        gsap.to(fill, {
          clipPath: `circle(155% at ${at})`,
          duration: 0.48,
          ease: ease.soft,
          overwrite: true,
        });
      };
      const close = (at: string) => {
        btn.classList.remove('is-filled');
        gsap.to(fill, {
          clipPath: `circle(0% at ${at})`,
          duration: 0.4,
          ease: ease.soft,
          overwrite: true,
          onComplete: () => {
            closed = true;
          },
        });
      };
      const onEnter = (e: PointerEvent) => open(from(e));
      const onLeave = (e: PointerEvent) => close(from(e));
      const onFocus = () => btn.matches(':focus-visible') && open('50% 50%');
      const onBlur = () => close('50% 50%');
      btn.addEventListener('pointerenter', onEnter);
      btn.addEventListener('pointerleave', onLeave);
      btn.addEventListener('focus', onFocus);
      btn.addEventListener('blur', onBlur);
      off.push(() => {
        btn.removeEventListener('pointerenter', onEnter);
        btn.removeEventListener('pointerleave', onLeave);
        btn.removeEventListener('focus', onFocus);
        btn.removeEventListener('blur', onBlur);
      });
    });
    return () => off.forEach((fn) => fn());
  });
}

function registerIndexPreview() {
  onPage(() => {
    const list = document.querySelector<HTMLElement>('[data-route-index]');
    const inspector = document.querySelector<HTMLElement>('[data-route-inspector]');
    if (!list || !inspector) return;

    const codeEl = inspector.querySelector<HTMLElement>('[data-inspector-code]');
    const titleEl = inspector.querySelector<HTMLElement>('[data-inspector-title]');
    const canvas = inspector.querySelector<HTMLElement>('[data-inspector-canvas]');
    const metricEl = inspector.querySelector<HTMLElement>('[data-inspector-metric]');
    const summaryEl = inspector.querySelector<HTMLElement>('[data-inspector-summary]');
    const rows = [...list.querySelectorAll<HTMLElement>('a[data-preview-id]')];
    let currentCode = codeEl?.textContent || '';

    const activate = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const nextCode = target.dataset.previewCode || '';
      if (nextCode === currentCode) return;
      currentCode = nextCode;

      rows.forEach((r) => r.classList.toggle('is-inspected', r === target));

      const tplId = target.dataset.previewId;
      const tpl = tplId ? document.getElementById(tplId) : null;
      if (tpl && canvas) {
        canvas.innerHTML = tpl.innerHTML;
        if (!prefersReducedMotion()) {
          gsap.fromTo(
            canvas,
            { autoAlpha: 0.35, y: 6 },
            { autoAlpha: 1, y: 0, duration: 0.28, ease: 'power2.out', overwrite: true },
          );
        }
      }
      if (codeEl) codeEl.textContent = nextCode;
      if (titleEl) titleEl.textContent = target.dataset.previewTitle || '';
      if (metricEl) metricEl.textContent = target.dataset.previewMetric || '';
      if (summaryEl) summaryEl.textContent = target.dataset.previewSummary || '';
    };

    rows.forEach((a) => {
      a.addEventListener('pointerenter', activate);
      a.addEventListener('focus', activate);
    });

    return () => {
      rows.forEach((a) => {
        a.removeEventListener('pointerenter', activate);
        a.removeEventListener('focus', activate);
      });
    };
  });
}

function registerMobileMenu() {
  onPage(() => {
    const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
    const closeBtn = document.querySelector<HTMLButtonElement>('[data-menu-close]');
    const nav = document.getElementById('menu');
    if (!openBtn || !closeBtn || !nav) return;

    const focusables = () =>
      [...nav.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];

    const open = () => {
      nav.hidden = false;
      openBtn.setAttribute('aria-expanded', 'true');
      focusables()[0]?.focus();
    };

    const close = () => {
      nav.hidden = true;
      openBtn.setAttribute('aria-expanded', 'false');
      openBtn.focus();
    };

    const onKey = (e: KeyboardEvent) => {
      if (nav.hidden) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      } else if (e.key === 'Tab') {
        const items = focusables();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const navLinks = [...nav.querySelectorAll('a')];
    const closeQuiet = () => {
      nav.hidden = true;
      openBtn.setAttribute('aria-expanded', 'false');
    };

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    navLinks.forEach((a) => a.addEventListener('click', closeQuiet));
    document.addEventListener('keydown', onKey);

    return () => {
      openBtn.removeEventListener('click', open);
      closeBtn.removeEventListener('click', close);
      navLinks.forEach((a) => a.removeEventListener('click', closeQuiet));
      document.removeEventListener('keydown', onKey);
    };
  });
}

export function setupMotion() {
  setTransition({
    leave: (c) =>
      gsap
        .timeline()
        .set(c, { autoAlpha: 1 })
        .fromTo(
          c.querySelector('.curtain__panel'),
          { yPercent: 100 },
          { yPercent: 0, duration: 0.5, ease: ease.inOut },
        ),
    enter: (c) =>
      gsap
        .timeline()
        .to(c.querySelector('.curtain__panel'), {
          yPercent: -100,
          duration: 0.55,
          ease: ease.inOut,
        })
        .set(c, { autoAlpha: 0 }),
  });

  startIdle();
  startControlPlaneDriver();
  registerHeaderFrame();
  registerButtonFills();
  registerIndexPreview();
  registerMobileMenu();

  // Keep reference to avoid unused import lint warnings
  void idle;
}
