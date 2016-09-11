/**
 * Created by Administrator on 2016/9/6/006.
 */
$(function () {

    $("#myCarousel").carousel({
        //设置自动播放
        interval : 4000,
    });


    //有更好的办法，直接应用Bootstrap框架
    /*
    //设置图片上左右箭头的行高，使其在图片的中间，动态
    $(".carousel-control").css("line-height", $(".carousel-inner img").height() + "px");

    //当浏览器窗口大小改变时，箭头的位置随之改变，始终使其在图片的中间，动态
    $(window).resize(function () {

        //三张图片中，当一张处于激活的时候，另外两张的高度就会处于0，因此需要使用判断语句
        var $height = $(".carousel-inner img").eq(0).height() ||
                      $(".carousel-inner img").eq(1).height() ||
                      $(".carousel-inner img").eq(2).height();
        $(".carousel-control").css("line-height", $height + "px");
    });
    */

    // 设置tab2 和 tab3的文字垂直居中

    //谷歌浏览器加载图片的问题，导致居中出现问题，因此非动态的要使用$(window).load(function () {})

    //  tab2图片的高度 $(".auto").eq(0).height()
    //  tab2文字的高度 $(".text").eq(0).height()
    //  居中的高度    ($(".auto").eq(0).height() - $(".text").eq(0).height()) / 2 + "px"
    $(".text").eq(0).css("margin-top", ($(".auto").eq(0).height() - $(".text").eq(0).height()) / 2 + "px");



    // 动态改变
    $(window).resize(function () {
        $(".text").eq(0).css("margin-top", ($(".auto").eq(0).height() - $(".text").eq(0).height()) / 2 + "px");
    });

    //tab3的文字垂直居中
        $(".text").eq(1).css("margin-top", ($(".auto").eq(1).height() - $(".text").eq(1).height()) / 2 + "px");

    // 动态改变
    $(window).resize(function () {
        $(".text").eq(1).css("margin-top", ($(".auto").eq(1).height() - $(".text").eq(1).height()) / 2 + "px");
    });
});