$(document).ready(function(){
    //alert("js");
    
	//获取url参数中的user_id
    //var user_id = getQueryString("user_id");
    //*****************************用户信息***************************
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/userInfo",
        data:{
        	//"user_id":user_id,
        },
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                document.getElementById("name").innerHTML = obj.user_nickname; 
                document.getElementById("date").innerHTML = obj.login_times;  
                document.getElementById("touxiang").src = obj.user_image;
                if(obj.status==200){
                    //关注/粉丝/采集
                    //alert(obj.newfans);
                    if(obj.newcare==0)
                        document.getElementById("new_guanzhu").src="";
                    else if(obj.newcare==1)
                        document.getElementById("new_guanzhu").src="img/dian.png";
                    if(obj.newfans==0)
                        document.getElementById("new_fensi").src="";
                    else if(obj.newfans==1)
                        document.getElementById("new_fensi").src="img/new.png";
                    if(obj.newselect==0)
                        document.getElementById("new_caiji").src="";
                    else if(obj.newselect==1)
                        document.getElementById("new_caiji").src="img/dian.png";
                }
            }else if(obj.status==199){
				window.open("http://m.lizi123.cn/login");
            }
        },
        error:function(data){
            alert("error!");
        },
            
    });

	document.getElementById("message_state").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("../chat/Applications/Chat/Web/chat_homepage.php");
	},false);

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

