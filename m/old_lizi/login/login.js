$(document).ready(function(){
    //ç™»é™†
    $("#login").click(function(){
    	var user_name = document.getElementById("account").value;
    	var user_password = document.getElementById("password").value;
    	//éªŒè¯130-139,150-159,180-189å·ç æ®µçš„æ‰‹æœºå·ç 
    	var phone = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

        if(user_name==''||user_password==''){
        	alert("账号、密码不能为空！");
        	return;
        }else if (!phone.test(user_name)||user_password.length<6||user_password.length>16) {
        	alert("输入格式错误！");
        	return;
        };

        $.ajax({
        	type:"post",
            url:"http://api.lizi123.cn/index.php/home/user/userLogin",
            data:{
            	"user_name":user_name,
            	"user_password":user_password,
      		},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function(data){
                var obj = eval(data);
                if(obj.status==200){
                    console.dir(obj);
                	window.location.href="http://m.lizi123.cn/footer/footer.html?user_id="+obj.user_id;
                }else if (obj.status==199) {
                	alert("è´¦å·æœªæ³¨å†?");
                }else{
                	alert("ç™»å½•å¤±è´¥,ç”¨æˆ·åæˆ–å¯†ç ä¸æ­£ç¡?");
                }
            },
            error:function(data){
                alert("error!");
            },
            
        });
        
	});
	//å†çœ‹çœ?
	$("#seenow").click(function(){
		//window.location.href="http://m.lizi123.cn/footer/footer.html?plg_nld=1&plg_uin=1&plg_auth=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1&from=singlemessage&isappinstalled=1";
    });
    /*
	//å¿˜è®°å¯†ç 
	$(".rst").click(function(){
		window.location.href="http://m.lizi123.cn/findback/index.html";
	});

	//åˆ›å»ºè´¦å·
	$(".crt").click(function(){
		window.location.href="http://m.lizi123.cn/register/index.html";
	});*/
    
});