$(function () {
    $('.btn_msg').click(function () {
        $(".msg").fadeOut('fast');
        $('.login').fadeIn('fast');
        $('.main').fadeOut('fast');
    });

    $(".btn_return_fast").click(function(){
        $(".login").fadeOut('fast');
        $(".msg").fadeIn('fast');
    });

    $('.main_content_left ul li').click(function (e) {
        $('.main_content_right').children().eq($(e.target).index()).fadeIn('fast').siblings().fadeOut('fast');
    });

    $('button.btn_info').click(function (e) {
        $('.result').fadeOut('fast');
        $('.info').fadeOut('fast');
        $('.result_info').fadeIn('fast');

        let index = $(e.target).parent().eq(0).parent().eq(0).index();
        $(".info_name").text(studyData[index].name);
        $('.info_result').text(studyData[index].result);
    });

    $('.btn_info_return').click(function () {
        $('.result').fadeIn('fast');
        $('.result_info').fadeOut('fast');
    });

    $('.btn_login').click(function () {
        $('.login').fadeOut('fast');
        $('.main').fadeIn('fast');

        $('.result').fadeIn('fast');
    });

    $('.btn_logout').click(function () {
        $('.login').fadeIn('fast');
        $('.main').fadeOut('fast');

        $('.result_info').fadeOut('fast');
        $('.result').fadeOut('fast');
        $('.info').fadeOut('fast');
    });
})