$(document).ready(function(){
    //获取url参数
    var skill_id = getQueryString("skill_id");
    console.dir(skill_id);
	//获取课程详情
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/skill/skillInfo",
        data:{
        	"skill_id":skill_id,
        },
        success:function(data){
            var obj = eval(data);
            
        },
        error:function(data){
            alert("获取课程评论失败!");
        },
            
    });


});	



function getQueryString(name){ 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) {
		return unescape(r[2]); 
	}else{
		return null; 
	}
}; 




