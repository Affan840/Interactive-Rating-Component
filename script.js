let buttons = document.querySelectorAll(".rat");
let value;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        value = Number(e.target.innerText);
        buttons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    })
    
})

let submit = document.querySelector(".submit");

    submit.addEventListener("click", (e) => {
        if(value === undefined) {
            alert("Please select a rating");
            return;
        }
        e.preventDefault();
        document.querySelector("#rating").style.display = "none";
        message.style.opacity = "1";
        message.style.transform = "scale(1)";
        document.querySelector(".msg").innerText = `You selected ${value} out of 5`; 
    });

