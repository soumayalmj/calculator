var buttons = document.querySelectorAll(".btn");
var thingClicked;
var currentValue = document.querySelector("#currentValue");
var operation = document.querySelector("#operation");
var value;
var operator;
var num1;
var num2;
var result;

function calculation(num1, num2, operator) {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    operation.textContent += num2;
    currentValue.textContent = result;
}

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        value = button.innerHTML;
        // click on number
        if (isNaN(value) == false || value == ".") {
            thingClicked = this.innerHTML;
            currentValue.textContent += thingClicked;
        }

        // click on operator
        if (value == "+" || value == "-" || value == "/" || value == "*") {
            // click on operator after a calculation
            if (currentValue.textContent != "" && operation.textContent != "") {
                recupOperation = operation.textContent;
                num1 = parseFloat(recupOperation.substr(0, recupOperation.length - 1));
                operator = recupOperation.substr(recupOperation.length - 1);
                recupNum = currentValue.textContent;
                num2 = parseFloat(recupNum);
                calculation(num1, num2, operator);
            }
            operator = value;
            recupNum = currentValue.textContent;
            num1 = parseFloat(recupNum);
            currentValue.textContent = null;
            operation.textContent = num1 + value;
        }

        // click on = 
        if (value == "=" && currentValue.textContent != "") {
            recupNum = currentValue.textContent;
            num2 = parseFloat(recupNum);
            calculation(num1, num2, operator);
        }

        // click on C
        if (value == "C") {
            operation.textContent = "";
            currentValue.textContent = "";
        }
    });
});