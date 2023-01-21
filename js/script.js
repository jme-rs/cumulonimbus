function setCodeFromPath() {

    var codeTags = document.getElementsByTagName("code");
    for (var i = 0; i < codeTags.length; ++i) {
        console.log(codeTags.item(i));
        fetch(codeTags.item(i).dataset.path)
            .then(res => res.text())
            .then(text => {
                // console.log(text);
                codeTags.item(i).textContent = text;
            });
    }

    // var codeTag = document.getElementById("codeId");
    // console.log(codeTag);
    // fetch(codeTag.dataset.path)
    //     .then(res => res.text())
    //     .then(text => {
    //         codeTag.textContent = text;
    //     });
}

function setSearchButton() {
    document.getElementById("searchButton").addEventListener('click', function () {
        alert("検索はいつか実装する");
    });
    console.log(document.getElementById("searchButton"));
}

function 

// functions
// setCodeFromPath();
setSearchButton();
