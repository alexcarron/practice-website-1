// Global variable to access website information
import website_info from "../website_info.js";

const header = (function() {

	let header_elm = document.createElement("header"),
		logo_elm = document.createElement("img"),
		title_elm = document.createElement("h1");
		
	logo_elm.src = website_info.logo_src
	logo_elm.setAttribute("alt", "Game Dev Tales Logo")
	
	title_elm.textContent = website_info.name;
	
	header_elm.append(logo_elm);
	header_elm.append(title_elm);
	
	return header_elm
})();

export default header