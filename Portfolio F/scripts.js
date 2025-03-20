// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Create stars background animation
function createStars() {
    const stars = document.querySelector('.stars');
    if (!stars) return;
    
    const count = document.body.getAttribute('data-theme') === 'dark' ? 200 : 100;
    stars.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${Math.random() > 0.5 ? 'var(--accent-color)' : 'var(--primary-color)'};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: twinkle ${duration}s infinite ${delay}s;
            box-shadow: 0 0 ${size * 2}px var(--glow-color);
        `;
        stars.appendChild(star);
    }
}

// Add animation keyframes for stars
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize stars on load
window.addEventListener('load', createStars);

// Scroll-triggered animations for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes and observe sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Add animation styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .skill-progress::after {
        width: 0;
        transition: width 1s ease-out;
    }

    .animate .skill-progress::after {
        width: calc(var(--percentage) * 1%);
    }
`;
document.head.appendChild(animationStyles);

// Mobile menu toggle
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--primary-color);
        cursor: pointer;
        padding: 0.5rem;
    `;

    const mobileMenuStyles = document.createElement('style');
    mobileMenuStyles.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-button {
                display: block !important;
            }

            nav ul {
                display: none;
                width: 100%;
                padding: 1rem 0;
            }

            nav.active ul {
                display: flex;
            }
        }
    `;
    document.head.appendChild(mobileMenuStyles);

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    nav.parentElement.insertBefore(menuButton, nav);
};

// Initialize mobile menu
createMobileMenu();

// Typing animation for the introduction
function createTypingAnimation() {
    const text = document.querySelector('.text-content h2');
    const originalText = text.textContent;
    text.textContent = '';
    
    let charIndex = 0;
    const typeInterval = setInterval(() => {
        if (charIndex < originalText.length) {
            text.textContent += originalText[charIndex];
            charIndex++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Initialize typing animation when the home section is visible
const homeSection = document.querySelector('.home');
const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createTypingAnimation();
            homeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

homeObserver.observe(homeSection);

// Add active state to navigation links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const targetId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${targetId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Add active link styles
const navStyles = document.createElement('style');
navStyles.textContent = `
    nav a.active {
        color: var(--primary-color);
        font-weight: 700;
    }
`;
document.head.appendChild(navStyles);

// Listen for scroll events to update active nav link
window.addEventListener('scroll', updateActiveNavLink);

// Dark theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check system preference for dark mode
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set theme
function setTheme(isDark) {
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    if (isDark) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.checked = true;
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.checked = false;
    }
    // Update stars for the current theme
    createStars();
}

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme === 'dark');
} else {
    setTheme(prefersDarkScheme.matches);
}

// Listen for theme toggle changes
themeToggle.addEventListener('change', () => {
    setTheme(themeToggle.checked);
});

// Listen for system theme changes
prefersDarkScheme.addListener((e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
    }
});

// Enhanced theme toggle with transition
themeToggle.addEventListener('change', () => {
    document.body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    if (themeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        createStars(); // Recreate stars for dark theme
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        createStars(); // Recreate stars for light theme
    }
});

// Enhanced scroll animations with premium effects
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Add premium animations to skill icons
            if (entry.target.classList.contains('skill-category')) {
                entry.target.querySelector('.skill-icon').classList.add('animate-float');
                entry.target.classList.add('animate-glow');
                
                // Animate skill progress bar
                const progressBar = entry.target.querySelector('.skill-progress');
                if (progressBar) {
                    const percentage = progressBar.style.getPropertyValue('--percentage');
                    progressBar.style.setProperty('width', `${percentage}%`);
                }
            }
            
            // Add premium animations to project cards
            if (entry.target.classList.contains('project-card')) {
                entry.target.classList.add('animate-pulse');
                entry.target.querySelector('.card-inner').classList.add('animate-glow');
            }
            
            observer.unobserve(entry.target);
        }
    });
};

const scrollObserver = new IntersectionObserver(animateOnScroll, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements for scroll animations
document.querySelectorAll('.skill-category, .project-card, section').forEach(element => {
    element.classList.add('fade-in');
    scrollObserver.observe(element);
});

// Enhanced mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Enhanced menu icon animation
        const icon = mobileMenuBtn.querySelector('i');
        icon.style.transition = 'transform 0.3s ease';
        icon.style.transform = nav.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0)';
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !e.target.closest('nav') && 
        !e.target.closest('.mobile-menu-button')) {
        nav.classList.remove('active');
    }
});

