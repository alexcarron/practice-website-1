// Global variable to access website information
import website_info from "../website_info.js";

const nav = (function() {

	let nav_elm = document.createElement("nav");
		
	for (let page of website_info.pages) {
		let nav_link_elm = document.createElement("a"),
			nav_link_href = `${page.toLowerCase().replace(" ", "_")}.html`;
		
		if (page.toLowerCase() === "home") {
			nav_link_elm.setAttribute("href", "index.html");
		} else {
			nav_link_elm.setAttribute("href", nav_link_href);
		}
		nav_link_elm.textContent = page;
		
		nav_elm.append(nav_link_elm);
	}
	
	return nav_elm
})();

export default nav