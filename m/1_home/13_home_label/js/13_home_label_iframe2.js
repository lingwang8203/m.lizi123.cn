$(document).ready(function(){
	//id=3;
    id=getQueryString('tag_id');

	$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/class/classContent",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
                  "client_type":0,
                  "tag_id":id,
				},
				success:function(data){
					var obj = eval(data);
 	  				if (obj.status==200) {
 	  					$("#todayReCommend").text("");
 	  					
		            	for(var i=0;i<obj.res.length;i++){
		            		
		            			var html;
		            			html="<li class='aui-row aui-padded-t-5 aui-padded-b-5'style='width:100%;background: white;'>";
		            			html+="<div class='aui-col-xs-2 aui-text-center'style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
		            			html+="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.res[i].user_id+"' style='width: 2rem !important;height:auto;'target='_blank'><img src='"+obj.res[i].head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;' /></a>";
		            			html+="</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
		            			html+="<div class='aui-col-12 aui-font-size-14'>"+obj.res[i].user_name+"</div>  ";
		            			html+="<div class='aui-col-12 aui-font-size-12'>"+obj.res[i].user_intro+"</div></div> ";
		            			html+="<div class='aui-col-xs-4'style='margin-top: 0.3rem;'>";
		            			html+="<a href='http://m.lizi123.cn/1_home/13_home_label/13_home_label.html?tag_id="+obj.res[i].tag_id+"'target='_blank'><div class='aui-label aui-pull-right aui-font-size-12 tap'>"+obj.res[i].tag_name+"</div></a>";
		            			html+="</div><a href='../../2_function/21_function_class/212_function_class_concret.html?class_id="+obj.res[i].id+"' style='color: #212121 !important;'target='_blank'>";
		            			html+="<div class='aui-row aui-col-xs-12'> <div class='aui-col-xs-5 aui-pull-left'style='height: 8.4rem;	padding: 0.5rem !important;padding-top: 0 !important;'>";
		            			html+="<img src='"+obj.res[i].image+"'style='height:8.4rem;width: 100%;' /> </div>";
		            			html+="<div class='aui-col-xs-7 aui-row aui-pull-left'><div class='aui-row aui-col-12 '>";
		            			html+="<div class='aui-col-12 aui-font-size-18 '>"+obj.res[i].name+"</div></div>";
		            			html+="<div class='aui-row aui-col-12 '><div class='aui-col-xs-4  aui-font-size-12'>上课方式</div>";
		            			html+="<div class='aui-col-xs-8 aui-font-size-12'>";
		            			switch(obj.res[i].way){
						            case "0":
						                html += "一对多";
						                break;
						            case "1":
						                html += "一对一";
						                break;
						            case "2":
						                html += "不限";
						                break;
						        }
						        html+="·";
						        switch(obj.res[i].method){
						            case "0":
						                html += "线上";
						                break;
						            case "1":
						                html += "线下";
						                break;
						            case "2":
						                html += "不限";
						                break;
						        }
		            			html+="</div></div>";
		            			html+="<div class='aui-row aui-col-12 '><div class='aui-col-xs-4  aui-font-size-12'>课程简介</div>";
		            			html+="<div class='aui-col-xs-8 aui-font-size-12'>"+obj.res[i].intro+"</div></div>";
		            			html+="<div class='aui-row aui-col-12 '><div class='aui-col-xs-4  aui-font-size-12'>上课地点</div>";
		            			html+="<div class='aui-col-xs-8 aui-font-size-12'>"+obj.res[i].address+"</div></div>	";
		            			html+="<div class='aui-row aui-col-12 '><div class='aui-col-xs-4  aui-font-size-12'>上课时间</div>";
		
		            			html+="<div class='aui-col-xs-8  aui-row aui-font-size-12'><div class='aui-col-12' >周";
		            			html+=obj.res[i].week_time;
		            			html+="</div><div class='aui-col-12'>共 <span style='color: #ffac0d;'>"+obj.res[i].week_hour*obj.res[i].week_num+"</span>学时</div>";
		            			html+="</div></div></div></div></a><div class='aui-row aui-col-xs-12'>";
		            			html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
		            			html+="<i class='aui-iconfont aui-icon-like' name='class_dianzan'></i>";
		            			html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj.res[i].collect_num+"</span>";
		            			html+="</div><a href='../../2_function/21_function_class/212_function_class_concret.html?class_id="+obj.res[i].id+"' target='_blank'>";
		            			html+="<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i>";
		            			html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj.res[i].evaluate_num+"</span></div> </a>";
		            			html+="<div class='aui-col-xs-4 aui-pull-right'>";
		            			html+="<a href='http://m.lizi123.cn/2_function/21_function_class/2121_function_class_concret_fillMessage.html?class_id="+obj.res[i].id+"' target='_blank'><div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on'style='margin-top: 0;'>报名参加</div></a></div></div></li>";
		            			html+="<div class='hr'></div>";
		                        $("#todayReCommend").append(html);	
		            	}
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
//					alert("失败！");
				},
			});
	
})

    window.onload=function(){
    
    
     //////////////////课程点赞

    var class_zan=document.getElementsByName("class_dianzan");
    for(var i=0;i<class_zan.length;i++){
    	class_zan[i].addEventListener("touchstart",function(e){
    		e.preventDefault();
    		if(this.className=="aui-iconfont aui-icon-like"){
    			$.ajax({
    			type:"post",
				url:"",
				data:{
		         "class_id":class_id,
		
				},
				success:function(data){
    			this.className="iconfont_like icon-xin";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
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
				url:"",
				data:{
		         "class_id":class_id,
		
				},	
				success:function(data){
    			this.className="aui-iconfont aui-icon-like";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
    			},
		     	error:function(data)
		     	{
//		     		alert("取消点赞失败!");
		     	}
		
				});
    		}
    	},false);
    }
    
    
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
