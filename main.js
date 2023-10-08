// Función para borrar el último carácter del campo de entrada
function deleteLastCharacter() {
    var inputField = document.calculator.ans;
    var currentValue = inputField.value;
    if (currentValue.length > 0) {
        inputField.value = currentValue.slice(0, -1);
    }
}

// Función darkmode
let toggle = document.getElementById("darkmode");
let body = document.querySelector("body");

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}