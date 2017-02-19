$(document).ready(function(){
    //获取url参数
    var skill_id = getQueryString("skill_id");
    //console.dir(skill_id);
	//获取课程详情
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/skill/skillInfo",
        data:{
        	"skill_id":skill_id,
        },
        success:function(data){
            var obj = eval(data);
            if (obj.status==200) {
                console.dir(obj);
                document.getElementById("cla_name").innerHTML = "�?+obj.name+"�?;
                document.getElementById("people").innerHTML = "<span>"+obj.learn_num+"</span>人学�?;
                
                if (obj.method==1) {
                    document.getElementById("method").innerHTML = "线下";
                }else{
                    document.getElementById("method").innerHTML = "线上";   
                };
                
                if (obj.way==1) {
                    document.getElementById("way").innerHTML = "一对一"; 
                }else{
                    document.getElementById("way").innerHTML = "一对多";
                };

                if (obj.sale_type==1) {
                    document.getElementById("pay_way").innerHTML = "付费: "+obj.sale_money+" �?;
                }else if (obj.sale_type==0) {
                    document.getElementById("pay_way").innerHTML = "免费";
                }else{
                    document.getElementById("pay_way").innerHTML = "交换";
                };
                if (obj.week_time) {
                    document.getElementById(" schedule").innerHTML = "�?+obj.week_time;
                }
                
                document.getElementById("address").innerHTML = obj.address;

                //技能简�?
                var content = document.getElementsByClassName("content");
                content[0].innerHTML = obj.intro;
                //技能发布用户链�?
                document.getElementById("teacherInfo").href = "http://m.lizi123.cn/LiZi/me/PersonalHomepage_header.html?user_id="+obj.user_id;
                //技能发布用户头�?
                var touxiang = document.getElementsByClassName("touxiang");
                touxiang[0].src = obj.user_image;
                //技能发布用户简�?
                var motto = document.getElementsByClassName("motto");
                motto[0].innerHTML = obj.user_intro;
                //技能发布用户标�?
                var charateristic = document.getElementsByClassName("charateristic");
                charateristic[0].innerHTML = obj.school+"-"+obj.college;


            }else{
                alert("error:"+obj.status);
            }
        },
        error:function(data){
            alert("获取课程详情失败!");
        },
            
    });


});	



function getQueryString(name){ 
    console.dir(location.href);
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) {
		return unescape(r[2]); 
	}else{
		return null; 
	}
}; 




