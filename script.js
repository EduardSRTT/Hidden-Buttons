function clearInputNumber() {
    document.getElementById("inputNumber").value = "";
}

function printAlert() {
    if (buttonsAppearance === 0) {
        document.getElementById("request").innerHTML =
        "Invalid request &#10008";
        document.getElementById("request").style.display = "inline";
        document.getElementById("request").style.color = "red";
    } else {
        document.getElementById("request").innerHTML =
        "Success &#10004";
        document.getElementById("request").style.display = "inline";
        document.getElementById("request").style.color = "green";
    }
}

function removeAlert() {
    document.getElementById("request").innerHTML = "";
}

function changeButtonStyle() {
    if (buttonsAppearance === 1) {
        document.getElementById("generator").style.background = "#F54646";
        document.getElementById("generator").innerHTML = "<i>Clear</i>";
        document.getElementById("generator").addEventListener("mouseover", function() {
            this.style.background = "#BD0E0E";
        });
        document.getElementById("generator").addEventListener("mouseleave", function() {
            this.style.background = "#F54646";
        });
    } else {
        document.getElementById("generator").style.background = "#CFCFCF";
        document.getElementById("generator").innerHTML = "<i>Generate</i>";
        document.getElementById("generator").addEventListener("mouseover", function() {
            this.style.background = "blue";
        });
        document.getElementById("generator").addEventListener("mouseleave", function() {
            this.style.background = "#CFCFCF";
        });
    }
}

function printButtons() {
    let noButtons = document.getElementById("inputNumber").value;
    for (let i = 0; i < noButtons; ++i) {
        let newButton = document.createElement("button");
        newButton.className = "addedButton";
        newButton.textContent = "Open";
        newButton.style.background = "#CFCFCF";
        document.body.appendChild(newButton);
    }
}

function openButtons() {
    let createdButtons = document.querySelectorAll(".addedButton");
    let winner = Math.floor(Math.random() * createdButtons.length);
    createdButtons.forEach((createdButtons, index) => {
        createdButtons.addEventListener("click", function() {    
            if (winner === index) {
                createdButtons.style.background = "green";
                createdButtons.textContent = "Winner";
            } else {
                createdButtons.style.background = "red";
                createdButtons.textContent = "Loser";
            }
            createdButtons.style.border = "none";
        });
    });
}

function removeButtons() {
    let deletedButtons = document.querySelectorAll(".addedButton");
    deletedButtons.forEach(deletedButtons => {
        deletedButtons.remove();
    })
}

let buttonsAppearance = 0;

function generator() {
    let inputElement = document.getElementById("inputNumber").value;
    if (buttonsAppearance === 0) {
        if (inputElement < 1 || inputElement > 10 || inputElement === "") {
            printAlert();
            setTimeout(removeAlert, 1000);
        } else {
            buttonsAppearance = 1;
            printButtons();
            printAlert();
            setTimeout(removeAlert, 1000);
            changeButtonStyle();
            openButtons();
        }
    } else if (buttonsAppearance === 1) {
        buttonsAppearance = 0;
        changeButtonStyle();
        removeButtons();
        clearInputNumber();
    }
}