// const parent_to_dialog = document.querySelector(".dialog_box_wrapper");
const draggable_window = document.querySelector("#draggable_window");
const neoBlack = "var(--neoBlack)";
const neoCanvas = "var(--neoCanvas)";
const calmTransition = "all 1.24s";

const position = { x: 0, y: 0 }
interact(draggable_window).draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy
      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

const button_text = {
	refresh_dialog: { 
	    default:`<svg viewBox="0 0 10 10" width="0.75em" height="0.75em" stroke="currentColor" stroke-width="2">
						<path d="M2,5 S2,-2 4,5 S7,8 8,4" />
					</svg>
					Refresh`, 
		alt: "Refresh Content." 
	},

	close_dialog: {
	    default:`<svg viewBox="0 0 10 10" width="0.75em" height="0.75em" stroke="currentColor" stroke-width="2">
						<path d="M1,1 9,9 M9,1 1,9" />
					</svg>
					Close`,
	    alt: `Close to proceed.`
	}
};
// 
const dialog_box_nav_buttons = document.querySelectorAll(".dialog_button");
dialog_box_nav_buttons.forEach((button)=>{
	// Event Listener: mouseover
	button.addEventListener('mouseover', ()=>{
		button.style.background = neoBlack;
		button.style.color = neoCanvas;
		switch (button.id) {
		    case "refresh_dialog":
		    	button.innerHTML = button_text.refresh_dialog.alt;
		    	break;
		    case "close_dialog":
		    	button.innerHTML = button_text.close_dialog.alt;
		    	break;
		    case "select_yes":
		    	break;
		    case "select_no":
		    	break;
		    default:
		    	console.log(`No button with id ${button.id}`);
		}
	});
	// Event Listener: mouseout
	button.addEventListener('mouseout', ()=>{
		button.style.background = neoCanvas; 
		button.style.color = neoBlack;
		switch (button.id) {
		    case "refresh_dialog":
		    	button.innerHTML = button_text.refresh_dialog.default;
		    	break;
		    case "close_dialog":
		    	button.innerHTML = button_text.close_dialog.default;
		    	break;
		    case "select_yes":
		    	break;
		    case "select_no":
		    	break;
		    default:
		    	console.log(`No button with id ${button.id}`);
		}
	});
	// Event Listener: click
	button.addEventListener('click', ()=>{
		switch (button.id) {
		    case "refresh_dialog":
		    	break;
		    case "close_dialog":
		    	console.log("Dialog Window closed.");
		    	draggable_window.style.visibility= "hidden";
		    	// draggable_window.classList.value = false;
		    	// draggable_window.classList.toggle("close_window");
		    	break;
		    case "select_yes":
		    	break;
		    case "select_no":
		    	break;
		    default:
		    	console.log(`No button with id ${button.id}`);
		}
	});
});