// Enhanced typing animation with cursor effect
function createEnhancedTypingAnimation() {
    const text = document.querySelector('.text-content h2');
    const originalText = text.textContent;
    text.innerHTML = '';
    
    // Create cursor element
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.innerHTML = '|';
    cursor.style.cssText = `
        color: var(--accent-color);
        margin-left: 2px;
        font-weight: 100;
        animation: blink 1s infinite;
    `;
    
    let charIndex = 0;
    const typeInterval = setInterval(() => {
        if (charIndex < originalText.length) {
            const char = originalText[charIndex];
            const span = document.createElement('span');
            span.textContent = char;
            span.style.cssText = `
                display: inline-block;
                opacity: 0;
                transform: translateY(10px);
                animation: fadeInUp 0.3s forwards;
                animation-delay: ${charIndex * 0.05}s;
            `;
            text.appendChild(span);
            charIndex++;
        } else {
            clearInterval(typeInterval);
            text.appendChild(cursor);
        }
    }, 50);
}

// Initialize enhanced typing animation
const enhancedHomeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createEnhancedTypingAnimation();
            enhancedHomeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

enhancedHomeObserver.observe(document.querySelector('.home'));

// Premium smooth parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.skill-category, .project-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.05;
        const delay = index * 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
        element.style.transitionDelay = `${delay}s`;
    });
});

// Enhanced active navigation highlighting
function updateActiveNavWithOffset() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    const scrollPosition = window.pageYOffset + 100; // Offset for better accuracy

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const targetId = section.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${targetId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavWithOffset);
window.addEventListener('load', updateActiveNavWithOffset);

// Add premium scroll animations
const premiumScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Enhanced skill category animations
            if (entry.target.classList.contains('skill-category')) {
                const icon = entry.target.querySelector('.skill-icon');
                const progress = entry.target.querySelector('.skill-progress');
                
                icon.style.animation = 'iconFloat 3s ease-in-out infinite';
                entry.target.classList.add('animate-glow');
                
                if (progress) {
                    const percentage = progress.getAttribute('data-percentage');
                    progress.style.setProperty('--percentage', percentage);
                    progress.classList.add('animate-progress');
                }
            }
            
            // Enhanced project card animations
            if (entry.target.classList.contains('project-card')) {
                entry.target.classList.add('animate-rise');
                const inner = entry.target.querySelector('.card-inner');
                inner.classList.add('animate-glow');
                
                // Add hover effect listeners
                entry.target.addEventListener('mouseenter', () => {
                    inner.style.transform = 'scale(1.02) rotateY(180deg)';
                });
                
                entry.target.addEventListener('mouseleave', () => {
                    inner.style.transform = 'scale(1) rotateY(180deg)';
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
};

// Enhanced parallax effect
const premiumParallax = () => {
    const parallaxElements = document.querySelectorAll('.skill-category, .project-card');
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.05;
        const delay = index * 0.1;
        const yPos = -(scrolled * speed);
        const scale = 1 - Math.abs(yPos) * 0.001;
        
        element.style.transform = `
            translateY(${yPos}px) 
            scale(${Math.max(scale, 0.95)})
        `;
        element.style.transitionDelay = `${delay}s`;
    });
};

