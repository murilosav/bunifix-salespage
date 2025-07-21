// Countdown Timer
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    let hours = 0;
    let minutes = 12;
    let seconds = 59;
    
    const timer = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
                
                if (hours < 0) {
                    // Reset timer when it reaches 0
                    hours = 0;
                    minutes = 12;
                    seconds = 59;
                }
            }
        }
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// FAQ Toggle
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.faq-question i').forEach(item => {
            item.style.transform = 'rotate(0deg)';
        });
        
        // Open clicked FAQ
        answer.classList.add('active');
        icon.style.transform = 'rotate(180deg)';
    }
}

// Scroll to Order Section
function scrollToOrder() {
    const orderSection = document.getElementById('order');
    orderSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// WhatsApp Order
function orderWhatsApp() {
    const message = encodeURIComponent(
        '🦶 Olá! Gostaria de comprar o BUNIFIX™ por R$ 128,95\n\n' +
        '✅ BUNIFIX™ Corretor de Joanete\n' +
        '✅ eBook GRÁTIS\n' +
        '✅ Garantia de 90 Dias\n' +
        '✅ Frete GRÁTIS\n\n' +
        'Como posso finalizar meu pedido?'
    );
    
    const whatsappURL = `https://wa.me/5542988875249?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Floating CTA Control
function handleFloatingCTA() {
    const floatingCTA = document.getElementById('floatingCTA');
    const orderSection = document.getElementById('order');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                floatingCTA.style.display = 'none';
            } else {
                floatingCTA.style.display = 'block';
            }
        });
    });
    
    observer.observe(orderSection);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add animation styles to elements
    const animatedElements = document.querySelectorAll(
        '.feature-item, .benefit-row, .testimonial-item, .step-item, .problem-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Track user engagement
function trackEngagement() {
    let scrollDepth = 0;
    let timeOnPage = 0;
    
    // Track scroll depth
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentDepth = Math.round((currentScroll / documentHeight) * 100);
        
        if (currentDepth > scrollDepth) {
            scrollDepth = currentDepth;
        }
    });
    
    // Track time on page
    const startTime = Date.now();
    setInterval(() => {
        timeOnPage = Math.round((Date.now() - startTime) / 1000);
    }, 1000);
    
    // Log engagement on page unload
    window.addEventListener('beforeunload', () => {
        console.log(`User engagement: ${scrollDepth}% scroll depth, ${timeOnPage}s on page`);
    });
}

// Add urgency elements
function addUrgencyElements() {
    // Random stock numbers
    const stockNumbers = [3, 5, 7, 2, 4, 6];
    const randomStock = stockNumbers[Math.floor(Math.random() * stockNumbers.length)];
    
    // Update stock warnings
    const stockWarnings = document.querySelectorAll('.stock-warning');
    stockWarnings.forEach(warning => {
        warning.innerHTML = `⚠️ APENAS ${randomStock} UNIDADES RESTANTES!`;
    });
    
    // Add recent purchase notifications
    const names = [
        'Maria S.', 'João P.', 'Ana C.', 'Carlos M.', 'Lucia R.', 'Pedro H.', 'Yasmin T.', 'Lorena G.', 'Melina R.', 'Isis C.', 
        'Valentina P.', 'Cecília H.', 'Maíra L.', 'Clara V.', 'Ayra F.', 'Lívia J.',
        'Rebeca M.', 'Eloá N.', 'Tatiane K.', 'Bianca Q.', 'Marina Z.',
        'Jade S.', 'Ayla D.', 'Amanda B.', 'Laís A.', 'Bruna X.',
        'Suelen W.', 'Gabriela E.', 'Nina O.', 'Helena U.', 'Isabela R.',
        'Talita I.', 'Mirela Y.', 'Ana C.', 'Camila F.', 'Rafaela T.', 'Caio M.', 'Ian D.', 'Luan P.', 'Otávio H.', 'Henrique V.',
        'Ícaro L.', 'Noah J.', 'Davi Z.'
    ];
    const cities = [
        'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília', 'Curitiba',
        'Fortaleza', 'Recife', 'Porto Alegre', 'Goiânia', 'Manaus', 'Natal',
        'Maceió', 'Cuiabá', 'Belém', 'Florianópolis', 'Joinville', 'Niterói',
        'Santos', 'Campinas', 'Uberlândia', 'São José dos Campos', 'Sorocaba',
        'Londrina', 'Juiz de Fora', 'Aracaju', 'Vitória', 'Blumenau', 'Pelotas',
        'Rio Branco', 'Boa Vista', 'Porto Velho'
    ];
    
    function showPurchaseNotification() {
        const notification = document.createElement('div');
        notification.className = 'purchase-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">🛒</span>
                <div class="notification-text">
                    <strong>${names[Math.floor(Math.random() * names.length)]}</strong> de ${cities[Math.floor(Math.random() * cities.length)]}
                    <br>acabou de comprar o BUNIFIX™
                </div>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #4caf50;
            color: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1001;
            animation: slideIn 0.5s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 4000);
    }
    
    // Show notifications periodically
    setInterval(showPurchaseNotification, 30000);
    setTimeout(showPurchaseNotification, 7000); // First notification after 7 seconds
}

// Add CSS animations for notifications
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(-100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-icon {
            font-size: 1.5rem;
        }
        
        .notification-text {
            font-size: 0.9rem;
            line-height: 1.3;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    handleFloatingCTA();
    initSmoothScrolling();
    addScrollAnimations();
    trackEngagement();
    addUrgencyElements();
    addNotificationStyles();
    
    // Add click tracking for buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            console.log(`Button clicked: ${this.textContent}`);
        });
    });
});

// Add exit-intent popup
// document.addEventListener('mouseleave', function(e) {
//     if (e.clientY <= 0) {
//         showExitIntentPopup();
//     }
// });

function showExitIntentPopup() {
    // Only show once per session
    if (sessionStorage.getItem('exitIntentShown')) {
        return;
    }
    
    const popup = document.createElement('div');
    popup.className = 'exit-intent-popup';
    popup.innerHTML = `
        <div class="popup-overlay">
            <div class="popup-content">
                <button class="popup-close" onclick="closeExitIntentPopup()">&times;</button>
                <h2>🚨 ESPERE! Não Vá Embora!</h2>
                <p>Você está prestes a perder esta <strong>OFERTA ESPECIAL</strong>!</p>
                <div class="popup-offer">
                    <div class="popup-price">
                        <span class="old-price">De: R$ 386,95</span>
                        <span class="new-price">Por apenas: R$ 128,95</span>
                    </div>
                    <p><strong>+ Frete GRÁTIS + Garantia de 90 dias</strong></p>
                </div>
                <button class="popup-cta" closeExitIntentPopup();">
                    🛒 APROVEITAR OFERTA AGORA
                </button>
                <p class="popup-warning">⏰ Esta oferta expira em poucos minutos!</p>
            </div>
        </div>
    `;
    
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(popup);
    sessionStorage.setItem('exitIntentShown', 'true');
}

function closeExitIntentPopup() {
    const popup = document.querySelector('.exit-intent-popup');
    if (popup) {
        document.body.removeChild(popup);
    }
}

// Add popup styles
const popupStyles = `
    .popup-overlay {
        background: rgba(0,0,0,0.8);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .popup-content {
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        position: relative;
        animation: popupSlide 0.5s ease;
    }
    
    .popup-close {
        position: absolute;
        top: 15px;
        right: 20px;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #999;
    }
    
    .popup-content h2 {
        color: #f44336;
        margin-bottom: 20px;
        font-size: 2rem;
    }
    
    .popup-offer {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 10px;
        margin: 20px 0;
    }
    
    .popup-price .old-price {
        text-decoration: line-through;
        color: #999;
        display: block;
        margin-bottom: 10px;
    }
    
    .popup-price .new-price {
        color: #4caf50;
        font-size: 2rem;
        font-weight: bold;
    }
    
    .popup-cta {
        background: linear-gradient(45deg, #4caf50, #45a049);
        color: white;
        border: none;
        padding: 20px 40px;
        font-size: 1.3rem;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
        margin: 20px 0;
        transition: all 0.3s ease;
    }
    
    .popup-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(76, 175, 80, 0.6);
    }
    
    .popup-warning {
        color: #f44336;
        font-weight: bold;
        animation: blink 1.5s infinite;
    }
    
    @keyframes popupSlide {
        from {
            transform: scale(0.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

// Add popup styles to document
const popupStyleElement = document.createElement('style');
popupStyleElement.textContent = popupStyles;
document.head.appendChild(popupStyleElement);
