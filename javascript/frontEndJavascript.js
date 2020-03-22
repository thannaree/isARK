/* A Javascript file with functions use on websites I develop
   !* Author: Thannaree Charoenpokkasap
   !* Website: bow.meys.tel, thannaree.github.io, bow.meystel.com
*/

// A function to switch between full navigation bar (large screen devices) and
// mobile navigation (small screen devices) by clicking the hamburger icon

var navBar = document.getElementById("nav-bar");
var navMobile = document.getElementById("nav-mobile");
var mobileMenu = document.getElementById("side-nav");

function w3_open() {
  document.getElementById("nav-bar").style.display = "block";
  document.getElementById("nav-mobile").style.display = "block";
}

function w3_close() {
  document.getElementById("nav-bar").style.display = "none";
  document.getElementById("nav-mobile").style.display = "none";
}

function toggleNavBar() {
    if (mobileMenu.style.display === "block") {

    }
}

function mobileNav() {

    if (navBar.style.display === "block") {
        // if ()
        theLink.style.display = "none";
    }

    else {
        theLink.style.display = "block";
        // changeIcon.classList.toggle("fas fa-times");
    }
}

/*function toggleMobileNav() {
    if (theIcon.hasAttribute("class")) {
        theIcon.setAttribute("class", "fas fa-times");
    }
}*/

// A function for mobile navigation -- when click or touch the one of the mobile link,
// the navigation menu will be hidden
function closeMobileNav() {
    theLink.style.display = "none";
    overlay.style.display = "none";
}

document.querySelector("#toggle-icon").addEventListener("click", function () {
   this.classList.toggle("active");
});

/*
function toggleIcon(theIcon) {
    theIcon.classList.toggle("fas fa-times");
}
function toggleIcon() {
    var changeIcon = document.getElementById("bar-icon");
    changeIcon.classList.toggle("fas fa-times");
}*/

// A function to switch between icon bar and x bar for the mobile menu
/*function switchIcon(theIcon) {
    if (document.getElementById(theIcon).className === "fas fa-bars bar-icon") {
        document.getElementById(theIcon).className = "fas fa-times";
    }

    else {
        document.getElementById(theIcon).className = "fas fa-bars bar-icon";
    }
}*/

/*
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction()
};

// Get the header
var topNav = document.getElementById("top-nav");

// Get the offset position of the navbar
var sticky = topNav.offsetTop;

// Add the sticky class to the header when you reach its scroll position.
Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        topNav.classList.add("sticky");
    } else {
        topNav.classList.remove("sticky");
    }
}*/
