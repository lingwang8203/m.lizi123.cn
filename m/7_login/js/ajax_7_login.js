
$(document).ready(function() {


//登录验证
$("#login").click(function(){
	var user_name=$("#account").val();
	var user_password=$("#password").val();
	
	var phone=/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var phone=/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if(user_name==''||user_password==''){
		alert("账号、密码不能为空");
		return;
	}else if(!phone.test(user_name)||user_password.length<6||user_password.length>16){
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

		xhrFields:{
			withCredentials:true
		},
		crossDomain:true,
		success:function (data) {
			var obj=eval(data);
			if(obj.status==200){
					//接口访问成功
					console.dir(obj);
					window.location.href="http://m.lizi123.cn/footer.html?user_id="+obj.user_id;
				}else if(obj.status==199){
					//用户未登录
					alert('用户未登录');
				}else{
					alert('非法请求参数');
				}
			},
			error:function (data) {
				alert('error');
			},
		});
});


//应该是游客访问
$("#seenow").click(function () {
	// window.location.href="http://m.lizi123.cn/footer/footer.html?plg_nld=1&plg_uin=1&plg_auth=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1&from=singlemessage&isappinstalled=1";
	window.location.href="http://m.lizi123.cn/1_home/1_home.html";
});

//找回密码
$(".rst").click(function () {
	window.location.href="http://m.lizi123.cn/7_login/72_login_forgetPassword/72_login_forgetPassword.html";
})

//用户注册
$(".crt").click(function () {
	window.location.href="http://m.lizi123.cn/7_login/71_login_signIn/71_login_signIn.html";
});

});


