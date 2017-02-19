$(document).ready(function(){
    //alert("js");
    
	//获取url参数中的user_id
    var user_id = getQueryString("user_id");
    console.dir(user_id);
    var obj;
    //*****************************用户动�?**************************
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/userDynamic",
        data:{
        	"user_id":user_id,
        },
        success:function(data){
            obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                resShow(obj);
			}
        },
        error:function(data){
            alert("error!");
        },
            
    });
    
    
    
    


});
//=============================动态显�?===================================
function resShow(obj){
    for (var i = 0; i < obj.length; i++) {
        var html = "<div id='dynamic'>";
        html += "<img class=' logo'  src='"+obj.user_image+"' style='padding-top:2.43rem;padding-left:1.8rem;'>";
        html += "<div class='info'>";
        //alert(obj.user_name);
        html += "<div class=' name' >"+obj.user_name+"</div>";
        html += "<div>";
        html += "<span class='sign'>"+obj.user_intro+"</span>";
        html += "<span class='time'>"+obj[i].time+"</span>";
        html += "</div>";
        html += "</div>";
        html += "<span class='share'></span>";
        if (obj[i].picture) {
            html += "<img class='pic' src='"+obj[i].picture+"'>";
        }
        //html += "<img  class='play' src='img/play.png'>";
        html += "<p class='note'>"+obj[i].intro+"</p>";
        html += "<span class='like'>"+obj[i].good_num+"</span>";
        html += "<span class='comment'>"+obj[i].comment_num+"</span>";
        html += "</div><br>";
        $("#dynamicList").append(html);
    }
}


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

