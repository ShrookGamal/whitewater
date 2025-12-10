document.addEventListener('DOMContentLoaded', () => {
    
    // =============================
    // برمجة قائمة الموبايل (Side Menu)
    // =============================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // فتح القائمة
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    // إغلاق القائمة
    if(closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // إغلاق القائمة عند الضغط على أي رابط
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // إغلاق القائمة عند الضغط خارجها
    window.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });

    // =============================
    // إعدادات السلايدر (Swiper)
    // =============================
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0, 
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// =============================
// وظائف النافذة المنبثقة (Popup)
// =============================

const modal = document.getElementById('contactModal');
const modalTitle = document.getElementById('modalTitle');
const btn1 = document.getElementById('option1');
const btn2 = document.getElementById('option2');

// أرقام التواصل
const number1 = "0532472417";
const number2 = "0509982956";

function openModal(type) {
    modal.style.display = "flex";

    if (type === 'call') {
        modalTitle.innerText = "اتصال مباشر 📞";
        modalTitle.style.color = "#008080"; 
        
        btn1.innerHTML = `<i class="fa-solid fa-mobile-screen"></i> اتصال: ${number1}`;
        btn1.href = "tel:" + number1;
        
        btn2.innerHTML = `<i class="fa-solid fa-mobile-screen"></i> اتصال: ${number2}`;
        btn2.href = "tel:" + number2;

    } else if (type === 'whatsapp') {
        modalTitle.innerText = "مراسلة واتساب 💬";
        modalTitle.style.color = "#25D366"; 
        
        btn1.innerHTML = `<i class="fa-brands fa-whatsapp"></i> واتساب: ${number1}`;
        btn1.href = "https://wa.me/966" + number1.substring(1);
        
        btn2.innerHTML = `<i class="fa-brands fa-whatsapp"></i> واتساب: ${number2}`;
        btn2.href = "https://wa.me/966" + number2.substring(1);
    }
}

function closeModal() {
    modal.style.display = "none";
}

// إغلاق النافذة عند الضغط في الخارج
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}