// Add premium animation styles
const premiumAnimationStyles = document.createElement('style');
premiumAnimationStyles.textContent = `
    @keyframes iconFloat {
        0%, 100% { transform: translateY(0) rotate(0); }
        50% { transform: translateY(-10px) rotate(5deg); }
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    
    @keyframes animate-progress {
        from { width: 0; }
        to { width: var(--percentage); }
    }
    
    .animate-rise {
        animation: rise 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes rise {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(premiumAnimationStyles);

// Initialize premium effects
window.addEventListener('load', () => {
    createStars();
    addImageHoverEffect();
    document.body.classList.add('loaded');
});

window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        scrollReveal();
        updateActiveNavWithOffset();
        premiumParallax();
    });
});

// Enhanced smooth scroll
function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 80;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Enhanced scroll reveal
const scrollReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

// Add scroll reveal class to elements
document.querySelectorAll('section, .skill-category, .project-card, .certification-card').forEach(element => {
    element.classList.add('scroll-reveal');
});

// Enhanced image hover effect
function addImageHoverEffect() {
    const images = document.querySelectorAll('.project-image img, .profile-pic img');
    
    images.forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = img.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            
            img.style.transform = `
                scale(1.05) 
                perspective(1000px)
                rotateY(${(x - 0.5) * 10}deg)
                rotateX(${(y - 0.5) * -10}deg)
            `;
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) perspective(1000px) rotateY(0) rotateX(0)';
        });
    });
}

// Enhanced navigation click handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoothScroll(target, 1000);
        }
    });
});

// Add premium animation styles
const enhancedAnimationStyles = document.createElement('style');
enhancedAnimationStyles.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;
document.head.appendChild(enhancedAnimationStyles);

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const cards = document.querySelectorAll('.certification-card');
    const totalCards = cards.length;
    const cardsPerView = 3;
    let currentIndex = 0;
    let interval;

    // Clone cards for infinite loop
    const cloneCards = () => {
        const firstCards = Array.from(cards).slice(0, cardsPerView);
        const lastCards = Array.from(cards).slice(-cardsPerView);
        
        lastCards.forEach(card => {
            const clone = card.cloneNode(true);
            track.insertBefore(clone, track.firstChild);
        });
        
        firstCards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // Create navigation dots
    const createDots = () => {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-nav';
        
        for(let i = 0; i < Math.ceil(totalCards / cardsPerView); i++) {
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
        
        track.parentElement.appendChild(dotsContainer);
        return dotsContainer.querySelectorAll('.slider-dot');
    }

    // Initialize slider
    const initSlider = () => {
        cloneCards();
        const dots = createDots();
        updateDots(dots);
        
        // Position slider at first real slide
        track.style.transform = `translateX(-${cardsPerView * 100 / totalCards}%)`;
        
        // Start automatic sliding
        startAutoSlide();
        
        // Pause on hover
        track.parentElement.addEventListener('mouseenter', stopAutoSlide);
        track.parentElement.addEventListener('mouseleave', startAutoSlide);
    }

    // Update navigation dots
    const updateDots = (dots) => {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Go to specific slide
    const goToSlide = (index) => {
        currentIndex = index;
        const dots = document.querySelectorAll('.slider-dot');
        updateDots(dots);
        
        const offset = -(cardsPerView + (index * cardsPerView)) * (100 / totalCards);
        track.style.transform = `translateX(${offset}%)`;
    }

    // Next slide
    const nextSlide = () => {
        const dots = document.querySelectorAll('.slider-dot');
        currentIndex = (currentIndex + 1) % Math.ceil(totalCards / cardsPerView);
        goToSlide(currentIndex);
    }

    // Start automatic sliding
    const startAutoSlide = () => {
        interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    // Stop automatic sliding
    const stopAutoSlide = () => {
        clearInterval(interval);
    }

    // Handle transition end
    track.addEventListener('transitionend', () => {
        if (currentIndex === Math.ceil(totalCards / cardsPerView) - 1) {
            track.style.transition = 'none';
            currentIndex = 0;
            goToSlide(currentIndex);
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease-in-out';
            }, 10);
        }
    });

    // Initialize the slider
    initSlider();

    const sliderContainer = document.querySelector('.slider-container');

    // Optional: Add smooth scrolling for mouse wheel
    sliderContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        sliderContainer.scrollBy({
            left: e.deltaY < 0 ? -100 : 100, // Adjust scroll amount
            behavior: 'smooth'
        });
    });

    // Optional: Add touch/mouse drag scrolling
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        sliderContainer.style.cursor = 'grabbing';
        startX = e.pageX - sliderContainer.offsetLeft;
        scrollLeft = sliderContainer.scrollLeft;
    });

    sliderContainer.addEventListener('mouseleave', () => {
        isDown = false;
        sliderContainer.style.cursor = 'grab';
    });

    sliderContainer.addEventListener('mouseup', () => {
        isDown = false;
        sliderContainer.style.cursor = 'grab';
    });

    sliderContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        sliderContainer.scrollLeft = scrollLeft - walk;
    });
}); 