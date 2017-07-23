/**
 * Created by Administrator on 2017/7/23.
 */
// 谷歌版本兼容问题、
 document.addEventListener("touchmove",function (event) {
     event.preventDefault();
 },{passive:false});
 //点击事件
//=============循环点击不行
$(".info:eq(0)").singleTap(function () {
    $(".pic").toggle().stop();
});
$(".info:eq(1)").singleTap(function () {
    $(".pic").toggle().stop();
});
$(".pic").singleTap(function () {
    $(this).hide();
});
// 定时
var num = 5;
var time;
// $(this).val("提交中..."); $(this).val("正在审核");
$(".btn").singleTap(function () {
        $(this).val("正在审核");
        $(".ren").html("正在认证");
});