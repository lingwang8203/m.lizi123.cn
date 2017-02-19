

 //----------------------------------------获取活动详情
$(document).ready(function(){
   var zan_num;//parseInt(document.getElementById("zan_num").innerHTML);
	 //获取url参数
    var activity_id = getQueryString("activity_id");
    console.dir(activity_id);
    //是否已报�?
    var join_id = 1;
	var id=activity_id;
	
	
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/actDetails",
		data:{
			"id":id,
	      },
	    success:function(data){
	    	var obj=eval(data);
	    	if(obj.status==200){
	    		console.dir(obj);
	    		document.getElementById("class_image").src = obj.poster;
	    		document.getElementById("name").innerHTML = obj.name;
	    		zan_num = obj.good_num;
	    		document.getElementById("zan_num").innerHTML=obj.good_num;
	    		
	    	};
	    },
	    error:function(data)
	    {
	    	alert("actDetails获取数据失败�?);
	    }
	    
	});



	//------------------------------------------报名参加活动---
    var join=document.getElementById("join");
    join.addEventListener("touchstart",function(e){
        e.preventDefault(); 
        if(this.className=="join_before"){
            $.ajax({
                type:"post",
                url:"http://api.lizi123.cn/index.php/home/activity/actEnter",
                data:{
                    "activity_id":activity_id,
                },
                success:function(data){
                	//alert("报名成功�?);
                    var obj = eval(data);
                    console.dir(obj);
                    if (obj.status==200) {
                        join_id = obj.id;
                        document.getElementById("join").className="join_after";
                    }else if (obj.status==2) {
                        join_id = obj.id;
                        document.getElementById("join").className="join_after";
                    }else{
                        alert("活动报名失败�?)
                    }
                    
                },
                error:function(data){
                    alert("活动报名失败!");
                },
                  
            });         
        }else{
            //alert(join_id);
            $.ajax({
                    type:"post",
                    url:"http://api.lizi123.cn/index.php/home/activity/deleteActEnter",
                    data:{
                        "id":join_id,
                    },
                    success:function(data){
                    	//alert("取消报名成功!");
                        var obj = eval(data);
                        console.dir(obj);
                        if(obj.status==200){
                            document.getElementById("join").className="join_before";
                        }else{

                            alert("报名取消失败!"+obj.status);
                        }
                    },
                    error:function(data){
                        alert("活动报名取消失败!");
                    },
            });
        }            
            
    },false);   
//-------------------------点赞活动

var zan=0;
document.getElementById("zan").addEventListener("touchstart",function(e){
	e.preventDefault();
	if(zan==0){
		$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/zan",
		data:{
         "activity_id":activity_id,

		},
        success:function(data){
        //alert("点赞成功�?);
		document.getElementById("zan").src ="img/sports/yizan.png";

		zan_num++;
		zan=1;
		document.getElementById("zan_num").innerHTML=zan_num;
        },
        error:function(data)
        {
        	alert("点赞活动失败!");
        }
		});
	}
	else{
		$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/deleteZan",
		data:{
         "activity_id":activity_id,

		},	
		success:function(data){
		//alert("取消点赞成功�?);
		document.getElementById("zan").src ="img/sports/tubiao.png";
		zan_num--;
		zan=0;
		document.getElementById("zan_num").innerHTML=zan_num;
     	},
     	error:function(data)
     	{
     		alert("取消点赞失败!");
     	}

		});
	}
},false);


///----------------------------活动收藏

var guanzhu=0;
document.getElementById("guanzhu").addEventListener("touchstart",function(e){
	e.preventDefault();
	if(guanzhu==0){
		$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/actCollect",
		data:{
         "activity_id":activity_id,
        },
        success:function(data){
        //alert("收藏成功�?);
		document.getElementById("guanzhu").src ="img/sports/yiguanzhu.png";
		guanzhu=1;
	   },
       error:function(data)
     	{
     		alert("收藏失败!");
     	}
		});
	}
	else{
		$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/deleteActCollect",
		data:{
         "activity_id":activity_id,
        },
        success:function(data){
        //alert("取消收藏成功�?);
		document.getElementById("guanzhu").src="img/sports/xin.png";
		guanzhu=0;
	   },
        error:function(data)
     	{
     		alert("取消收藏失败!");
     	}

	});
	}
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

