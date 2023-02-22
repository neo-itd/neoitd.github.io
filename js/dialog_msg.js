/* 
    @author Neo Interface Technology & Design <xyz@neoitd.org)
    @name dialog_msg.js
    @purpose Construct the dialog box's message content.
    @date 2023 02 22
*/
//-------------------------------------------------------------------
class Content {
    static construct(){
        const dialog_body = document.querySelector(".dialog_body");
        const p_element = document.createElement("p");
        const messages = { default: "Have you ever experienced a dream that felt unquestionably real?" };
        p_element.id = "body_message";
        p_element.innerHTML = messages.default;
        dialog_body.appendChild(p_element);
        return { parent: dialog_body, element: p_element, message: messages };
    }
}
Content.construct();