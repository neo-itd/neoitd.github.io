update_window_timer();
function update_window_timer(){
	let dialog_window_timer = document.querySelector("#window_open_for");
	let seconds = 0;
	const max_open = 60*2;
	setInterval(()=>{
		seconds += 1;
		dialog_window_timer.innerHTML= `Window open for ${seconds} seconds, closing in ${max_open - seconds} seconds.`;
	}, 1000);
	if (seconds >= max_open){
		draggable_window.classList.toggle("close_window"); 
	}
}