function loadSource(element) {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = element.getAttribute("data-path");

    xhr.responseType = "document";
    xhr.open(method, url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr);
            var restxt = xhr.responseText;
            element.innerHTML = restxt;
        }
    };
}

var codeTags = document.getElementsByTagName("code");
console.log(codeTags);
for (var i = 0; i < codeTags.length; ++i) {
    loadSource(codeTags.item(i))
}