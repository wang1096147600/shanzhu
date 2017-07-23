/**
 * Created by Administrator on 2017/7/22.
 */
$(function () {
    // function show() {
    //    $('#inp').attr('type','text')
    // }
    // function hiddn() {
    //    $('#inp').attr('type','password')
    // }
    // $('#pass').on('click',function () {
    //     show()
    // })
    // $('#pass').on('click',function () {
    //     hiddn()
    // })
    $('#pass').click(function () {
       if($('#inp').attr('type') == "password"){
          $('#inp').attr('type','text')
       }else  if($('#inp').attr('type')=='text'){
           $('#inp').attr('type','password')
       }
    })
    $('#sure').click(function () {
      $('.sure_div').show()
    })

    function clickButton(obj){

        var obj = $(obj);
        obj.attr("disabled","disabled");
        var time = 60;
        var set=setInterval(function(){
            obj.val(--time+"(s)");
        }, 1000);

        setTimeout(function(){
            obj.attr("disabled",false).val("重新获取");
            clearInterval(set);
        }, 60000);
    }
    $('.sp').click(function () {
        clickButton(".sp")
    })

    // $('.sp').click(function () {
    //     // alert($(this).val())
    //     var time=60;
    //     // alert($(this).val())
    //     var set=setInterval(function () {
    //        $(this).val(--time)
    //         // alert($(this).val())
    //    },1000)
    // })
})