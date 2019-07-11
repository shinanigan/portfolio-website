function menuToggle() {
  var navbar = document.getElementById('myNavtoggle');
  if (navbar.className === 'navtoggle') {
    navbar.className += ' responsive';
  } else {
    navbar.className = 'navtoggle';
  }
}

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#topBtn').fadeIn(200);
    } else {
        $('#topBtn').fadeOut(200);
    }
});
$('#topBtn').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
