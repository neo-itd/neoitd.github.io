/* 
    @author Neo Interface Technology & Design <xyz@neoitd.org)
    @name clock.js
    @purpose Control the main clock display.
    @date 2023 02 22
*/
//-------------------------------------------------------------------
setInterval(()=>{
	Clock.update();
}, 1000);

class Clock {
	static update(){
		let date = new Date();
		let clock_element = document.querySelector("#clock");
		if (clock_element){
			clock_element.innerHTML = `${ date.toLocaleTimeString("en-US", { 
				hour12: false })}`;
	} else {
		console.log( "🤔 There is no such element.");
	}
	return { element: clock_element, date: date };
	}
}