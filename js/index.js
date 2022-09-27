// 사이즈 980 이상인 경우 모바일 사이드 바 active 제거 함수
function resonsiveWidth() {
    let win_w = $(this).width();
    let timer = null;
    let sec = 10;

    $(window).on('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (win_w > 980) {
                $('#header .gnb_wrap').removeClass('active');
            }
        }, sec);
    });
}

// 모바일 버튼 클릭 시 모바일 사이드 나옴
function ToggleMenu_init() {
    $('#header .toggle').click(function () {
        let menuSlideBar = $('#header .gnb_wrap');

        if (menuSlideBar.hasClass('active')) {
            menuSlideBar.removeClass('active');
        }
        else {
            menuSlideBar.addClass('active');
        }
    });
};

// 스와이퍼 적용
$(function () {
    var swiper_1 = new Swiper('#visual .swiper', {
        loop: true,
        pagination: {
            el: '#visual .swiper-pagination',
        },
        navigation: {
            nextEl: '#visual .swiper-button-next',
            prevEl: '#visual .swiper-button-prev',
        },
    });

});


resonsiveWidth();
ToggleMenu_init()