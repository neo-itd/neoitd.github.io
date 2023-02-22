/* 
    @author Neo Interface Technology & Design <xyz@neoitd.org)
    @name dialog_box.js
    @purpose Handle the dialog box: content, dragability, buttons, actions.
    @date 2023 02 22
*/
//-------------------------------------------------------------------
const draggable_window = document.querySelector("#draggable_window");
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
	const element_does_not_exist = `No button with id ${button.id} exists.`;
	
	// Event Listener: mouseover
	button.addEventListener('mouseover', ()=>{
		setup_button_style(button, neo_black, neo_canvas);
		switch (button.id) {
		    case "close_dialog":
		    	update_inner_html(button, button_text.close_dialog.alt)
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
		setup_button_style(button, neo_canvas, neo_black);
		switch (button.id) {
		    case "close_dialog":
		    	update_inner_html(button,button_text.close_dialog.default);
		    	break;
		    case "select_yes":
		    	break;
		    case "select_no":
		    	break;
		    default:
		    	console.warn(element_does_not_exist);
		}
	});
	
	// Event Listener: Click
	button.addEventListener('click', ()=>{
		switch (button.id) {
		    case "close_dialog":
		    	console.log("Dialog Window closed.");
		    	draggable_window.style.display= "none";
		    	break;
		    case "select_yes":
		    	break;
		    case "select_no":
		    	break;
		    default:
		    	console.warn(element_does_not_exist);
		}
	});
});



