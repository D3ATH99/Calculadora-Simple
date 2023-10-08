// Función para borrar el último carácter del campo de entrada
function deleteLastCharacter() {
    var inputField = document.calculator.ans;
    var currentValue = inputField.value;
    if (currentValue.length > 0) {
        inputField.value = currentValue.slice(0, -1);
    }
}