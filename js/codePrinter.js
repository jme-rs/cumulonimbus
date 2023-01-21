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
            console.log(xhr);
            var restxt = xhr.responseText;
            element.innerHTML = restxt;
            // element.innerHTML = "\"" + restxt + "\"";
        }
    };
}

var codeTags = document.getElementsByTagName("code");
console.log(codeTags);
for (var i = 0; i < codeTags.length; ++i) {
    loadSource(codeTags.item(i))
}