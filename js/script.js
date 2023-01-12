function butotnClick() {
    alert('検索は未実装\njavascript test');
}

document.getElementById('mybtn').addEventListener('click', butotnClick);

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

function calc(btn) {
    if (btn.value == "C") {
        document.calculator.display.value = "";
    }
    else if (btn.value == "←") {
        document.calculator.display.value = document.calculator.display.value.slice(0, -1);
    }
    else if (btn.value == "=") {
        document.calculator.display.value = eval(document.calculator.display.value);
    }
    else if (fList.has(btn.value)) {
        document.calculator.display.value += fList.get(btn.value);
    }
    else {
        document.calculator.display.value += btn.value;
    }
}

// fetch("text/SPutil.h").then(res => res.text()).then(text => {
//     document.getElementById("SPutil.h").textContent = text;
// });

// fetch("text/SPutil.c").then(res => res.text()).then(text => {
//     document.getElementById("SPutil.c").textContent = text;
// });

// fetch("text/FFT.h").then(res => res.text()).then(text => {
//     document.getElementById("FFT.h").textContent = text;
// });

var codeTags = document.getElementsByTagName("code");
console.log(codeTags);

// for (var codeTag in codeTags) {
//     fetch(codeTag.dataset.path)
//     .then(res => res.text())
//     .then(text => {
//         codeTag.textContent = text;
//     });
// }

var codeTag = document.getElementById("codeId");
fetch(codeTag.dataset.path)
    .then(res => res.text())
    .then(text => {
        codeTag.textContent = text;
    });
