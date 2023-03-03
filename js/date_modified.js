/* 
    @author Neo Interface Technology & Design <xyz@neoitd.org)
    @name date_modified.js
    @purpose Place a date for interface updates. Very timestamp like.
    @date 2023 02 22
*/
//-------------------------------------------------------------------
class Footer {
	static update_date(year, month, day, hour){
		const footer_date = document.querySelector("#date_of_update");
		const date_updated = new Date(year, month, day, hour);
		// const date_updated = window.document.lastModified;
		footer_date.innerHTML = `Last Modified: ${ date_updated }`;
	}
}
Footer.update_date(2023, 2, 3, 11);