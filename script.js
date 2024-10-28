function toggleMenu() {
  const menu = document.querySelector(".menu-links"); // Get the menu element
  const icon = document.querySelector(".hamburger-icon"); // Get the icon element
  menu.classList.toggle("open"); // Add or remove the "open" class
  icon.classList.toggle("open"); // Add or remove the "open" class
}

const scrollButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    scrollButton.classList.add('show'); /* add show class when scrolled down */
  } else {
    scrollButton.classList.remove('show'); /* remove show class when scrolled to top */
  }
});