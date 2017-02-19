$(document).ready(function(){
    //alert("js");
    
	//获取url参数中的user_id
    var user_id = getQueryString("user_id");
    console.dir(user_id);
    var obj;
    //*****************************用户信息***************************
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/homePage",
        data:{
        	"user_id":user_id,
        },
        success:function(data){
            obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                //alert(obj.liziImpress[0].tag_name);
                //获取栗子印象
                for (var i = 0; i < obj.liziImpress.length; i++) {
                    var html = "<li class='label'>"+obj.liziImpress[i].tag_name+"</li>";
                    $("#label").append(html);
                }
                //获取ta参与�?

                var html = "<li><img class='book bk1' src='"+obj.joinAct[0].image+"'><br/>"+obj.joinAct[0].name+"</li>"
                html += "<li><img class='book bk2' src='"+obj.joinAct[1].image+"'><br/>"+obj.joinAct[1].name+"</li>";
                html += "<li><img class='book bk3' src='"+obj.joinAct[2].image+"'><br/>"+obj.joinAct[2].name+"</li>";
                $("#joinAct").append(html);

                //与ta相关
                for (var i = 0; i < obj.hisCare.length; i++) {
                    var html = "<a href='PersonalHomepage_header.html?user_id="+obj.hisCare[i].content_id+"' target='_black'><img class='icon ic1' src='"+obj.hisCare[i].user_image+"'></a>";
                    $("#hisCare").append(html);
                }
                //与我相关   
                for (var i = 0; i < obj.myCare.length; i++) {
                    var html = "<a href='PersonalHomepage_header.html?user_id="+obj.myCare[i].user_id+"' target='_black'><img class='icon ic2' src='"+obj.myCare[i].user_image+"'></a>";
                    $("#myCare").append(html);
                }
                document.getElementsByClassName("note-ic2")[0].innerHTML = obj.myCare.length+"位我关注的人也关注了TA";
                
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

