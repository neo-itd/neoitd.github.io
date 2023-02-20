/* 
    @name button_actions.js
    @purpose
    @date 2023 02 20
*/
const pulsing_buttons = document.querySelectorAll(".pulsing_button");

pulsing_buttons.forEach((button)=>{
    button.addEventListener('mouseover', ()=>{
        document.body.style.background = "var(--neoBlack)";
        document.body.style.color = "var(--neoCanvas)";
        button.style.color = "var(--neoCanvas)";
        button.style.border = "2px solid var(--neoCanvas)";
        button.style.transition = "all 1.72s;";
        switch (button.id){
            case "appointment":
                button.innerHTML = "Prepare for a Cal invite!";
                break;
            case "join_discord":
                button.innerHTML = "Welcome to an inner circle.";
                break;
            case "foundation_repo":
                button.innerHTML = "Our Project files and documentation.";
                break;
            case "general_email":
                button.innerHTML = "Keep it spamless.";
                break;
            default:
                console.log("No buttons with that id.");
        }
    });

    button.addEventListener('mouseout', ()=>{
        document.body.style.background = "var(--neoCanvas)";
        document.body.style.color = "var(--neoBlack)";
        button.style.color = "var(--neoBlack)";
        button.style.border = "2px solid var(--neoBlack)";
        switch (button.id){
            case "appointment":
                button.innerHTML = "Schedule an Appointment.";
                break;
            case "join_discord":
                button.innerHTML = "Join Neo's Discord.";
                break;
            case "foundation_repo":
                button.innerHTML = "View Neo's Repository.";
                break;
            case "general_email":
                button.innerHTML = "Email Neo.";
                break;
            default:
                console.log("No buttons with that id.");
        }
    });


});