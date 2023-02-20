update_window_timer();
function update_window_timer(){
	let dialog_window_timer = document.querySelector("#window_open_for");
	let seconds = 0;
	setInterval(()=>{
		seconds += 1;
		dialog_window_timer.innerHTML = `Window open for ${seconds} seconds.`;
	}, 1000);
	if (seconds > 60*5){
		// close the window. 
	}
}