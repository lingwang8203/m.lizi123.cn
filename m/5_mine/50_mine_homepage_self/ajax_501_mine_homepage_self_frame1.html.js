$(document).ready(function(){
	
    //id=1;
	id=getQueryString('user_id');
	alert(id);
	////获取个人简介
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/selfPage",
            xhrFields: {
                withCredentials: true
            },
			data:{
//	         "sports_id":sports_id,
             "client_type":0,
             "user_id":id,
			},	
			success:function(data){
				
				var obj = eval(data);
 	  			if (obj.status==200) {
 	  			
 	  				///栗子印象
 	  				for(var i=0;i<obj.liziImpress.length;i++){
 	  					var html1="<div class='aui-label aui-font-size-12 tap'>"+obj.liziImpress[i].tag_name+"</div>";
 	  					$("#lizi_memory").append(html1);
 	  				}	
 	  				////我参与的
 	  				for(var j=0;j<obj.joinAct.length&&j<3;j++){
 	  					var html2="<div class='aui-col-xs-4 aui-row aui-padded-l-15 aui-padded-r-10'>";
 	  					html2+="<div class='aui-col-xs-12'>";
 	  					// if(obj.join[j].type==0){////0代表是课程  1代表是活动
 	  						// html+="<a href='../../2_function/21_function_class/2121_function_class_concret_frame1.html?class_id="+obj.join[j].class_id+"' target='_blank'><img src='"+obj.join[j].class_poster+"' class='book_photo'/></a>";}
 	  					// else if(obj.join[j].type==1){
 	  						html2+="<a href='../../2_function/23_function_sports/2321_function_sports_concret_frame1.html?sports_id="+obj.joinAct[j].id+"' target='_blank'><img src='"+obj.joinAct[j].image+"' class='book_photo'/></a>";
 	  					//}
 	  					html2+="</div>";
 	  					html2+="<div class='aui-col-xs-12 tex'>"+obj.joinAct[j].name+"</div>";
 	  					html2+="</div>";
 	  					$("#mine_join_content").append(html2);
 	  				}
 	  				
 	  				/////与我相关的用户
 	  				for(var k=0;k<6&&k<obj.myCare.length;k++){
 	  					var html3="<div class='aui-col-xs-2'style='width: auto;'>";
 	  					html3+="<a href='../51_mine_homepage/51_mine_homepage.html?user_id="+obj.myCare[k].object_id+"' target='_blank'><img src='"+obj.myCare[k].head_image+"' class='aui-img-round photo'/></a>";
 	  					html3+="</div>";
 	  					$("#mine_related").append(html3);
 	  				}
 	  				if(k>=6){
 	  					var html3="<div class='aui-col-xs-2'style='width: auto;'>";
 	  					html3+="<a href='501_mine_homepage_self_frame1_relatedMeMore.html' target='_blank'><img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/1_home/more.png' style='width:0.6rem;height:0.8rem;margin: 0.3rem;margin-right: 0;margin-top: 0.8rem;' /></a>";
 	  					html3+="</div>";
 	  					$("#mine_related").append(html3);
 	  				}
 	  				
 	  				// ///////////与他相关的用户
 	  				// for(var k=0;k<6&&k<obj.related.length;k++){
 	  				// 	var htm="<div class='aui-col-xs-2'style='width: auto;'>";
 	  				// 	htm+="<a href='../51_mine_homepage/51_mine_homepage.html?user_id="+obj.related[k].user_id+"' target='_blank'><img src='"+obj.related[k].headImg+"' class='aui-img-round photo'/></a>";
 	  				// 	htm+="</div>";
 	  				// 	$("#ta_related").append(htm);
 	  				// }
 	  				// if(k>=6){
 	  				// 	var htm="<div class='aui-col-xs-2'style='width: auto;'>";
 	  				// 	htm+="<a href='501_mine_homepage_self_frame1_relatedTaMore.html' target='_blank'><img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/1_home/more.png' style='width:0.6rem;height:0.8rem;margin: 0.3rem;margin-right: 0;margin-top: 0.8rem;' /></a>";
 	  				// 	htm+="</div>";
 	  				// 	$("#mine_related").append(htm);
 	  				// }
 	  				
 	  				
 	  				
 	  				
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		alert("失败!");
	     	}
	
		});
	
})

window.onload=function(){
	
	document.getElementById("mine_join_more").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("501_mine_homepage_self_frame1_joinMore.html"+user_id);
	},false)
	
}

function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
}; 
