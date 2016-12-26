;(function($){
    var myscroll=new IScroll(".section");
    var myscrolls=new IScroll(".img_scroll");
    function init(){
        slidup();
        tiggle();
        show();
    }
    function slidup(){
        $("#icon").on("tap","i",function(){
            if($(this).attr("class")=="fa fa-angle-down"){
                $(this).attr("class","fa fa-angle-up")
                var h=$(".people_mes>p").outerHeight();
                var ovflow_h=h-44;
                var warpper_h=$(".jieshao").outerHeight();
                var warpper_x=h+20;
                var people_mes_x=h-44;
                $(".people_mes").css({
                    "height":people_mes_x
                });
                $(".jieshao").css({
                    "height":warpper_x
                });
            }else{
                $(this).attr("class","fa fa-angle-down")
                $(".people_mes").height("44px");
                $(".jieshao").height("110px");
            }

        })
    }
    function tiggle(){
        $("#tiggle").on("tap",function(){
            if(!$(this).hasClass("active")){
                $(this).addClass("active");
                var text=Number($(this).siblings().html())+1;
                $(this).siblings().html(text)

            }else{
                $(this).removeClass("active");
                var text=Number($(this).siblings().html())-1;
                $(this).siblings().html(text)

            }
        })
    }

    function show(){
        $("#shoes").on("tap",function(){
            if($(this).hasClass("fa")){
                $(this).html("×");
                $(this).siblings().css({
                    "width": "200px"
                });
                $(this).attr("class","");
            }else{
                $(this).html("");
                $(this).attr("class","fa fa-home")
                $(this).siblings().css({
                    "width": "0px"
                });
            }

        })
    }























    init()
})(jQuery)






























/**
 * Created by samsung on 2016/12/22.
 */
