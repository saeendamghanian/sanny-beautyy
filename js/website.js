/*
  This is only for the WEBSITE

*/

/* 
  Mainbar starts
*/

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("sidenav-items").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidenav-items").style.width = "0";
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const headerElement = document.querySelector("header");
  const headerHeight = headerElement.getBoundingClientRect().height;
  const contactElement = document.querySelector('#contact');

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    headerElement.style.top = `${-1 * headerHeight + 7}px`;
  } else {
    headerElement.style.top = "0";
  }

  if (contactElement) {
    const contactHeight = contactElement.getBoundingClientRect().y;

    if (contactHeight - 50 < 0 ) {
      activeContact();
    } else {
      diactiveContact();
    }
  }
}

function showHeader() {
  document.querySelector("header").style.top = "0px";
}

function activeContact() {
  const navItems = document.querySelectorAll('.nav-item');

  navItems[0].classList.remove('current-page');
  navItems[navItems.length - 1].classList.add('current-page');
}

function diactiveContact() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems[0].classList.add('current-page');
  navItems[navItems.length - 1].classList.remove('current-page');
}

/* 
  Mainbar ends
*/

/* Form scripts starts */

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    if (event.target.value) event.target.classList.add("value-changed");
    else event.target.classList.remove("value-changed");
  });
});

/* Form scripts ends */

