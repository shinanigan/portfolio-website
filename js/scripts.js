function menuToggle() {
  var navbar = document.getElementById('myNavtoggle');
  if (navbar.className === 'navtoggle') {
    navbar.className += ' responsive';
  } else {
    navbar.className = 'navtoggle';
  }
}
