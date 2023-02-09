var counter = 0;
var maxCount;

function htmlspecialchars(unsafeText) {
    return unsafeText.replace(
        /[&'`"<>]/g,
        function (match) {
            return {
                '&': '&amp;',
                "'": '&#x27;',
                '`': '&#x60;',
                '"': '&quot;',
                '<': '&lt;',
                '>': '&gt;',
                '\n': '<br>'
            }[match]
        }
    );
}

function loadSource(element) {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = element.getAttribute("data-path");

    xhr.responseType = "text";
    xhr.open(method, url, true);
    xhr.send();
    console.log(url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var restxt = xhr.responseText;
            element.innerHTML = restxt;
            // element.innerHTML = htmlspecialchars(restxt);

            ++counter;
            if (counter === maxCount) {
                PR.prettyPrint();
                prism();
                console.log("loadSource");
            }
        }
    };
}

function syntaxHighlight() {
    var codeTags = document.querySelectorAll("[data-path]");
    maxCount = codeTags.length;
    console.log(codeTags);
    for (var i = 0; i < maxCount; ++i) {
        loadSource(codeTags.item(i));
    }
}

// function prismLoad() {
//     // var codeTags = document.getElementsByClassName("prettyprint");
//     var codeTags = document.querySelectorAll("[data-path]");
//     console.log(codeTags);
//     for (var i = 0; i < codeTags.length; ++i) {
//         loadSource(codeTags.item(i))
//     }
// }
