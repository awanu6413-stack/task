const openMenu = document.getElementById('openMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

if (openMenu) openMenu.onclick = toggleMenu;
if (overlay) overlay.onclick = toggleMenu;

function toggleSubMenu(menuId, element) {
    const targetMenu = document.getElementById(menuId);
    const targetArrow = element.querySelector('.arrow');
    
    // Close all other menus
    document.querySelectorAll('.sub-menu').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('open');
            // Find arrows in other wrappers to reset them
            const otherWrapper = menu.closest('.menu-wrapper');
            if(otherWrapper) {
                const otherArrow = otherWrapper.querySelector('.arrow');
                if(otherArrow) otherArrow.classList.remove('rotate');
            }
        }
    });

    targetMenu.classList.toggle('open');
    if (targetArrow) targetArrow.classList.toggle('rotate');
}




const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Change button state
        submitBtn.innerHTML = "Sending...";
        submitBtn.style.opacity = "0.7";

        const formData = new FormData(this);

        try {
            const response = await fetch("https://formspree.io/f/xlgwyaap", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // Show Success Modal
                successModal.classList.add('active');
                contactForm.reset();
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch (error) {
            alert("Error connecting to server.");
        } finally {
            submitBtn.innerHTML = `<span>Send Inquiry</span><span class="material-symbols-outlined">send</span>`;
            submitBtn.style.opacity = "1";
        }
    });
}

function closeModal() {
    successModal.classList.remove('active');
}