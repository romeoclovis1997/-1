// Example JavaScript for toggling visibility
function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    var sidebar = document.querySelector('.sidebar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
}
