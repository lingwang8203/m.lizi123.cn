var code;//验证码
function load(){
	document.body.style.height=window.screen.height;
}

function hideTip1(){
	var x=document.getElementById('tel');
	var y=document.getElementById('typeTip1');
	//验证130-139,150-159,170-179，180-189号码段的手机号码
    var phone = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    //var phone = ^1[3|4|5|7|8]\d{9}$; 
	if(!phone.test(x.value))
		y.style.display="block";
	else
		y.style.display="none";
}
function hideTip2(){
	var x=document.getElementById('newpw');
	var y=document.getElementById('cnewpw');
	var z=document.getElementById('typeTip2');

	if(x.value==y.value)
		z.style.display="none";
	else
		z.style.display="block";

}

var yanzhen=document.getElementById("yanzhen");
var wait=60;  
function time(yanzhen) {  
    if (wait == 0) {           
        yanzhen.innerHTML="获取验证码"; 
        yanzhen.className="yanzhen";
        wait = 60;  
    } else {  
    	yanzhen.className="yanzhen_on";
        yanzhen.innerHTML="重新发送(" + wait + ")";  
        wait--;  
        setTimeout(function() {  
            time(yanzhen);
        },  
        1000);
    }  
} ; 
yanzhen.addEventListener("touchstart",function(e){
	e.preventDefault();
	//判断用户是否注册
    if (document.getElementById("tel").value) {
        $.ajax({
            type:"post",
            url:"http://api.lizi123.cn/index.php/home/user/isRegister",
            data:{
                "user_name":document.getElementById('tel').value,
            },
            success:function(data){
                var obj = eval(data);
                if(obj.status==1){
                    console.dir(obj);
                    phoneCode();
                    time(document.getElementById("yanzhen"));
                }else{
                    document.getElementById('typeTip1').innerHTML = "手机已注册",
                    document.getElementById('typeTip1').style.display="block";
                }
            },
            error:function(data){
                alert("error!");
            },   
        });  
    }else{
        document.getElementById('typeTip1').innerHTML = "手机不能为空",
        document.getElementById('typeTip1').style.display="block";
    }
    
},false);

//获取手机验证码
function phoneCode(){
    
    var user_name = document.getElementById("tel").value;
    //获取验证码
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/userObtainCode",
        data:{
            "mobile":user_name,
            "codeType":0,//用户注册
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            code = obj.phone_code; 
        },
        error:function(data){
            alert("error!");
        },
    });
      
}

//确认
$("#confirm").click(function(){
    var user_name = document.getElementById("tel").value;
    var idcode = document.getElementById("idcode");
    var user_password = document.getElementById("newpw").value;
    var re_password = document.getElementById("cnewpw").value;
    //验证130-139,150-159,180-189号码段的手机号码
    var phone = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    
    if (!user_name||!user_password||!re_password) {
        JAlert("不能为空！");
        return;
    }else if (!phone.test(user_name)) {
        alert("手机号码有误！");
        return;
    }else if(code!=document.getElementById("idcode").value){
    	alert("验证码错误");
    	return;
    }else if (user_password!=re_password) {
        alert("两次密码不一致！");
        return;
    }else if (user_password.length<6||user_password.length>16) {
        alert("密码长度在6-16之间!");
        return;
    };
    
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/userRegister",
        data:{
            "user_name":user_name,
            "user_password":user_password,
        },
        success:function(data){
            var obj = eval(data);
            if (obj.status==200) {
                alert("恭喜，注册成功!");
                window.location.href = "http://m.lizi123.cn/LiZi/login/choose_label.html#";
            }else if (obj.status==1) {
                alert("账号已注册！");
            }else if (obj.status==2) {
                alert("注册失败！");
            };
        },
        error:function(data){
            alert("error!");
        },
        
    });

});

