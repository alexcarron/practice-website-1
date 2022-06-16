import footer from "./html_builders/footer.js";
import header from "./html_builders/header.js";
import nav from "./html_builders/nav.js";
// Import header, footer, and nav sections

let nav_elm = document.querySelector("nav"),
	header_elm = document.querySelector("header"),
	footer_elm = document.querySelector("footer");

// Replaces nav, header, and footer with imported ones
nav_elm.innerHTML = nav.innerHTML;
header_elm.innerHTML = header.innerHTML;
footer_elm.innerHTML = footer.innerHTML;