h$(document).ready(function(){
    //alert("concrete_class.js");
    //-----------------标签导航
    //获取url参数
    var skill_id = getQueryString("skill_id");
    //是否已报�?
    var join_id = 0;
    //是否已收�?
    var collect_id = 0;
    var middle_contect=document.getElementById("middle_contect");   
    var brief=document.getElementById("brief");
    var _comment=document.getElementById("comment");
    var record=document.getElementById("record");

    //切换至简�?
    brief.addEventListener("touchstart",function(e){
        e.preventDefault();                         
        this.className="nav_on";
        middle_contect.src="concret_class_brief.html?skill_id="+skill_id;
        _comment.className="nav_off";
        record.className="nav_off";
    },false);   
    //切换至评�?
    _comment.addEventListener("touchstart",function(e){
        e.preventDefault();                         
        this.className="nav_on";
        middle_contect.src="concret_class_comment.html?skill_id="+skill_id;
        brief.className="nav_off";
        record.className="nav_off";
    },false);   
    //切换至举�?
    record.addEventListener("touchstart",function(e){
        e.preventDefault();                         
        this.className="nav_on";
        middle_contect.src="concret_class_record.html?skill_id="+skill_id;
        brief.className="nav_off";
        _comment.className="nav_off";
    },false);  
    //----------------------------------------获取课程详情
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/skill/skillInfo",
        data:{
            "skill_id":skill_id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
                if (obj.main_image) {
                    document.getElementById("class_image").src = obj.main_image;
                } else {
                    document.getElementById("class_image").src = obj.image_1;
                }
                document.getElementById("middle_contect").src += "?skill_id="+skill_id;
                if (obj.join_id) {
                    document.getElementById("join").className="join_after";
                    join_id = obj.join_id;
                } else {
                    document.getElementById("join").className="join_before";
                }
                if (obj.collect_id) {
                    collect_id = obj.collect_id;
                    document.getElementById("collection_image").src="img/concret/yicollection.png";
                };
            }else{
                alert(obj.status);
            }
        },
        error:function(data){
            alert("获取课程详情失败!");
        },
            
    }); 
    //------------------------------------------报名参加---
    var join=document.getElementById("join");
    join.addEventListener("touchstart",function(e){
        e.preventDefault(); 
        if(this.className=="join_before"){
            $.ajax({
                type:"post",
                url:"http://api.lizi123.cn/index.php/home/skill/skillLearn",
                data:{
                    "skill_id":skill_id,
                },
                success:function(data){
                    var obj = eval(data);
                    console.dir(obj);
                    if (obj.status==200) {
                        join_id = obj.join_id;
                        document.getElementById("join").className="join_after";
                    }else if (obj.status==2) {
                        document.getElementById("join").className="join_after";
                    }else{
                        alert("课程报名失败�?)
                    }
                    
                },
                error:function(data){
                    alert("课程报名失败!");
                },
                  
            });         
        }else{
            $.ajax({
                    type:"post",
                    url:"http://api.lizi123.cn/index.php/home/skill/deleteSkillLearn",
                    data:{
                        "id":join_id,
                    },
                    success:function(data){
                        var obj = eval(data);
                        console.dir(obj);
                        if(obj.status==200){
                            document.getElementById("join").className="join_before";
                        }else{
                            alert("报名取消失败!"+obj.status);
                        }
                    },
                    error:function(data){
                        alert("课程报名取消失败!");
                    },
            });
        }            
            
    },false);   
    //---------------------------------------------收藏----------------
    var collection=0;
	document.getElementById("collection").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(collection==0){
			//alert(0);
			$.ajax({
                type:"post",
                url:"http://api.lizi123.cn/index.php/home/skill/skillCollect",
                data:{
                    "skill_id":skill_id,
                },
                success:function(data){
                    var obj = eval(data);
                    console.dir(obj);
                    
                    if (obj.status==200) {
                        document.getElementById("collection_image").src="img/concret/yicollection.png";
						collection=1;
                        if (obj.collect_id) {
                            collect_id = obj.collect_id;
                        };
                        
                    }else if (obj.status==199) {
                        window.location.href = "http://m.lizi123.cn/LiZi/login/index.html";
                    }else{
                        alert("收藏失败�?)
                    }
          
                },
                error:function(data){
                    alert("课程收藏失败!");
                },
                  
            }); 
			
		}else{
			$.ajax({
                    type:"post",
                    url:"http://api.lizi123.cn/index.php/home/skill/deleteSkillCollect",
                    data:{
                        "collect_id":collect_id,
                    },
                    success:function(data){
                        var obj = eval(data);
                        console.dir(obj);
                        if(obj.status==200){
                        	document.getElementById("collection_image").src="img/concret/collection.png";
							collection=0;
                        }else{
							alert("收藏取消失败!"+obj.status);
                        }
                    },
                    error:function(data){
                        alert("课程收藏取消失败!");
                    },
            });
			
		}
	},false);

});


//------------------------------------获取url参数----------------------------------------
function getQueryString(name){ 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) {
		return unescape(r[2]); 
	}else{
		return null; 
	}
}; 

