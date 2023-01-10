function butotnClick() {
    alert('検索は未実装\njavascript test');
}

document.getElementById('mybtn').addEventListener('click', butotnClick);

function calc(btn) {
    if (btn.value == "C") {
        document.calculator.display.value = "0";
    } else if (document.calculator.display.value == "0") {
        document.calculator.display.value = btn.value;
    }
    else if (btn.value == "=") {
        document.calculator.display.value = eval(document.calculator.display.value);
    } else {
        document.calculator.display.value += btn.value;
    }
}
