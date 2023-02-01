function activateItem() {
    var items = document.getElementsByClassName("tabItem")
    var path = location.pathname.replace("/", "").replace("cumulonimbus/", "");
    for (var i = 0; i < items.length; ++i) {
        var urlNow = items.item(i).getAttribute("href");
        if (urlNow == path) {
            items.item(i).classList.add("isActive");
            break;
        }
        else if (path == "" && urlNow == "index.html") {
            items.item(i).classList.add("isActive");
            break;
        }
    }
    console.log("activateItem");
}

function applyHorizontalScroll() {
    var speed = 40;
    $('.horizontal-scroll').mousewheel(function (event, mov) {
        var moving = $(this).scrollLeft() - mov * speed;
        $(this).scrollLeft(moving);
        return false;
    });
    console.log("applyHorizontalScroll");
}

function initSearchButton() {
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener('click', function () {
        document.getElementById("searchLabel").classList.toggle("active");
        document.getElementById("globalHeader").classList.toggle("active");
        document.getElementsByClassName("searchHolder")[0].classList.toggle("active");
    });
    console.log("initSearchButton");
}

function pressEnter(keyCode) {
    if (13 === keyCode) {
        alert("検索は未実装\nこのスライドギミックが普通に難しい");
    }
}

function itemHoverEvent() {
    $("[class='tabItem']").hover(
        function () {
            $(this).css("opacity", "1");
        },
        function () {
            $(this).css("opacity", "0.6");
        });
    console.log("itemHoverEvent");
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
            document.getElementById("globalHeader").innerHTML = int.innerHTML;
            //
            var int = restxt.getElementById("searchLabel");
            document.getElementById("searchLabel").innerHTML = int.innerHTML;
            //
            var int = restxt.getElementById("navigationTab");
            document.getElementById("navigationTab").innerHTML = int.innerHTML;
            //
            console.log("loadHeader");


            initSearchButton();
            applyHorizontalScroll();
            activateItem();
            // itemHoverEvent();
            document.getElementsByTagName('body')[0].setAttribute('ontouchstart', '');
        }
    };
    xhr.send();
}

loadHeader();