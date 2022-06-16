// Global variable to access website information
const website_info = (function() {

	let name = "Game Dev Tales",
		description = "This is a game development blog where I update people on the process of making my games. Here you can find useful information and tips on how to be a great game developer.",
		logo_src = "./images/game_dev_tales_logo.png",
		pages = ["Home", "My Games", "Contact Me"],
		footer_sections = {
			"COPYRIGHT": [`&copy;Game Dev Tales 2022`],
			"PHONE NUMBER": [`<a href="tele:2911722138"> (291) 172-2138 </a>`],
			"EMAIL": [`<a href="mailto:gamedevtales@gmail.com"> gamedevtales@gmail.com </a>`],
		};
	
	return {name, description, logo_src, pages, footer_sections}
		
})();

export default website_info