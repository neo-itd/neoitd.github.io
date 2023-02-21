/* 
    @name button_actions.js
    @purpose handle actions for primary buttons.
    @date 2023 02 20
*/
const pulsing_buttons = document.querySelectorAll(".pulsing_button");
const primary_button = {
    appointment: { default: "Let's Sync Time", alt: "Prepare a Calendar Invite" },
    join_discord: { default: "Discord", alt: "Welcome to an inner network." },
    public_repo: { default: "Publicitory", alt: "View Project files and Documentation." },
    comm_key: { default: "[ enter the communication key ]", alt: "You know the key?" }
}
pulsing_buttons.forEach((button)=>{
    button.addEventListener('mouseover', ()=>{
        document.body.style.background = "var(--neoBlack)";
        document.body.style.color = "var(--neoCanvas)";
        button.style.color = "var(--neoCanvas)";
        button.style.border = "2px solid var(--neoCanvas)";
        switch (button.id){
            case "appointment":
                button.innerHTML = primary_button.appointment.alt;
                break;
            case "join_discord":
                button.innerHTML = primary_button.join_discord.alt;
                break;
            case "public_repo":
                button.innerHTML = primary_button.public_repo.alt;
                break;
            case "comm_key":
                button.innerHTML = primary_button.comm_key.alt;
                break;
            default:
                console.log("No buttons with that id exist.");
        }
    });

    button.addEventListener('mouseout', ()=>{
        document.body.style.background = "var(--neoCanvas)";
        document.body.style.color = "var(--neoBlack)";
        button.style.color = "var(--neoBlack)";
        button.style.border = "2px solid var(--neoBlack)";
        switch (button.id){
            case "appointment":
                button.innerHTML = primary_button.appointment.default;
                break;
            case "join_discord":
                button.innerHTML = primary_button.join_discord.default;
                break;
            case "public_repo":
                button.innerHTML = primary_button.public_repo.default;
                break;
            case "comm_key":
                button.innerHTML = primary_button.comm_key.default;
                break;
            default:
                console.log("No buttons with that id.");
        }
    });

    button.addEventListener('click', ()=>{
        switch (button.id){
            case "appointment":
                open_modal("#appointment_modal", 0)
                break;
            case "join_discord":
                open_modal("#discord_modal", 1);
                break;
            case "public_repo":
                open_modal("#public_repo", 2)
                break;
            case "comm_key":
                open_modal("#comm_key", 3)
                break;
            default:
                console.log("No buttons with that id.");
        }
    });
});

function open_modal(modal_id, button_index=0){
    const modal = document.querySelector(modal_id);
    const open_button = pulsing_buttons[ button_index ];
    const closing_element = document.querySelector("#close_modal");
    modal.style.display = "flex";
    closing_element.onclick = () => { modal.style.display = "none"; };
}

/*
function open_appt_modal(){
    const modal = document.querySelector(".appointment_modal");
    const open_button = pulsing_buttons[0];
    const closing_element = document.querySelector("#close_modal");
    console.log(closing_element);
    modal.style.display = "flex";
    closing_element.onclick = () => { modal.style.display = "none"; };
}
*/