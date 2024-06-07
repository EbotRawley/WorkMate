// src/assets/js/navbar.js
$(document).ready(function() {
    alert("hello")
    $('#toggler').click(function() {
        $(this).toggleClass('collapsed');
        $('#navbarNavDropdown').toggleClass('show');
    });

    $('.navbar-nav a, .sign a').click(function() {
        $('#toggler').addClass('collapsed');
        $('#navbarNavDropdown').removeClass('show');
    });
});

