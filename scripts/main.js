$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });

    $(function(){

         $('.up').click(function () {
    	 $('body,html').animate({
            scrollTop: 0
        }, 1000);
        });

    /*------------BUTTON------------*/
        $(document).ready(function(){
        
        $('.myBtn1').data('counter', 0).click(function(){
        $(".more1").toggle(); 
        var counter = $(this).data('counter');
        $(this).data('counter', counter + 1);
        if (counter % 2 == 0){
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }       
            });
        
        $('.myBtn2').data('counter', 0).click(function(){
        $(".more2").toggle(); 
        var counter = $(this).data('counter');
        $(this).data('counter', counter + 1);
        if (counter % 2 == 0){
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }       
            });
        
        $('.myBtn3').data('counter', 0).click(function(){
        $(".more3").toggle(); 
        var counter = $(this).data('counter');
        $(this).data('counter', counter + 1);
        if (counter % 2 == 0){
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }       
            });
        
        $('.myBtn4').data('counter', 0).click(function(){
        $(".more4").toggle(); 
        var counter = $(this).data('counter');
        $(this).data('counter', counter + 1);
        if (counter % 2 == 0){
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }       
            });
        
        $('.myBtn5').data('counter', 0).click(function(){
        $(".more5").toggle(); 
        var counter = $(this).data('counter');
        $(this).data('counter', counter + 1);
        if (counter % 2 == 0){
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }       
            });
        });

        /*------------SALE------------*/

        let data = new Date();
        let day = data.getDay();
        // var newElems = $("<div class='d2'></div>");
        
        if (day == 1) {
            $(".sale").prependTo(".d1");
            let span1 = $(".p1 span.price");
            span1.replaceWith("<span class='price'>₴10</span>");
        }
        if (day == 2) {
            $(".sale").prependTo(".d2");
            let span2 = $(".p2 span.price");
            span2.replaceWith("<span class='price'>₴13</span>");
        }
        if (day == 3) {
            $(".sale").prependTo(".d3");
            let span3 = $(".p3 span.price");
            span3.replaceWith("<span class='price'>₴8</span>");
        }
        if (day == 4) {
            $(".sale").prependTo(".d4");
            let span4 = $(".p4 span.price");
            span4.replaceWith("<span class='price'>₴9</span>");
        }
        if (day == 5) {
            $(".sale").prependTo(".d5");
            let span5 = $(".p5 span.price");
            span5.replaceWith("<span class='price'>₴13</span>");
        }
        if (day == 6) {
            $(".sale").prependTo(".d6");
            let span6 = $(".p6 span.price");
            span6.replaceWith("<span class='price'>₴14</span>");
        }


        document.getElementById("trigger").onclick = function() {
            open()
        };

        function open() {
        document.getElementById("menu").classList.toggle("show");
        }
       

        });

