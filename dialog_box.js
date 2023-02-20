const parent_to_dialog = document.querySelector(".dialog_box_wrapper");
const dialog_box = document.querySelector(".dialog_box");
const neoBlack = "var(--neoBlack)";
const neoCanvas = "var(--neoCanvas)";
const calmTransition = "all 1.24s";
const dialog_box_nav_buttons = document.querySelectorAll(".dialog_button");

dialog_box_nav_buttons.forEach((button)=>{
	
	// Event Listener: mouseover
	button.addEventListener('mouseover', ()=>{
		button.style.background = neoBlack;
		button.style.color = neoCanvas;
		button.style.transition = calmTransition;
		switch (button.id) {
		    case "refresh_dialog":
		    	break;
		    case "close_dialog":
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
		    	break;
		    case "close_dialog":
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
		    	parent_to_dialog.style.zIndex = -2;
		    	document.body.classList.remove(parent_to_dialog.class);
		    	dialog_box.style.visibility = "hidden";
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


// Make the dialog box draggable, manage cursor position. 
dragElement(dialog_box);
function dragElement(element) {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  if (element) {
    element.onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    console.log("Getting the cursor position @ startup.");
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    //  console.log("Calculating new cursor position.");
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // console.log("Setting the elements new position.");
    element.style.top = `${element.offsetTop - pos2}px`;
    element.style.left = `${element.offsetLeft - pos1}px`;
  }

  function closeDragElement() {
    console.log("Mouse released. Stopping movement.");
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
