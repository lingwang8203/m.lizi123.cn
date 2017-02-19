$(document).ready(function(){
	//获取url参数中的user_id
    //var user_id = getQueryString("user_id");
    //==============================用户信息=============================
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/userInfo",
        data:{
            "client_type":0,
        },
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                document.getElementById("user_name").innerHTML = obj.user_name; 
                document.getElementById("user_login_time").innerHTML = obj.login_times;  
                document.getElementById("user_headImg").src = obj.head_image;
                if(obj.status==200){
                    //消息//关注/粉丝/采集
                    if(obj.new_care==0)
                        document.getElementById("guanzhu_state").src="";
                    else if(obj.newcare==1)
                        document.getElementById("guanzhu_state").src="http://img.lizi123.cn/LiZi/me/img/dian.png";
                    if(obj.new_fans==0)
                        document.getElementById("fensi_state").src="";
                    else if(obj.newfans==1)
                        document.getElementById("fensi_state").src="http://img.lizi123.cn/LiZi/me/img/new.png";
                    /*if(obj.new_select==0)
                        document.getElementById("caiji_state").src="";
                    else if(obj.newselect==1)
                        document.getElementById("caiji_state").src="http://img.lizi123.cn/LiZi/me/img/dian.png";
                    */
                }
            }else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
            }
        },
        error:function(data){
            //alert("error!");
        },
            
    });
    


    //===================================是否有新消息======================
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/haveNewMessage",
        data:{
            "client_type":0,
        },
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==1120)
                document.getElementById("message_state").src="http://img.lizi123.cn/LiZi/index/img/news.png";
            else if(obj.status==1119)
                document.getElementById("message_state").src="http://img.lizi123.cn/LiZi/index/img/news_weidu.png";
        
        },
        error:function(data){
            //alert("error!");
        },
        
    });



});


//获取url参数
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
}; 