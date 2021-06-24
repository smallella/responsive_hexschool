$(document).ready(function () {
    $('.fa-bars').click(function (e) { 
        e.preventDefault();
        $('.header ul').toggleClass('active');
    });
});