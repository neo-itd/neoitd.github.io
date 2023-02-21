let toast = { message: { timer_available: "Timer Metadata now available." } };
class Timer {
		_password = "check the timer's metadata.";
		constructor() { this.seconds = 0;
		                this.milliseconds = 1000;
		                this.minute_value = 1;
		                this.max_open = 60 || (this.milliseconds * this.minute_value); }
		increment(){ 
			this.seconds += 1; 
		}
	}
let window_closed = false;
let dialog_element = document.querySelector("#window_open_for");	
let timer = new Timer();
let window_interval = setInterval(run_timer, timer.milliseconds);
function run_timer(){
	// check_if_window_closed();
	timer.increment();
	dialog_element.innerHTML= `Window open for ${timer.seconds} seconds, Closing in ${timer.max_open - timer.seconds} seconds.`;
	if (timer.seconds >= timer.max_open || window_closed){
		// stop_timer(window_interval);
	}
}
function stop_timer(){
	// console.log(toast.message.timer_available); // turn this into a toast message.
	// clearInterval(window_interval);
	// draggable_window.classList.remove("close_window"); 
	console.table(timer);
	return timer;
}
function check_if_window_closed(){
	if (draggable_window.style.visibility= "hidden"){
		// window_closed = true;
	}
}