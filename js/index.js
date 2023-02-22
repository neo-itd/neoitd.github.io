/* 
    @author Neo Interface Technology & Design <xyz@neoitd.org)
    @name index.js
    @purpose House general functions and variables here.
    @date 2023 02 22
*/
//-------------------------------------------------------------------
// Variables
const neo_black = "var(--neoBlack)";
const neo_canvas = "var(--neoCanvas)";
const neo_mint = "var(--neoMatrix)";
//-------------------------------------------------------------------
// Functions
function update_inner_html(element, content){
    element.innerHTML = content;
}

function setup_button_style(element, bg_color, text_color){
    element.style.background = bg_color;
    element.style.color = text_color;
}
