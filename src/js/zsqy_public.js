// 返回顶部
    $(function(){ 
        $('.return_top').hide();  //隐藏go to top按钮 
        $(window).scroll(function(){
             // console.log($(this).scrollTop());
             //当window的scrolltop距离大于1时，go to 
             if($(this).scrollTop() > 100){
                 $('.return_top').fadeIn();
             }else{
                 $('.return_top').fadeOut();
             }
         });
        $('.return_top').click(function(){
            $('html ,body').animate({scrollTop: 0}, 300);
            return false;
        }); 
    });