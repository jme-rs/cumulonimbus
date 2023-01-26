let fList = new Map([
    ["π", "Math.PI"],
    ["e", "Math.E"],

    ["sin", "Math.sin("],
    ["cos", "Math.cos("],
    ["tan", "Math.tan("],
    ["logE", "Math.log("],
    ["log10", "Math.log10("],
    ["√", "Math.sqrt("]
]);

var x = 0, y = 0;
document.calculator.variableDisplay.value = "var: x = " + eval("x") + ", y = " + eval("y");

function calc(btn) {
    if (btn.value == "C") {
        document.calculator.display.value = "";
    }
    else if (btn.value == "←") {
        document.calculator.display.value = document.calculator.display.value.slice(0, -1);
    }
    else if (btn.value == "Enter!") {
        document.calculator.display.value = eval(document.calculator.display.value);
    }
    else if (fList.has(btn.value)) {
        document.calculator.display.value += fList.get(btn.value);
    }
    else {
        document.calculator.display.value += btn.value;
    }
    document.calculator.variableDisplay.value = "var: x = " + eval("x") + ", y = " + eval("y");
}