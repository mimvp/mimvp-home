	window.onload = function(){
	    var obj = document.getElementById('product-proxy');
	    obj.onclick=function(){  
	    	window.open("//proxy.mimvp.com");            
	     }

	    var obj = document.getElementById('product-domain');
	    obj.onclick=function(){  
	    	window.open("//domain.mimvp.com");            
	     }

	    var obj = document.getElementById('product-money');
	    obj.onclick=function(){  
	    	window.open("//money.mimvp.com");            
	     }

	    var obj = document.getElementById('product-pay');
	    obj.onclick=function(){  
	    	window.open("//pay.mimvp.com");            
	     }

	    var obj = document.getElementById('product-action');
	    obj.onclick=function(){  
	    	window.open("//action.mimvp.com");            
	     }

	    var obj = document.getElementById('product-learn');
	    obj.onclick=function(){  
	    	window.open("//learn.mimvp.com");            
	     }
	     
	    var obj = document.getElementById('product-blog');
	    obj.onclick=function(){  
	    	window.open("//blog.mimvp.com");            
	     }

	    var obj = document.getElementById('product-forum');
	    obj.onclick=function(){  
	    	window.open("//forum.mimvp.com");            
	     }

	    var obj = document.getElementById('product-csdn');
	    obj.onclick=function(){  
	    	window.open("http://blog.csdn.net/ithomer");            
	     }
	 };
	
    function hidemenu_btn_click(){
        var hidemenu = document.getElementById('hidemenu');
        var hidemenu_display = hidemenu.style.display;
        var mimvp_products = document.getElementById('mimvp-body');
        if(hidemenu_display == "none"){
        	hidemenu.style.display = "inline";
        	mimvp_products.style.paddingTop = "300px";
        } else {
        	hidemenu.style.display = "none";
        	mimvp_products.style.paddingTop = "50px";
        }
    };
    
    function wechat_mimvp_method() {
		var wechat_mimvp = document.getElementById('wechat_mimvp');
		var wechat_mimvp_display = wechat_mimvp.style.display;
	    if(wechat_mimvp_display == "none"){
	    	wechat_mimvp.style.display = "block";
	    } else {
	    	wechat_mimvp.style.display = "none";
	    }
	};
    
    
    // 轮动图片
    var index = 0;
    var slide_tab_array = document.getElementsByName("slide_tab");
    var slide_img_array = document.getElementsByName("slide_img");
    function showCurrentSlide() {
    	for(var i=0; i<slide_tab_array.length; i++) {
    		slide_tab_array[i].className = "slide_tab";
    		slide_img_array[i].style.position = "absolute";
    		slide_img_array[i].style.opacity = 0;
    	}
    	slide_tab_array[index].className = "slide_tab slide_current";
    	slide_img_array[index].style.position = "relative";
    	slide_img_array[index].style.opacity = 1;
    }

    // 点击事件
    for (var i = 0, len = slide_tab_array.length; i < len; i++){
        (function(i){
        	slide_tab_array[i].onclick = function () {
            var dis = index - i;
            if(index == 2){
              dis = dis - 5;   
            }
            if(index == 0){
              dis = 5 + dis;
            }
            index = i;
            showCurrentSlide();
          }
        })(i);      
      }

    // 向后轮播
    function next_pic () {
        index++;
        if(index > 2){
          index = 0;
        }
        showCurrentSlide();
      }

    // 自动轮播
    var timer = null;
    function autoSlide() {
    	timer = setInterval(function() {
    		next_pic();
    	}, 5000);
    }
    autoSlide();
    	
    var mimvp_banner_slide = document.querySelector(".mimvp-banner-slide");
    mimvp_banner_slide.onmouseenter = function () {
      clearInterval(timer);
    }
    mimvp_banner_slide.onmouseleave = function () {
    	autoSlide();  
    }
