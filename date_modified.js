update_footer_date();
function update_footer_date(){
	const footer_date = document.querySelector("#date_of_update");
	const date_updated = new Date(2023, 2, 21, 13);
	footer_date.innerHTML = `Last Modified: ${date_updated}`;
}