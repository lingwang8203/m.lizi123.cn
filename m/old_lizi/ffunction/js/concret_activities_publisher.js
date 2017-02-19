$(document).ready(function(){
	//alert("js");
	//获取url参数
    var id = getQueryString("activity_id");
    //xinjinzhan
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/skill/actProgressInfo",
		data:{
			"activity_id":id,
	      },
	    success:function(data){
	    	var obj=eval(data);
	    	console.dir(obj);
	    	if (obj.status==200) {
	    		$("#progress").text("");
	    		for (var i = 0; i < obj.length; i++) {
	    			//alert(i);
					var html = "<div class='jinzhan'>";
		    		html += "<div class='right'>";
		    		html += "<h3 class='right_header'>"+obj[i].title+"</h3>";
		    		html += "<span class='time'>"+obj[i].time+"<br>&nbsp;&nbsp;&nbsp;14.00</span>";
					html += "<p class='right_miaoshu'>"+obj[i].intro+"</p>";
					if (obj[i].image1) {
						html += "<img src='"+obj[i].image1+"' class='right_image'/>"; 
					}
					if (obj[i].image2) {
						html += "<img src='"+obj[i].image2+"' class='right_image'/>"; 
					}
					if (obj[i].image3) {
						html += "<img src='"+obj[i].image3+"' class='right_image'/>"; 
					}
					if (obj[i].is_vote==1) {
						//alert(obj[i].vote.length);
						for (var j = 0; j < obj[i].vote.length; j++) {
							html += "<div class='toupiao1'>";
							html += "<div class='toupiao1_left'><img src='"+obj[i].vote[j].image+"'></div>";
							html += "<div class='toupiao1_right'>";
							//html += "<div class='toupiao1_right_h'>"+obj[i].vote[j].title+"</div>";
							html += "<div class='toupiao1_right_p'>"+obj[i].vote[j].intro+" </div>";
							html += "<div class='piaoshu'>当前票数:<span>"+obj[i].vote[j].num+"</span>�?/div>";
							html += "</div>";
							html += "</div>";
						}	
					}
					html += "</div>";
					html += "<img src='"+obj[i].tag_image+"' class='tubiao'/>";
					html += "</div>";
					$("#progress").append(html);
	    		}
	    		
	    	} else {
	    		$("#progress").text("");
	    		var html = "<div class='jinzhan'>";
	    		html += "<h3 class='right_header'>无活动�?�展</h3>";
	    		html += "</div>";
	    	}
	    },
	    error:function(data)
	    {
	    	alert("获取数据失败�?);
	    }
	    
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
