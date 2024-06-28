let first = Math.ceil(Math.random() * 100);
let second = Math.ceil(Math.random() * 100);
let fI = document.getElementById("firstNumber");
fI.textContent = first;
let sI = document.getElementById("secondNumber");
sI.textContent = second;
let chck = document.getElementById("checkButton");

function checking() {
    if (parseInt(document.getElementById("userInput").value) === parseInt(first) + parseInt(second)) {
        document.getElementById("gameResult").textContent = "Congratulations!You got it right";
        document.getElementById("gameResult").style.color = "white";
        document.getElementById("gameResult").style.backgroundColor = "#028a0f";
    } else {
        document.getElementById("gameResult").textContent = "Please Try Again!";
        document.getElementById("gameResult").style.color = "white";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c";
    }
}

function restartButton() {
    first = document.getElementById("firstNumber").textContent = Math.ceil(Math.random() * 100);
    second = document.getElementById("secondNumber").textContent = Math.ceil(Math.random() * 100);
    document.getElementById("userInput").value = "";
    document.getElementById("gameResult").textContent = "";
}