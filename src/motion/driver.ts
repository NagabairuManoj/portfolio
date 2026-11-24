import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onPage, prefersReducedMotion } from '../engine';
import { idle } from './idle';

export function startControlPlaneDriver() {
  onPage(() => {
    if (prefersReducedMotion()) return;

    const stage = document.querySelector<HTMLElement>('[data-concept-stage]');
    const casePacket = document.querySelector<SVGCircleElement>('[data-case-packet]');
    if (!stage && !casePacket) return;

    const pulseA = stage?.querySelector<SVGCircleElement>('[data-packet="a"]');
    const pulseB = stage?.querySelector<SVGCircleElement>('[data-packet="b"]');
    const readout = stage?.querySelector<HTMLElement>('[data-telemetry-tick]');
    const labelStates = [
      'AWS + GCP + AZURE + SOVEREIGN',
      'FINOPS DELTA: 79% COMPUTE CUT',
      'DEVSECOPS: 1,300+ REPOS SCANNED',
      'DR TARGET: RPO <= 15M / RTO <= 2H',
    ];

    const x1 = parseFloat(casePacket?.dataset.x1 || '0');
    const y1 = parseFloat(casePacket?.dataset.y1 || '0');
    const x2 = parseFloat(casePacket?.dataset.x2 || '0');
    const y2 = parseFloat(casePacket?.dataset.y2 || '0');

    const tick = () => {
      if (stage) {
        const p1 = (idle.t * 0.28) % 1;
        const p2 = (idle.t * 0.22 + 0.45) % 1;
        if (pulseA) {
          pulseA.setAttribute('cx', String(92 + p1 * 456));
          pulseA.setAttribute('cy', String(46 + Math.sin(idle.t * 1.4) * 3 + idle.y * 8));
        }
        if (pulseB) {
          pulseB.setAttribute('cx', String(548 - p2 * 456));
          pulseB.setAttribute('cy', String(142 + Math.cos(idle.t * 1.2) * 3 - idle.x * 8));
        }
        if (readout) {
          const idx = Math.floor((idle.t * 0.35) % labelStates.length);
          const next = labelStates[idx];
          if (readout.textContent !== next) readout.textContent = next;
        }
      }
      if (casePacket) {
        const p = (idle.t * 0.45) % 1;
        casePacket.setAttribute('cx', String(x1 + (x2 - x1) * p));
        casePacket.setAttribute('cy', String(y1 + (y2 - y1) * p));
      }
    };

    const target = stage || casePacket?.closest('div') || document.body;
    const st = ScrollTrigger.create({
      trigger: target,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (s) => {
        if (s.isActive) gsap.ticker.add(tick);
        else gsap.ticker.remove(tick);
      },
    });
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
    };
  });
}
