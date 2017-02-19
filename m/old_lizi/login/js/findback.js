//$(document).ready(function(){
var yanzhen=document.getElementById("yanzhen");
var wait=60;  
var code;//验证码

yanzhen.addEventListener("touchstart",function(e){
    e.preventDefault();
    var user_name = document.getElementById("tel").value;
    //判断用户是否注册
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/isRegister",
        data:{
            "user_name":user_name,
        },
        success:function(data){
            var obj = eval(data);
            if(obj.status==200){
                console.dir(obj);
                phoneCode();
                time(document.getElementById("yanzhen"));
            }else{
                document.getElementById('typeTip1').innerHTML = "手机未注册",
                document.getElementById('typeTip1').style.display="block";
            }
        },
        error:function(data){
            alert("error!");
        },   
    });  
    
},false);
    
  
function load(){
    document.body.style.height=window.screen.height;
}

function hideTip1(){
    var x=document.getElementById('tel');
    var y=document.getElementById('typeTip1');
    //验证130-139,150-159,180-189号码段的手机号码
    var phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
    
    
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
//时间限制60s
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
//获取手机验证码
function phoneCode(){
    
    var user_name = document.getElementById("tel").value;
    
    
    //获取验证码
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/userObtainCode",
        data:{
            "mobile":user_name,
            "codeType":1,//找回密码
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
document.getElementById("confirm").addEventListener("touchstart",function(e){
    e.preventDefault();
    var newpw = document.getElementById("newpw").value;
    if (code==document.getElementById("idcode").value&&newpw&&newpw==document.getElementById("cnewpw").value) {
        var user_name = document.getElementById("tel").value;
        //修改密码
        $.ajax({
            type:"post",
            url:"http://api.lizi123.cn/index.php/home/user/userFindback",
            data:{
                "user_name":user_name,
                "new_psd":newpw,
            },
            success:function(data){
                var obj = eval(data);
                if(obj.status==200){
                    console.dir(obj);
                    window.location.href="http://m.lizi123.cn/LiZi/login/index.html";
                }
            },
            error:function(data){
                alert("error!");
            },   
        });
    }else{
        alert("验证码错误！");
    }
    
},false);