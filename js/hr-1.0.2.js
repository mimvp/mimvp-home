	$(window).scroll(function(){
		var height =  $(window).scrollTop() 	//滚动条距离顶端值

		if(height < 640) {
			$("label[name=hr_job]").css("color", "#3366bb");
			$("#id_hr_system_arch").css("color", "#da4f49");
		} 
		else if (height < 1270) {
			$("label[name=hr_job]").css("color", "#3366bb");
			$("#id_hr_senior_android").css("color", "#da4f49");
		} 
		else if (height < 1890) {
			$("label[name=hr_job]").css("color", "#3366bb");
			$("#id_hr_senior_ios").css("color", "#da4f49");
		} 
		else if (height < 2530) {
			$("label[name=hr_job]").css("color", "#3366bb");
			$("#id_hr_senior_web").css("color", "#da4f49");
		} 
		else if (height >= 2530) {
			$("label[name=hr_job]").css("color", "#3366bb");
			$("#id_hr_system_quanta").css("color", "#da4f49");
		} 
// 		$("#id_hr_system_quanta").text("height: " + height);
	});

	$("label[name=hr_job]").click(function() {
		$("label[name=hr_job]").css("color", "#3366bb");
		$(this).css("color", "#da4f49");
	     var cat_item_id = this.id;
	     var cat_item_id = cat_item_id.replace("id_", "");
	     var cat_item_a_href = "#" + cat_item_id;

	     var height = $(cat_item_a_href).offset().top;
	     $(window).scrollTop(height-130);
	});

    function hidemenu_btn_click(){
        var hidemenu = document.getElementById('hidemenu');
        var hidemenu_display = hidemenu.style.display;
        var mimvp_products = document.getElementById('hr-item');
        if(hidemenu_display == "none"){
        	hidemenu.style.display = "inline";
        	mimvp_products.style.paddingTop = "230px";
        } else {
        	hidemenu.style.display = "none";
        	mimvp_products.style.paddingTop = "0px";
        }
    };