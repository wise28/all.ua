//define the left-menu height
let headerHeight = $('.header__bg').outerHeight();
let headerHeightMobile = $('.header__bg-mobile').outerHeight();
// let bodyHeight = $('body').outerHeight();
let leftMenuHeight = $('.left-menu').outerHeight();
let rightBlock = $('.right-block').outerHeight();
let userMenuMobile = $('.left-menu-mobile').outerHeight();
let newsBlock = $('.news').outerHeight();
let contentHeight =  $('.content').outerHeight();


$('.left-menu').height(leftMenuHeight - headerHeight);
$('.left-menu').offset({top:headerHeight, left:0});

$('.right-block').height(rightBlock - headerHeight);
$('.right-block').offset({top:headerHeight});

if($(window).width() <= '992') {
    $('.right-block-mobile').height('auto');
    $('.right-block-mobile').offset({top:headerHeightMobile});
}
// $('.left-menu-mobile').offset({bottom:0, left:0, right:0});
$('.btn-show-wrap').click(function () {
    $('.right-block__list').toggle();
});

function getNewsHeight() {
    let leftMenuWidth = $('.left-menu').outerWidth();
    $('.news').height($('.news').height() - headerHeight);
    $('.news').offset({top:headerHeight, left:leftMenuWidth});
    if($(window).width() <= '992') {
        $('.news-mobile').height(newsBlock - (headerHeightMobile + userMenuMobile));
        $('.news-mobile').offset({top:headerHeightMobile});
    }
}
function getContentHeight() {
    let leftContent = $('.left-menu').outerWidth() + $('.news').outerWidth();
    let rightBlockWidth = $('.right-block').outerWidth();
    $('.content').height($('.content').height() - headerHeight);
    // $('.content').offset({top:headerHeight, left:leftContent - rightBlockWidth});
    $('.content').offset({top:headerHeight, left:leftContent});
    if($(window).width() <= '992') {
        $('.content').height(contentHeight  - (headerHeightMobile + userMenuMobile));
        $('.content').offset({top:headerHeightMobile});
    }

}
$(document).ready(function() {
    getNewsHeight();
    getContentHeight();
});


$(window).resize(function() {
    getNewsHeight();
    getContentHeight();
});
