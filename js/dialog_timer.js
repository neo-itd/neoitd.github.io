/* 
    @author Neo Interface Technology & Design <xyz@neoitd.org)
    @name dialog_timer
    @purpose Handle the timer within the dialog window.
    @date 2023 02 22
*/
//-------------------------------------------------------------------
let toast = { message: { timer_metadata_available: "Timer Metadata now available." } };

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

let dialog_element = document.querySelector("#window_open_for");	
let window_closed = false;
let timer = new Timer();
let window_interval = setInterval(run_timer, timer.milliseconds);

function run_timer(){
	check_if_window_closed();
	timer.increment();
	update_inner_html(dialog_element,`Window open for ${timer.seconds} seconds<br/>Closing in ${timer.max_open - timer.seconds}.` );
	if ( (timer.seconds >= timer.max_open) || (window_closed) ){
		stop_timer();
	}
}

function check_if_window_closed(){
	if (draggable_window.style.display == "none"){
		window_closed = true;
		stop_timer();
	}
}

function stop_timer(){
	console.log(toast.message.timer_metadata_available); // turn this into a toast message.
	clearInterval(window_interval);
	draggable_window.style.display = "none";
	return timer;
}