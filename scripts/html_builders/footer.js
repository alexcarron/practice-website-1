// Global variable to access website information
import website_info from "../website_info.js";

const footer = (function() {

	let footer_elm = document.createElement("footer");
	
	for (let footer_section in website_info.footer_sections) {
		let footer_section_paragraphs = website_info.footer_sections[footer_section];
		
		let section_elm = document.createElement("section"),
			h2_elm = document.createElement("h2");
		
		section_elm.classList.add(footer_section.replace(" ", "_").toLowerCase())
		h2_elm.textContent = footer_section;;
		
		section_elm.append(h2_elm);
		
		for (let paragraph of footer_section_paragraphs) {
			let paragraph_elm = document.createElement("p");
			paragraph_elm.innerHTML = paragraph;
			
			section_elm.append(paragraph_elm);
		}
		
		footer_elm.append(section_elm);
	}
	
	return footer_elm
})();

export default footer