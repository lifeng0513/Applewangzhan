$(function(){
//导航变化
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<=730){
            $(".header1").css("display","none");
            $(".header2").css("display","block");
            $(".listview-list").css("display","none");
        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".listview-list").css("display","block");

        }
    });
    $(window).resize();


//下拉
    $(".xia").click(function(){
        $(".header3").finish().slideToggle();
    });
    $(".xia1").click(function(){
        $(".header4").finish().slideToggle();
    });

    $(".title").click(function(){
        $(".listview-list").slideToggle();
    });


//轮播
    var num=0;
    var t=setInterval(move,4000);
    function move(){
        num++;
        if(num==$(".box .list").length-1){
            $(".box").animate({marginLeft:-num*100+"%"},function(){
                $(".box").css({marginLeft:0});
            })
            num=0;
        }else{
            $(".box").animate({marginLeft:-num*100+"%"})
        }

        $('.btn li').css({background:"#888",border:"none"});
        $('.btn li').eq(num).css({background:"#fff",border:"1px solid #08c",width:"13px" ,height:"13px"});

    }


    //$(".btn li").click(function(){
    //
    //    var index=$(this).index(".btn li");
    //    num=index;
    //    console.log(index)
    //    $('.btn li').css({background:"#888",border:"none"});
    //    $(this).css({background:"#fff",border:"1px solid #08c",width:"13px" ,height:"13px"});
    //    $(".box").animate({marginLeft:-num*100+"%"})
    //});
    //
    //
    //$(".banner").hover(function(){
    //    clearInterval(t);
    //},function(){
    //   t=setInterval(move,4000);
    //});



//触摸
//$(".banner")[0].addEventListener("touchmove",function(e){
//  var obj= e.touches[0];
//    console.log(obj.pageX)
//},false)
//    touch.on(document,"tap",function(){
//        alert(1);
//    })

//=================================================================
//    //touch事件
//
// 拖拽-----移动banner图
    var margin;
    touch.on(".box","dragstart",function(){
        margin=$(".box")[0].offsetLeft;    //定义相对定位（box）与父元素的距离

    })

    touch.on(".box","drag",function(e){
        //e.x拖拽距离(left:-)
        //console.log(e.x+"--"+ e.direction);
        $(".box").css("margin-left",margin+e.x);  //第一次和第二次的距离，第二次拖拽时在获取
       //不加margin刚开始拖拽，在拖拽就会回到原点，
       // console.log("drag...");
    });

    //拖拽
    touch.on(".box","dragend",function(e){
        //console.log(e.factor);
        //alert(1)
  //判断是否进入下一张，不够进入下一张执行else回到原来
        if(Math.abs(e.x)>300 || e.factor<5){
            //向左移动
            //console.log(1)
            if(e.direction=="left"){
              //alert(1)
                num++;
                //console.log(num)
                if(num==$(".box .list").length-1){
                    $(".box").finish().animate({marginLeft:-num*100+"%"},function(){
                        $(".box").css({marginLeft:0});
                    });
                    num=0;
                }else{
                    $(".box").finish().animate({marginLeft:-num*100+"%"})
                }
                //向右移动
            }else if(e.direction=="right"){
                num--;
                if(num==-1){
                    num=0;
                    //$(".box").finish().animate({marginLeft:-num*100+"%"})
                    return;
                }else{
                    $(".box").finish().animate({marginLeft:-num*100+"%"})
                }

            }

        }else{
            $(".box").finish().animate({marginLeft:-num*100+"%"});   //达不到下一张，就回到原来
        }
    });

//阻止默认行为
  $(".box").mousedown(function(e){
      e.preventDefault()
  });

    //去除a连接的跳转
  $("a").click(function () {
        return false;
  })















});