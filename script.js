// ============================================
// REVEAL ANIMATIONS (clean, somente IntersectionObserver)
// ============================================

// Observer leve para revelar elementos na viewport
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classes de reveal nos blocos principais
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach((section, index) => {
        section.classList.add('reveal');
        revealObserver.observe(section);
    });
    
    // Revela itens individuais das principais grids
    const gridItems = document.querySelectorAll('.plans-grid > *, .differentials-grid > *, .faq-grid > *, .testimonials-grid > *, .achievements-grid > *');
    gridItems.forEach(item => {
        item.classList.add('reveal-scale');
        revealObserver.observe(item);
    });
});

// ============================================
// ANIMATED COUNTER FOR ACHIEVEMENTS
// ============================================

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe achievements section
const achievementsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach(counter => {
                if (counter.textContent === '0') {
                    animateCounter(counter);
                }
            });
            achievementsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const achievementsSection = document.querySelector('.achievements');
    if (achievementsSection) {
        achievementsObserver.observe(achievementsSection);
    }
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const nav = document.getElementById('mainNav');
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                toggle.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
});

// ============================================
// REDIRECT TO WHATSAPP
// ============================================

function redirectWhatsApp(planName, price) {
    // Número do WhatsApp (com código de país: 55 = Brasil)
    // Número oficial do WhatsApp (55 + DDD + número)
    const whatsappNumber = '556285708074';
    
    // Mensagem padrão
    const message = `Olá! Tenho interesse no plano *${planName}* (R$ ${price}). Gostaria de mais informações.`;
    
    // Criar URL do WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    // Redirecionar
    window.open(whatsappURL, '_blank');
}

// ============================================
// PLAN SELECTION & CHECKOUT (DEPRECATED - keeping for backwards compatibility)
// ============================================

let selectedPlan = {
    name: '',
    price: 0
};

function selectPlan(planName, price) {
    // Redireciona direto para WhatsApp
    redirectWhatsApp(planName, price);
}

// ============================================
// PAYMENT PROCESSING
// ============================================

function processPayment() {
    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const company = document.getElementById('company').value.trim();
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // Validate
    if (!fullName || !email || !phone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Simulate payment processing
    const btn = event.target;
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Processando...';
    
    setTimeout(() => {
        // Show success message
        showPaymentSuccess(fullName, email, paymentMethod);
        
        // Reset button
        btn.disabled = false;
        btn.textContent = originalText;
    }, 2000);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showPaymentSuccess(name, email, method) {
    const modalContent = document.querySelector('.modal-content');
    
    const successHTML = `
        <button class="modal-close" onclick="closeCheckout()">✕</button>
        <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
            <h3 style="color: #10b981; margin-bottom: 1rem;">Pagamento Processado!</h3>
            <p style="color: #666; margin-bottom: 1.5rem;">
                Olá, <strong>${name}</strong>!<br>
                Confirmação foi enviada para <strong>${email}</strong>
            </p>
            <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 1.5rem; border-left: 4px solid #10b981;">
                <p style="color: #166534; margin-bottom: 0.5rem;">
                    <strong>Próximo Passo:</strong>
                </p>
                <p style="color: #166534;">
                    Você vai responder o briefing estratégico que substitui nossa reunião.
                </p>
            </div>
            <button class="btn btn-primary" onclick="goToBriefing()">
                Ir para o Formulário
            </button>
        </div>
    `;
    
    // Store payment info in localStorage
    localStorage.setItem('lastPayment', JSON.stringify({
        name,
        email,
        plan: selectedPlan.name,
        price: selectedPlan.price,
        method,
        timestamp: new Date().toISOString()
    }));
    
    modalContent.innerHTML = successHTML;
}

function goToBriefing() {
    // Placeholder: In production, redirect to briefing form
    alert('Formulário de briefing em desenvolvimento.\n\nNo seu caso seria redirecionado para: https://forms.seu-dominio.com/briefing');
    closeCheckout();
}

// ============================================
// MODAL CLOSE ON OUTSIDE CLICK
// ============================================

window.addEventListener('click', function(event) {
    const modal = document.getElementById('checkoutModal');
    if (event.target === modal) {
        closeCheckout();
    }
});

// ============================================
// SMOOTH SCROLL ENHANCEMENTS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ANIMATION ON SCROLL (Intersection Observer)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe plans, cases, and faq items
document.querySelectorAll('.plan, .case, .faq-item, .step, .differential').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// FORM VALIDATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.querySelector('.checkout-form');
    
    if (checkoutForm) {
        // Real-time validation
        const inputs = checkoutForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
});

function validateField(field) {
    const value = field.value.trim();
    
    if (field.type === 'email') {
        if (!isValidEmail(value)) {
            field.style.borderColor = '#ef4444';
        } else {
            field.style.borderColor = '#10b981';
        }
    } else if (value === '') {
        field.style.borderColor = '#ef4444';
    } else {
        field.style.borderColor = '#10b981';
    }
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(e) {
    // Close modal with Escape
    if (e.key === 'Escape') {
        closeCheckout();
    }
});

// ============================================
// ANALYTICS (Placeholder)
// ============================================

function trackEvent(eventName, data = {}) {
    console.log(`Event: ${eventName}`, data);
    // In production, send to analytics service
    // Example: gtag('event', eventName, data);
}

// Track plan selections
document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', function() {
        const plan = this.closest('.plan').querySelector('h3').textContent;
        trackEvent('plan_selected', { plan });
    });
});

// Track CTA button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('cta_clicked', { text: this.textContent });
    });
});

// ============================================
// HEADER STICKY BEHAVIOR
// ============================================

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ============================================
// RESPONSIVE MENU (Future Enhancement)
// ============================================

function initMobileMenu() {
    // This can be enhanced later for mobile hamburger menu
    const isMobile = window.innerWidth <= 768;
    return isMobile;
}

window.addEventListener('resize', function() {
    // Handle responsive changes
});

// ============================================
// PAGE LOAD EFFECTS
// ============================================

window.addEventListener('load', function() {
    // Add subtle animation to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.animation = 'fadeIn 0.8s ease forwards';
    }
});

// Add animation keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// ============================================
// UTILITY: Get Plan Details
// ============================================

function getPlanDetails(planName) {
    const plans = {
        'CLAREZA': {
            name: 'CLAREZA',
            price: 497,
            days: 3,
            description: 'Diagnóstico e direção'
        },
        'DIREÇÃO': {
            name: 'DIREÇÃO',
            price: 997,
            days: 5,
            description: 'Plano de ação completo'
        },
        'DECISÃO': {
            name: 'DECISÃO',
            price: 1997,
            days: 10,
            description: 'Tudo + suporte + ajustes'
        }
    };
    
    return plans[planName] || null;
}

// ============================================
// DEBUG MODE (Remove in production)
// ============================================

window.DEBUG = {
    getPlan: () => selectedPlan,
    getLastPayment: () => JSON.parse(localStorage.getItem('lastPayment')),
    clearData: () => localStorage.clear()
};

console.log('%c✅ Higor Consultor - Ready to convert!', 'color: #00d4ff; font-size: 14px; font-weight: bold;');
