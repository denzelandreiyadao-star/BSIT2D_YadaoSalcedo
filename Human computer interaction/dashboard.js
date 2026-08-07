
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
}


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


function setActive(clickedButton) {
    const buttons = document.querySelectorAll(".sidebar .menu-btn");
    buttons.forEach((btn) => {
        btn.classList.remove("active");
    });
    clickedButton.classList.add("active");
}


function logout() {
    alert("You have been logged out successfully.");
}