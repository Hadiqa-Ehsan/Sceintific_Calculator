var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    let value = button.textContent;

    if (
      value != "=" &&
      value != "C" &&
      value != "x" &&
      value != "÷" &&
      value != "√" &&
      value != "x ²" &&
      value != "%" &&
      value != "<=" &&
      value != "±" &&
      value != "sin" &&
      value != "cos" &&
      value != "tan" &&
      value != "log" &&
      value != "ln" &&
      value != "x^" &&
      value != "x !" &&
      value != "π" &&
      value != "e" &&
      value != "rad" &&
      value != "∘"
    ) {
      // Normal number or operator
      display.value += value;
    } 
    
    else if (value === "=") {
      try {
        if (display.value.includes("^")) {
          let [base, exponent] = display.value.split("^");
          display.value = Math.pow(base, exponent);
        } else {
          display.value = eval(display.value);
        }
      } catch (e) {
        display.value = "Syntax Error";
      }
    } 
    
    else if (value === "C") {
      display.value = "";
    } 
    
    else if (value === "<=") {
      display.value = display.value.slice(0, -1);
    } 
    
    else if (value === "x") {
      display.value += "*";
    } 
    
    else if (value === "÷") {
      display.value += "/";
    } 
    
    else if (value === "±") {
      if (display.value.startsWith("-")) {
        display.value = display.value.slice(1);
      } else {
        display.value = "-" + display.value;
      }
    } 
    
    else if (value === "%") {
      display.value = display.value / 100;
    } 
    
    else if (value === "π") {
      display.value = display.value * Math.PI;
    } 
    
    else if (value === "x ²") {
      display.value = eval(display.value * display.value);
    } 
    
    else if (value === "√") {
      display.value = Math.sqrt(display.value);
    } 
    
    else if (value === "sin") {
      display.value = Math.sin(display.value);
    } 
    
    else if (value === "cos") {
      display.value = Math.cos(display.value);
    } 
    
    else if (value === "tan") {
      display.value = Math.tan(display.value);
    } 
    
    else if (value === "log") {
      display.value = Math.log10(display.value);
    } 
    
    else if (value === "ln") {
      display.value = Math.log(display.value);
    } 
    
    else if (value === "x^") {
      display.value += "^";
    } 
    
    else if (value === "x !") {
      let num = parseInt(display.value);
      if (num < 0) display.value = "undefined";
      else {
        let fact = 1;
        for (let i = 1; i <= num; i++) fact *= i;
        display.value = fact;
      }
    } 
    
    else if (value === "e") {
      display.value = Math.exp(display.value);
    } 
    
    else if (value === "rad") {
      display.value = display.value * (Math.PI / 180);
    } 
    
    else if (value === "∘") {
      display.value = display.value * (180 / Math.PI);
    }
  });
});
