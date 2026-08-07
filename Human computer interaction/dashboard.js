// Toggle/Collapse Side Menu
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
}

// Switch Active Pages
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
        page.classList.remove("active");
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add("active");
    }
}

// Change Active Menu Indicator
function setActive(clickedButton) {
    const buttons = document.querySelectorAll(".sidebar .menu-btn");
    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });
    clickedButton.classList.add("active");
}

// Show an Alert on Logout
function logout() {
    alert("You have been logged out successfully.");
}