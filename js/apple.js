$(function(){
//�����仯
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


//����
    $(".xia").click(function(){
        $(".header3").finish().slideToggle();
    });
    $(".xia1").click(function(){
        $(".header4").finish().slideToggle();
    });

    $(".title").click(function(){
        $(".listview-list").slideToggle();
    });


//�ֲ�
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



//����
//$(".banner")[0].addEventListener("touchmove",function(e){
//  var obj= e.touches[0];
//    console.log(obj.pageX)
//},false)
//    touch.on(document,"tap",function(){
//        alert(1);
//    })

//=================================================================
//    //touch�¼�
//
// ��ק-----�ƶ�bannerͼ
    var margin;
    touch.on(".box","dragstart",function(){
        margin=$(".box")[0].offsetLeft;    //������Զ�λ��box���븸Ԫ�صľ���

    })

    touch.on(".box","drag",function(e){
        //e.x��ק����(left:-)
        //console.log(e.x+"--"+ e.direction);
        $(".box").css("margin-left",margin+e.x);  //��һ�κ͵ڶ��εľ��룬�ڶ�����קʱ�ڻ�ȡ
       //����margin�տ�ʼ��ק������ק�ͻ�ص�ԭ�㣬
       // console.log("drag...");
    });

    //��ק
    touch.on(".box","dragend",function(e){
        //console.log(e.factor);
        //alert(1)
  //�ж��Ƿ������һ�ţ�����������һ��ִ��else�ص�ԭ��
        if(Math.abs(e.x)>300 || e.factor<5){
            //�����ƶ�
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
                //�����ƶ�
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
            $(".box").finish().animate({marginLeft:-num*100+"%"});   //�ﲻ����һ�ţ��ͻص�ԭ��
        }
    });

//��ֹĬ����Ϊ
  $(".box").mousedown(function(e){
      e.preventDefault()
  });

    //ȥ��a���ӵ���ת
  $("a").click(function () {
        return false;
  })















});