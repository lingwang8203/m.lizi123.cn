$(document).ready(function(){
//	$(".aui-tab-item").click(function(){
//		this.addClass("aui-active").sibli
//	)
    var current_url=location.href;
	if(current_url=="http://m.lizi123.cn/2_function/22_function_club/221_function_club_push.php"){
		$("#club").addClass("aui-active");
	}else if(current_url=="http://m.lizi123.cn/2_function/2_function.php"){
		$("#sports").addClass("aui-active");
	}else if(current_url=="http://m.lizi123.cn/2_function/21_function_class/211_function_class_push.php"){
		$("#subject").addClass("aui-active");
	}
    
    
    document.getElementById("sports").addEventListener("touchstart",function(e){
    	e.preventDefault();
    	$("#sports").addClass("aui-active");
    	$("#club").removeClass("aui-active");
    	$("#active").removeClass("aui-active");
    	location.href="http://m.lizi123.cn/2_function/2_function.php";
    },false);
    document.getElementById("club").addEventListener("touchstart",function(e){
    	e.preventDefault();
    	$("#club").addClass("aui-active");
    	$("#sports").removeClass("aui-active");
    	$("#subject").removeClass("aui-active");
    	location.href="http://m.lizi123.cn/2_function/22_function_club/221_function_club_push.php";
    },false);
    document.getElementById("subject").addEventListener("touchstart",function(e){
    	e.preventDefault();
    	$("#subject").addClass("aui-active");
    	$("#club").removeClass("aui-active");
    	$("#sports").removeClass("aui-active");
    	location.href="http://m.lizi123.cn/2_function/21_function_class/211_function_class_push.php";
    },false);
//  $(".aui-tab-item").each(function(){
//  	$(this).click(function(){
//  		$(".aui-tab-item,.aui-active").removeClass("aui-active");
//  	    $(this).addClass("aui-active");
//  	});    	
//  });
});
