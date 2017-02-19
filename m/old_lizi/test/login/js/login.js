$(document).ready(function(){
    //登陆
    $("#login").click(function(){
    	var user_name = document.getElementById("account").value;
    	var user_password = document.getElementById("password").value;
    	//验证130-139,150-159,180-189号码段的手机号码
    	var phone = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

        if(user_name==''||user_password==''){
        	alert("账号或密码不能为�?");
        	return;
        }else if (!phone.test(user_name)||user_password.length<6||user_password.length>16) {
        	alert("账号或密码格式不正确�?");
        	return;
        };

        $.ajax({
        	type:"post",
            url:"http://api.lizi123.cn/index.php/home/user/userLogin",
            data:{
            	"user_name":user_name,
            	"user_password":user_password,
      		},
            success:function(data){
                var obj = eval(data);
                if(obj.status==200){
                    console.dir(obj);
                	window.location.href="http://m.lizi123.cn/LiZi/footer/footer.html?user_id="+obj.user_id;
                }else if (obj.status==199) {
                	alert("账号未注�?");
                }else{
                	alert("登录失败,用户名或密码不正�?");
                }
            },
            error:function(data){
                alert("error!");
            },
            
        });
        
	});
	//再看�?
	$("#seenow").click(function(){
		window.location.href="http://m.lizi123.cn/LiZi/footer/footer.html?plg_nld=1&plg_uin=1&plg_auth=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1&from=singlemessage&isappinstalled=1";
	});
    /*
	//忘记密码
	$(".rst").click(function(){
		window.location.href="http://m.lizi123.cn/findback/index.html";
	});

	//创建账号
	$(".crt").click(function(){
		window.location.href="http://m.lizi123.cn/register/index.html";
	});*/
    
});