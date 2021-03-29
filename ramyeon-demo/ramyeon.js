const btnOrder = document.querySelector(".order");
const btnStatus = document.querySelector(".status");
const btnSteps = document.querySelector(".steps");
const board = document.querySelector(".board");

const cookingSteps = ["Put water in a pot (for 10s)", "Boil water (for 1m)", "Put noodle and soup powder (for 20s)", "Boil for 2 minutes", "Finish!"];
const statusList = ["Filling pot with water...", "Boling water...", "Put noodle and soup powder...", "Boling for 2 minutes..."];

let status = -1;
let interval;

function finish() {
    clearInterval(interval);
    printBoard(cookingSteps[status]);
    status = -1;

    btnOrder.disabled = false;
    btnOrder.classList.remove("disabled");
    btnOrder.classList.add("hover");   
}

function moveToNextStep() {
    status += 1;
    
    if(status == 0)
        setTimeout(moveToNextStep, 10000);
    else if(status == 1)
        setTimeout(moveToNextStep, 60000);
    else if(status == 2)
        setTimeout(moveToNextStep, 20000);
    else if(status == 3)
        setTimeout(moveToNextStep, 120000);
    else
        finish();
}

function printOneMinuteStatus() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();

    let string = "[" + `${hour < 10 ? `0${hour}`:hour}:${minute < 10 ? `0${minute}` : minute}` + "] ";
    string += statusList[status];
    
    printBoard(string);
}

function clearBoard() {
    let pList = document.querySelectorAll("p");

    if(pList != null){
        pList.forEach(function(p) {
            p.remove();
        });        
    }
}

function printBoard(string) {
    let p = document.createElement('p');
    p.innerHTML = `<p id="abc">${string}</p>`;
    board.appendChild(p);
}

function startCookRamyeon() {
    printBoard("Start cooking ⏲");
    moveToNextStep();

    interval = setInterval(printOneMinuteStatus, 60000);
}

function order() {
    clearBoard();

    btnOrder.disabled = true;
    btnOrder.classList.remove("hover");
    btnOrder.classList.add("disabled");

    startCookRamyeon();
}

function printStatus() {
    if(status == -1)
        printBoard("There is no Order");
    else
        printBoard(statusList[status]);
}

function printSteps() {
    let string = "[How we cook Ramyeon]<br>";

    for(let i = 0; i < cookingSteps.length; i++) {
        string += cookingSteps[i];
        if(i < cookingSteps.length -1)
            string += " -> ";
    }
    printBoard(string);
}

function init() {
    btnOrder.addEventListener("click", order);
    btnStatus.addEventListener("click", printStatus);
    btnSteps.addEventListener("click", printSteps);
}

init();
