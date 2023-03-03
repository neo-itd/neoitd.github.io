/* 
    @author Neo Interface Technology & Design <xyz@neoitd.org)
    @name button_actions.js
    @purpose Handle intended actions for primary buttons.
    @date 2023 02 22
*/
//-------------------------------------------------------------------
const pulsing_buttons = document.querySelectorAll(".pulsing_button");
const primary_button = {
    appointment: { default: "Let's Sync Time", alt: "Prepare a Calendar Invite" },
    join_discord: { default: "Discord", alt: "Welcome to an inner network." },
    public_repo: { default: "Publicitory", alt: "View Project files and Documentation." },
    comm_key: { default: "[ enter the communication key ]", alt: "Check console for key the key?" }
}
pulsing_buttons.forEach((button)=>{
    button.addEventListener('mouseover', ()=>{
        // setup_style_changes( button,
        //                      "var(--neoBlack)", 
        //                      "var(--neoCanvas)",
        //                      "var(--neoCanvas)",
        //                      "var(--neoCanvas)",
        //                      "1.72s ease-in infinite pulse");
        switch (button.id){
            case "appointment":
                update_inner_html(button, primary_button.appointment.alt);
                break;
            case "join_discord":
                update_inner_html(button, primary_button.join_discord.alt);
                break;
            case "public_repo":
                update_inner_html(button, primary_button.public_repo.alt);
                break;
            case "comm_key":
                update_inner_html(button,primary_button.comm_key.alt )
                break;
            default:
                console.log("No buttons with that id exist.");
        }
    });

    button.addEventListener('mouseout', ()=>{
        setup_style_changes( button,
                             "var(--neoCanvas)", 
                             "var(--neoBlack)",
                             "var(--neoBlack)",
                             "var(--neoBlack)",
                             "none");
        switch (button.id){
            case "appointment":
                update_inner_html(button,primary_button.appointment.default);
                break;
            case "join_discord":
                update_inner_html(button, primary_button.join_discord.default);
                break;
            case "public_repo":
                update_inner_html(button,primary_button.public_repo.default);
                break;
            case "comm_key":
                update_inner_html(button, primary_button.comm_key.default);
                break;
            default:
                console.log("No buttons with that id.");
        }
    });

    button.addEventListener('click', ()=>{
        switch (button.id){
            case "appointment":
                open_modal( "appointment_modal", 0,
                            "appointment_modal_close");
                break;
            case "join_discord":
                open_modal("discord_modal", 1,
                           "discord_modal_close");
                break;
            case "public_repo":
                open_modal("public_repo_modal", 2,
                           "repo_modal_close");
                break;
            case "comm_key":
                open_modal("comm_key_modal", 3, 
                           "comm_key_modal_close");
                break;
            default:
                console.log("No buttons with that id.");
        }
    });
});
// -----------------------------------------------------------------------
function setup_style_changes( element,
                              bg_color="inherit", 
                              text_color, 
                              button_color, 
                              button_border, 
                              animation){
        document.body.style.background = bg_color;
        document.body.style.color = text_color;
        element.style.color = button_color;
        element.style.borderColor = button_border;
        element.style.animation= animation;
}

function open_modal(modal_id, button_index, close_button_id){
    const modal = document.querySelector(`#${modal_id}`);
    const open_button = pulsing_buttons[ button_index ];
    const closing_element = document.querySelector(`#${close_button_id}`);
    modal.style.display = "flex";
    closing_element.onclick = () => { 
        modal.style.display = "none"; 
        console.log("Modal closed.");
    };
}