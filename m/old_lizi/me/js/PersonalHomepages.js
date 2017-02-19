$(document).ready(function(){
    //alert("js");
    
	//获取url参数中的user_id
    var user_id = getQueryString("user_id");
    console.dir(user_id);
    

    var homepage=document.getElementById("homepage");
    var dynamic=document.getElementById("dynamic");
    var ta=document.getElementById("ta");
    var foot=document.getElementById("foot");
    foot.src="homepage.html?user_id="+user_id;
    homepage.addEventListener("touchstart",function(e){
        e.preventDefault();
        this.className="nav_on";
        dynamic.className="nav_off";
        ta.className="nav_off";
        foot.src="homepage.html?user_id="+user_id;
    },false)
    dynamic.addEventListener("touchstart",function(e){
        e.preventDefault();
        this.className="nav_on";
        homepage.className="nav_off";
        ta.className="nav_off";
        foot.src="dynamic.html?user_id="+user_id;
    },false)
    ta.addEventListener("touchstart",function(e){
        e.preventDefault();
        this.className="nav_on";
        homepage.className="nav_off";
        dynamic.className="nav_off";
        foot.src="ta.html?user_id="+user_id;
    },false)

    //*****************************用户信息***************************
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/userInfo",
        data:{
        	"user_id":user_id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                document.getElementsByClassName("PersonalName")[0].innerHTML = obj.user_nickname; 
                document.getElementsByClassName("Introduce")[0].innerHTML = obj.user_intro; 
                document.getElementById("head").src = obj.user_image;             
			}
        },
        error:function(data){
            alert("error!");
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

