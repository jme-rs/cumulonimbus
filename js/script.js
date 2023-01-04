var cxs = document.querySelectorAll('.common-x-scroll');
cxs = Array.prototype.slice.call(cxs, 0);
cxs.forEach(function (el) {
    el.addEventListener("wheel", function (e) {
        if (e.deltaX === 0) {
            var reg = 1.5;//スクロール量を変更する場合はここを調整

            el.scrollLeft = el.scrollLeft + e.deltaY * reg;

            e.preventDefault();
        }
    });
});

$(function () {
    //--------------------------------------------------------------------------------
    // マウスホイールで横スクロール処理
    //--------------------------------------------------------------------------------
    // スクロール後の位置
    var moving;
    // 1スクロールの移動距離
    var speed = 30;
    $('.horizontal-scroll').mousewheel(function (event, mov) {
        //  スクロール後の位置の算出
        var moving = $(this).scrollLeft() - mov * speed;
        // スクロールする
        $(this).scrollLeft(moving);
        // 縦スクロールさせない
        return false;
    });
});