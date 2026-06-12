// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     THEME TOGGLE SYSTEM
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  } else {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  }

  // Toggle button handler
  themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
      body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('theme', 'light');
    }
  });

  /* ==========================================================================
     MOBILE NAVIGATION MENU
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMobileMenu = () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  mobileToggle.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  /* ==========================================================================
     NAVBAR SCROLL STYLING
     ========================================================================== */
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     TYPEWRITER ANIMATION
     ========================================================================== */
  const typewriterText = document.getElementById('typewriter');
  const words = [
    'zero-downtime CI/CD pipelines',
    'multi-cloud infrastructures',
    'infrastructure as code configs',
    'scalable Kubernetes clusters'
  ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typewriterText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Deleting is faster
    } else {
      typewriterText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120;
    }

    // Word completes typing
    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } 
    // Word completes deleting
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500; // Small pause before starting next word
    }

    setTimeout(type, typingSpeed);
  }

  // Initialize typewriter if element is present
  if (typewriterText) {
    type();
  }

  /* ==========================================================================
     SCROLL REVEAL ANIMATIONS (Intersection Observer)
     ========================================================================== */
  const scrollElements = document.querySelectorAll('.scroll-reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  scrollElements.forEach(el => revealObserver.observe(el));

  /* ==========================================================================
     ACTIVE LINK HIGHLIGHT ON SCROLL
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*=${sectionId}]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetNavLink.classList.add('active');
        }
      }
    });
  });

  /* ==========================================================================
     TICKET FORM & EMAIL DISPATCHING SYSTEM (Formspree Integration)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = contactForm?.querySelector('.btn-submit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show submitting state
      submitBtn.disabled = true;
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Dispatching...</span> <div class="spinner"></div>';
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      // Capture inputs
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const endpoint = contactForm.getAttribute('action');

      // Check if user set up Formspree or is using placeholder
      const isPlaceholder = endpoint.includes('your_formspree_id_here');

      if (isPlaceholder) {
        // Run in local debug/simulation mode
        setTimeout(() => {
          console.log("=== TICKET DISPATCH DEBUG ===");
          console.log(`Sender: ${name}`);
          console.log(`Endpoint: ${email}`);
          console.log(`Payload: ${message}`);
          console.log("=============================");

          formStatus.textContent = `Event Logged. Ticket generated for "${name}" (Simulated Dispatch).`;
          formStatus.classList.add('success');
          contactForm.reset();

          // Restore button state
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;

          setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
          }, 5000);
        }, 1200);
      } else {
        // Send actual fetch call to Formspree endpoint asynchronously
        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message
          })
        })
        .then(response => {
          if (response.ok) {
            formStatus.textContent = `Ticket dispatched! Message sent successfully. I will respond within an hour.`;
            formStatus.classList.add('success');
            contactForm.reset();
          } else {
            return response.json().then(data => {
              if (Object.hasOwnProperty.call(data, 'errors')) {
                formStatus.textContent = data.errors.map(error => error.message).join(', ');
              } else {
                formStatus.textContent = 'Server response error. Failed to dispatch message.';
              }
              formStatus.classList.add('error');
            });
          }
        })
        .catch(() => {
          formStatus.textContent = 'Network error. Check connection parameters.';
          formStatus.classList.add('error');
        })
        .finally(() => {
          // Restore button state
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;

          setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
          }, 6000);
        });
      }
    });
  }

  /* ==========================================================================
     SRE SELF-HEALING DIAGNOSTICS TERMINAL SIMULATOR
     ========================================================================== */
  const sreSimBtn = document.getElementById('sre-sim-btn');
  const sreSimTerminal = document.getElementById('sre-sim-terminal');

  if (sreSimBtn && sreSimTerminal) {
    const logSequence = [
      { text: 'sre-agent@pipeline-agent.tech:~$ trigger-healing-simulation --run-id=27345717969', style: 'color: #94a3b8; font-weight: bold;', delay: 200 },
      { text: '[14:16:32] [WEBHOOK] Received failure trigger for GHA run #27345717969', style: 'color: #38bdf8;', delay: 800 },
      { text: '  >> Repository: NagabairuManoj/demo-failing-infrastructure', style: 'color: #94a3b8;', delay: 400 },
      { text: '  >> Job: "Terraform Plan"', style: 'color: #94a3b8;', delay: 300 },
      { text: '[14:16:33] [LOGS] Downloading job logs from GitHub API...', style: 'color: #a7f3d0;', delay: 700 },
      { text: '[14:16:34] [LOGS] Log preprocessor completed. Parsing logs for error stack...', style: 'color: #a7f3d0;', delay: 600 },
      { text: '  >> ERROR DETECTED: [Terraform Plan failed]', style: 'color: #f87171;', delay: 400 },
      { text: '  >> Error: Reference to undeclared input variable "bucket_name" at main.tf line 12.', style: 'color: #f87171; font-weight: 500;', delay: 300 },
      { text: '[14:16:35] [DIAGNOSTIC] Querying Gemini 2.5 Flash API with SRE Troubleshooting Profile...', style: 'color: #fbbf24;', delay: 900 },
      { text: '[14:16:36] [DIAGNOSTIC] Analysis complete. Root cause: Missing variable declaration in variables.tf.', style: 'color: #fbbf24;', delay: 800 },
      { text: '[14:16:37] [HEAL] Authenticating keylessly to Google Cloud Platform...', style: 'color: #38bdf8;', delay: 700 },
      { text: '  >> Impersonating GCP service account via Workload Identity Pool: sre-agent-pool', style: 'color: #94a3b8;', delay: 400 },
      { text: '[14:16:38] [HEAL] Cloning repository and checking out repair branch: fix/failed-run-27345717969', style: 'color: #e2e8f0;', delay: 800 },
      { text: '[14:16:39] [HEAL] Writing variables.tf patch content to repository workspace...', style: 'color: #e2e8f0;', delay: 500 },
      { text: '[14:16:40] [PATCH] Proposed code additions (diff variables.tf):', style: 'color: #10b981; font-weight: bold;', delay: 300 },
      { text: '+ variable "bucket_name" {', style: 'color: #10b981;', isDiff: true, delay: 200 },
      { text: '+   type        = string', style: 'color: #10b981;', isDiff: true, delay: 100 },
      { text: '+   description = "The name of the private S3 bucket"', style: 'color: #10b981;', isDiff: true, delay: 100 },
      { text: '+ }', style: 'color: #10b981;', isDiff: true, delay: 150 },
      { text: '[14:16:41] [GIT] Committing patch changes & pushing upstream...', style: 'color: #a7f3d0;', delay: 800 },
      { text: '[14:16:42] [SUCCESS] Self-healing resolved pipeline breakage!', style: 'color: #34d399; font-weight: bold;', delay: 600 },
      { text: '[SUCCESS] Pull Request #5 successfully generated:', style: 'color: #34d399; font-weight: bold;', delay: 200 },
      { text: '  >> URL: https://github.com/NagabairuManoj/demo-failing-infrastructure/pull/5', style: 'color: #60a5fa; text-decoration: underline;', isLink: true, href: 'https://github.com/NagabairuManoj/demo-failing-infrastructure/pull/5', delay: 200 }
    ];

    let running = false;

    sreSimBtn.addEventListener('click', () => {
      if (running) return;
      running = true;
      sreSimBtn.disabled = true;
      sreSimBtn.style.opacity = '0.5';
      sreSimBtn.style.cursor = 'not-allowed';
      
      // Clear terminal
      sreSimTerminal.innerHTML = '';
      
      let currentIdx = 0;
      
      function printNextLine() {
        if (currentIdx >= logSequence.length) {
          running = false;
          sreSimBtn.disabled = false;
          sreSimBtn.style.opacity = '1';
          sreSimBtn.style.cursor = 'pointer';
          sreSimBtn.querySelector('span').textContent = 'Rerun Diagnostics';
          
          // Append success badge
          const badgeContainer = document.createElement('div');
          const badge = document.createElement('span');
          badge.className = 'sim-badge-alert';
          badge.textContent = 'PULL REQUEST #5 GENERATED';
          badgeContainer.appendChild(badge);
          sreSimTerminal.appendChild(badgeContainer);
          sreSimTerminal.scrollTop = sreSimTerminal.scrollHeight;
          return;
        }
        
        const log = logSequence[currentIdx];
        const lineEl = document.createElement('div');
        lineEl.className = 'sim-log-line';
        if (log.style) {
          lineEl.setAttribute('style', log.style);
        }
        if (log.isDiff) {
          lineEl.classList.add('sim-diff-add');
        }
        
        if (log.isLink) {
          const a = document.createElement('a');
          a.href = log.href;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = log.text;
          a.style.color = 'inherit';
          lineEl.appendChild(a);
        } else {
          lineEl.textContent = log.text;
        }
        
        sreSimTerminal.appendChild(lineEl);
        sreSimTerminal.scrollTop = sreSimTerminal.scrollHeight;
        
        currentIdx++;
        setTimeout(printNextLine, log.delay);
      }
      
      printNextLine();
    });
  }
});
