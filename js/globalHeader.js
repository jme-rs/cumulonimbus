function activateItem(element) {
    var items = element.getElementsByClassName("tabItem")
    var path = location.pathname;
    for (var i = 0; i < items.length; ++i) {
        if (items.item(i).getAttribute("href") == path) {
            items.item(i).classList.add("isActive"); 
            break;
        }
    }
}

function loadHeader() {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "/html/globalHeader.html";

    xhr.responseType = "document";
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var restxt = xhr.responseXML;
            //
            var int = restxt.getElementById("globalHeader");
            document.getElementById("globalHeader").innerHTML = int.outerHTML;

            //
            var int = restxt.getElementById("navigationTab");
            activateItem(int);
            document.getElementById("navigationTab").innerHTML = int.outerHTML;
        }
    };
    xhr.send();
}