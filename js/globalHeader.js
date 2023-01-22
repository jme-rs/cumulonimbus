function activateItem(element) {
    var items = element.getElementsByClassName("tabItem")
    var path = location.pathname.replace("/", "").replace("homepage_1.0/", "");
    for (var i = 0; i < items.length; ++i) {
        if (items.item(i).getAttribute("href") == path) {
            items.item(i).classList.add("isActive");
            break;
        }
    }
}

function applyHorizontalScroll() {
    var moving;
    var speed = 40;
    $('.horizontal-scroll').mousewheel(function (event, mov) {
        //  スクロール後の位置の算出
        var moving = $(this).scrollLeft() - mov * speed;
        // スクロールする
        $(this).scrollLeft(moving);
        // 縦スクロールさせない
        return false;
    });
    console.log("applyHorizontalScroll");
}

function setSearchButton() {
    document.getElementById("searchButton").addEventListener('click', function () {
        alert("検索はいつか実装する");
    });
    console.log(document.getElementById("setSearchButton"));
}


function loadHeader() {
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "html/globalHeader.html";

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
            //
            console.log("loadHeader");

            
            setSearchButton();
            applyHorizontalScroll();
        }
    };
    xhr.send();
}
