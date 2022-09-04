function ex1() {
  var num1 = Number(n1.value);
  var num2 = Number(n2.value);
  var oper = calculator.value;
  cal.style.color = "red";
  if (oper == "+") {
    cal.innerHTML = num1 + num2;
  } else if (oper == "-") {
    cal.innerHTML = num1 - num2;
  } else if (oper == "*") {
    cal.innerHTML = num1 * num2;
  } else if (oper == "/") {
    cal.innerHTML = num1 / num2;
  }
}
