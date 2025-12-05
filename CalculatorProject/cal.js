const calculator = () => {
    let value1 = parseFloat(document.querySelector("#num1").value);
    let value2 = parseFloat(document.querySelector("#num2").value);
  
    let result = document.querySelector("#opt");

    switch (operator) {
        case "+": result.innerHTML = Answer is ${value1 + value2}😎;
        break;
        case "-": result.innerHTML = Answer is ${value1 - value2}😎;
        break;
        case "*": result.innerHTML = Answer is ${value1 * value2}😎;
        break;
        case "/": result.innerHTML = Answer is ${value1 / value2}😎;
        break;
        case "%": result.innerHTML = Answer is ${value1 % value2}😎;
        break;
        default:
            alert("Invalid operator");
            break;
        
   
    }

};