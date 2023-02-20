const dialog_body = document.querySelector(".dialog_body");
const p_element = document.createElement("p");
const messages = { 
    default: "Have you ever experienced a dream that felt unquestionably real?",
    };
p_element.id = "body_message";
p_element.innerHTML = messages.default;
dialog_body.appendChild(p_element);