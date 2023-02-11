
function headLoader() {
    var head = document.head;
    head.insertAdjacentHTML('beforeEnd', '<meta charset="utf-8">');
    head.insertAdjacentHTML('beforeEnd', '<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover">');
    head.insertAdjacentHTML('beforeEnd', '<meta name="theme-color" content="#00B2C6">');
    head.insertAdjacentHTML('beforeEnd', '<link rel="icon" href="picture/ei-cloud.png">');

    head.insertAdjacentHTML('beforeEnd', '<link rel="preconnect" href="https://fonts.googleapis.com">');
    head.insertAdjacentHTML('beforeEnd', '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
    head.insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fondamento&display=swap">');
    head.insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.2.0/dist/css/yakuhanjp.min.css">');

    head.insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" href="css/main.css">');
    head.insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" href="css/globalHeader.css">');
    head.insertAdjacentHTML('beforeEnd', '<link rel="stylesheet" href="css/content.css">');
}

headLoader();