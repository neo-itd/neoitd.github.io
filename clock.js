/* 
    @name clock.js
    @purpose
    @date 2023 02 20
*/

setInterval(()=>{
	update_time();
}, 1000);

function update_time(){
	let date = new Date();
	let clockElement = document.querySelector("#clock");
	if (clockElement){
		clockElement.innerHTML = `${date.toLocaleTimeString()}`;
	} else {
		console.log( "🤔 there is no such element");
	}
	return { element: clockElement, date: date };
}