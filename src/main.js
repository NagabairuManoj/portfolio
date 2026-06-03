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
});
