let currentExpression = '';

function appendNumber(num) {
    currentExpression += num;
    document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += operator;
    document.getElementById('result').value = currentExpression;
}

function calculate() {
    try {
        currentExpression = eval(currentExpression);
        document.getElementById('result').value = currentExpression;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    document.getElementById('result').value = currentExpression;
}