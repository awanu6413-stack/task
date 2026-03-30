/**
 * IMAGE MODAL LOGIC
 * Handles opening and closing a full-screen image view.
 */
function viewImage(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    
    // Safety check to ensure an <img> exists inside the clicked element
    const imgElement = element.getElementsByTagName('img')[0];
    
    if (imgElement && modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imgElement.src;
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modal if user presses 'Esc' key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

/**
 * SIDEBAR & OVERLAY LOGIC
 * Handles the sliding navigation menu.
 */
const openMenu = document.getElementById('openMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Attach listeners only if elements exist to avoid console errors
if (openMenu) openMenu.onclick = toggleMenu;
if (overlay) overlay.onclick = toggleMenu;

/**
 * SUB-MENU ACCORDION LOGIC
 * Opens one sub-menu and closes others.
 */
function toggleSubMenu(menuId, element) {
    const targetMenu = document.getElementById(menuId);
    const targetArrow = element.querySelector('.arrow');
    
    // 1. Close all other sub-menus and reset their arrows
    document.querySelectorAll('.sub-menu').forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('open');
            // Find the arrow associated with this specific menu
            const parentLi = menu.closest('li'); // More robust than parentElement
            const otherArrow = parentLi ? parentLi.querySelector('.arrow') : null;
            if (otherArrow) {
                otherArrow.classList.remove('rotate');
            }
        }
    });

    // 2. Toggle the clicked menu and its arrow
    if (targetMenu) targetMenu.classList.toggle('open');
    if (targetArrow) targetArrow.classList.toggle('rotate');
}

