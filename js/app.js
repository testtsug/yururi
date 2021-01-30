$(function () {
    //    スライドショー
    $('.slideshow').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false
    });

    //    フェードイン
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200) {
                $(this).addClass('scrollin');
            }
        });
    });



    // 上に戻るボタンの初期化
    let topBtn = $('#scrollTop');
    topBtn.hide();

    // ある程度スクロールされたら、上に戻るボタンを表示する
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn(); // フェードインで表示
        } else {
            topBtn.fadeOut(); // フェードアウトで非表示
        }
    });

    // クリックで上に戻るボタン
    topBtn.click(function (event) {
        event.preventDefault(); // ページ内リンクの挙動をキャンセル
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });




});
