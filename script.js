/**
 * Cybersecurity Portfolio - Interactive JavaScript
 * Author: Jerome Wachira
 * Description: Handles all interactive elements including navigation, animations, form validation, and scroll effects
 */

// ===== GLOBAL VARIABLES =====
let lastScrollTop = 0;
let ticking = false;
let isAnimationTriggered = false;

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeFormHandling();
    initializeSkillBars();
    initializeLazyLoading();
    
    // Show a subtle entrance animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== NAVIGATION FUNCTIONALITY =====
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when mobile menu is open
        document.body.classList.toggle('no-scroll', navMenu.classList.contains('active'));
    });
    
    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    // Handle CTA button scroll
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', handleSmoothScroll);
    }
}

// ===== SMOOTH SCROLLING =====
function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
}

function handleScroll() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}

function updateScrollEffects() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');
    
    // Navbar scroll effect
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (scrollTop > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Active navigation highlighting
    updateActiveNavigation();
    
    // Trigger scroll animations
    triggerScrollAnimations();
    
    lastScrollTop = scrollTop;
    ticking = false;
}

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation classes based on element type
                if (element.classList.contains('skill-item')) {
                    element.classList.add('animate-slide-left');
                } else if (element.classList.contains('project-card')) {
                    element.classList.add('animate-fade-in');
                } else if (element.classList.contains('timeline-item')) {
                    element.classList.add('animate-slide-right');
                } else {
                    element.classList.add('animate-fade-in');
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .contact-item');
    animatedElements.forEach(el => observer.observe(el));
}

function triggerScrollAnimations() {
    // Trigger skill bar animations when skills section is visible
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-bar');
    
    if (skillsSection && !isAnimationTriggered) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            isAnimationTriggered = true;
            setTimeout(() => {
                skillBars.forEach((bar, index) => {
                    setTimeout(() => {
                        const level = bar.getAttribute('data-level');
                        bar.style.width = level + '%';
                    }, index * 100);
                });
            }, 500);
        }
    }
}

// ===== SKILL BARS ANIMATION =====
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

// ===== FORM HANDLING =====
function initializeFormHandling() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => clearFieldError(input));
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('i');
    
    // Validate all fields
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Reset button state
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fas fa-paper-plane';
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        
        // In real implementation, you would send the data to your backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle response
        // })
        // .catch(error => {
        //     // Handle error
        // });
    }, 2000);
}

function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && fieldValue === '') {
        isValid = false;
        errorMessage = 'This field is required.';
    }
    
    // Email validation
    if (fieldName === 'email' && fieldValue !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fieldValue)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    }
    
    // Name validation
    if (fieldName === 'name' && fieldValue !== '') {
        if (fieldValue.length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters long.';
        }
    }
    
    // Message validation
    if (fieldName === 'message' && fieldValue !== '') {
        if (fieldValue.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters long.';
        }
    }
    
    // Display error
    if (errorElement) {
        if (!isValid) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            field.classList.add('error');
        } else {
            errorElement.style.display = 'none';
            field.classList.remove('error');
        }
    }
    
    return isValid;
}

function clearFieldError(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
        errorElement.style.display = 'none';
        field.classList.remove('error');
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff4757' : '#64ffda'};
        color: #0a192f;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                margin-left: auto;
                padding: 5px;
            }
            .notification-close:hover {
                opacity: 0.7;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Handle close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== BACK TO TOP BUTTON =====
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ===== LAZY LOADING =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger loading
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.src;
            img.classList.add('loaded');
        });
    }
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    }
    
    // Arrow key navigation for social links and nav items
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const focusedElement = document.activeElement;
        
        if (focusedElement.classList.contains('nav-link')) {
            const navLinks = Array.from(document.querySelectorAll('.nav-link'));
            const currentIndex = navLinks.indexOf(focusedElement);
            
            if (e.key === 'ArrowRight' && currentIndex < navLinks.length - 1) {
                navLinks[currentIndex + 1].focus();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                navLinks[currentIndex - 1].focus();
            }
        }
        
        if (focusedElement.classList.contains('social-link')) {
            const socialLinks = Array.from(document.querySelectorAll('.social-link'));
            const currentIndex = socialLinks.indexOf(focusedElement);
            
            if (e.key === 'ArrowRight' && currentIndex < socialLinks.length - 1) {
                socialLinks[currentIndex + 1].focus();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                socialLinks[currentIndex - 1].focus();
            }
        }
    }
});

// ===== PERFORMANCE OPTIMIZATIONS =====

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== RESIZE HANDLER =====
window.addEventListener('resize', throttle(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    // Recalculate scroll positions
    updateScrollEffects();
}, 250));

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error occurred:', e.error);
    // In production, you might want to send errors to a logging service
});

// ===== ANALYTICS AND TRACKING =====
function trackInteraction(action, category = 'User Interaction') {
    // Google Analytics 4 event tracking (if GA4 is implemented)
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': window.location.pathname
        });
    }
    
    // Alternative analytics tracking can be added here
    console.log(`Tracked: ${category} - ${action}`);
}

// Track important user interactions
document.addEventListener('click', function(e) {
    const target = e.target.closest('[data-track]');
    if (target) {
        const action = target.getAttribute('data-track');
        trackInteraction(action);
    }
    
    // Track navigation clicks
    if (e.target.classList.contains('nav-link')) {
        trackInteraction('Navigation Click', 'Navigation');
    }
    
    // Track social link clicks
    if (e.target.closest('.social-link')) {
        const platform = e.target.closest('.social-link').getAttribute('aria-label');
        trackInteraction(`Social Click: ${platform}`, 'Social Media');
    }
    
    // Track CTA button clicks
    if (e.target.classList.contains('cta-button')) {
        trackInteraction('CTA Button Click', 'Conversion');
    }
});

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Skip to main content functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create skip link if it doesn't exist
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.className = 'skip-link';
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #64ffda;
            color: #0a192f;
            padding: 8px;
            z-index: 10001;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
});

// Announce page changes to screen readers
function announcePageChange(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ===== DEVELOPER CONSOLE EASTER EGG =====
console.log(`
%c🔒 Jerome Wachira - Cybersecurity Portfolio 🔒
%cLooking at the code? Great! Security-minded individuals always inspect the details.
%cFeel free to reach out if you'd like to collaborate or discuss cybersecurity opportunities.
%c
Contact: contact@myportfolio.com
LinkedIn: https://linkedin.com/in/jerome-wachira
GitHub: https://github.com/jerome-wachira
`, 
'color: #64ffda; font-size: 16px; font-weight: bold;',
'color: #8892b0; font-size: 12px;',
'color: #00ff88; font-size: 12px;',
'color: #64ffda; font-size: 11px; font-family: monospace;'
);

// ===== INITIALIZATION COMPLETE =====
document.addEventListener('DOMContentLoaded', function() {
    announcePageChange('Portfolio page loaded successfully');
    trackInteraction('Page Load', 'Navigation');
});
