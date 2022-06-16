let isCustomQuestionInputShown = false;

function checkSelectedOption() {
	let question_select_input = document.querySelector("select#question_input"),
		selected_question = question_select_input.value,
		custom_question_input_container = document.querySelector("div#custom_question_input");
	
	if (selected_question === "Other") {
		custom_question_input_container.style.display = "flex";
		isCustomQuestionInputShown = true;
	} else {
		custom_question_input_container.style.display = "none";
		isCustomQuestionInputShown = false;
	}
}

function validateInputs() {
	let text_inputs = document.querySelectorAll(`input[type="text"]`),
		feedback_text_elm = document.querySelector(`p#feedback_text`),
		areAllInputsFilled = true;
	
	for (let text_input of text_inputs) {
		
		if (text_input.name === "custom_question" && !isCustomQuestionInputShown) {
			continue;
		}
		
		if (!text_input.value) {
			areAllInputsFilled = false;
			text_input.style = `
				background-color: #FFAAAA;
				border-color: #660000;
			`; 
		} else {
			text_input.style = ``
		}
	}
		
	if (!areAllInputsFilled) {
		feedback_text_elm.style = "display: block";
	}
	else {
		feedback_text_elm.style = "display: none";
		alert("Your question has been submitted successfully!");
	}
}