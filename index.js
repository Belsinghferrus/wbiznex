// Cookie Consent 
const GTM_ID = 'GTM-TKL7NCRW';
function handleCookieConsent(accepted) {
    document.getElementById('cookie-consent')?.classList.add('hidden');
    document.getElementById('sticky-bar')?.classList.remove('hidden');
    localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'rejected');
    if (accepted) {
        loadGTM();
    }
}

//google Tag Manager script loading
function loadGTM() {
    if (document.getElementById('gtm-script')) return;
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'gtm.js', 'gtm.start': new Date().getTime() });
}


window.addEventListener('DOMContentLoaded', () => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'accepted') {
        loadGTM();
        document.getElementById('cookie-consent')?.classList.add('hidden');
        document.getElementById('sticky-bar')?.classList.remove('hidden');
    } else if (consent === 'rejected') {
        document.getElementById('cookie-consent')?.classList.add('hidden');
        document.getElementById('sticky-bar')?.classList.remove('hidden');
    } else {
        // Show consent if not yet set
        document.getElementById('cookie-consent')?.classList.remove('hidden');
        document.getElementById('sticky-bar')?.classList.add('hidden');
    }
});

// Close Sticky Banner 
function closeBanner() {
    document.getElementById('stickyBanner').classList.add('hidden');
}



// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ZOHO FILL FORM
function toggleForm() {
    const form = document.getElementById('zohoForm');
    if (window.innerWidth >= 768) {
        form.classList.toggle('md:hidden');
    }
}


// TOGGLE ZOHO FORM
function toggleZohoForm() {
    const form = document.getElementById('zohoForm');
    // Toggle only on desktop
    if (window.innerWidth >= 768) {
        form.classList.toggle('md:hidden');
    }
    // Smooth scroll to the form
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


(function () { 
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
         if (b) {
             var d = b.createElement('script'); 
             d.innerHTML = "window.__CF$cv$params={r:'93e1a73c44999374',t:'MTc0Njk2NjI2Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; 
             b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { 
                var a = document.createElement('iframe'); a.height = 1; 
                a.width = 1; 
                a.style.position = 'absolute'; 
                a.style.top = 0; 
                a.style.left = 0; 
                a.style.border = 'none'; 
                a.style.visibility = 'hidden'; 
                document.body.appendChild(a); 
                if ('loading' !== document.readyState) c(); 
                else if (window.addEventListener) 
                    document.addEventListener('DOMContentLoaded', c); 
                else { var e = document.onreadystatechange || function () {
                    
                }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
