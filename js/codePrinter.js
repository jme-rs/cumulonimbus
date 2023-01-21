var codeTags = document.getElementsByTagName("code");
// console.log(codeTags.item(0).textContent);
for (var i = 0; i < codeTags.length; ++i) {
    console.log(codeTags[i]);
    fetch(codeTags.item(i).dataset.path)
        .then(res => res.text())
        .then(text => {
            // console.log(text);
            codeTags.item(i).textContent = text;
        });
}