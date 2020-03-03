var a, b, result;
function setValues() {
    a = Number(document.getElementById('a').value);
    b = Number(document.getElementById('b').value);
}
function ADD() {
    setValues();
    result = a + b;
    alert(a + " + " + b + " = " + result);
}
function SUBTRACT() {
    setValues();
    result = a - b;
    alert(a + " - " + b + " = " + result);
}
function DIVIDE() {
    setValues();
    result = a / b;
    alert(a + " / " + b + " = " + result);
}
function MULTIPLY() {
    setValues();
    result = a * b;
    alert(a + " * " + b + " = " + result);
}