$(document).ready(function(){
		var club_id = getQueryString('club_id');
		//alert("fram3423:"+club_id);
		////////////记忆内容
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/club/clubRecall",
            xhrFields: {
                withCredentials: true
            },
			data:{
				"client_type":0,
				"club_id":club_id
			},	
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
 	  			if (obj.status==200) {
 	  				$("#recall_list").text("");
 	  				for (var i = 0; i < obj.length; i++) {
 	  					if ((obj.length%2)==1&&i==0) {
 	  						var html = "<div class='aui-col-xs-6 aui-padded-r-5'style='padding-top: 4.5rem;'>";
							html += "<div class='club_search_out'>";
							html += "<input type='search' placeholder='搜记忆' id='club_search'/>";
							html += "<i class='aui-iconfont aui-icon-search'style='color: #ffc955; float: left;padding-left: 0.2rem;'></i>;</div></div>";
							html += "<div class='aui-col-xs-6 aui-row'style='border-left: 0.1rem solid #ffc955 ;'>";
							html += "<div class='aui-col-xs-2 club_line'></div>";
							html += "<div class='aui-col-xs-10'>";
							html += "<img src='"+obj[i].image+"' class='club_photo_record'/>";
							html += "</div><div class='aui-col-xs-12 aui-row'>";
							html += "<div class='aui-col-xs-12 aui-font-size-18 aui-text-center'style='color: #ffc955;padding: 0 0.2rem;'>"+obj[i].topic+"</div>";
							html += "<div class='aui-col-xs-12 aui-font-size-12 aui-text-center'style='color: #ffc955;padding: 0 0.2rem;'>"+obj[i].time+"</div>";
							html += "<div class='aui-bar-ligh-col-xs-12 aui-font-size-12'style='color: #757575;padding: 0 0.4rem;'>"+obj[i].intro+"</div></div></div></li>";
							$("#recall_list").append(html);
 	  					}else{
 	  						var html = "<li class='aui-col-xs-12 aui-row'>";
		 	  				html += "<div class='aui-col-xs-6 aui-padded-r-5'>";
		 	  				html += "<div class='aui-col-xs-10'>";
		 	  				html += "<img src='"+obj[i].image+"' class='club_photo_record'style='margin: 0;margin-right: 0.4rem;float: right;'/></div>";
							html += "<div class='aui-col-xs-2 club_line'style='float: right;'></div>";
							html += "<div class='aui-col-xs-12 aui-row'>";
							html += "<div class='aui-col-xs-12 aui-font-size-18 aui-text-center'style='color: #ffc955;padding: 0 0.2rem;'>"+obj[i].topic+"</div>";
							html += "<div class='aui-col-xs-12 aui-font-size-12 aui-text-center'style='color: #ffc955;padding: 0 0.2rem;'>"+obj[i].time+"</div>";
							html += "<div class='aui-bar-ligh-col-xs-12 aui-font-size-12'style='color: #757575;padding:0 0.1rem 0 0.6rem;'>"+obj[i].intro+"</div></div>";
							html += "</div>";
							i++;
							html += "<div class='aui-col-xs-6 aui-row'style='border-left: 0.1rem solid #ffc955 ;padding-top: 5rem;'>";
							html += "<div class='aui-col-xs-2 club_line'></div>";
							html += "<div class='aui-col-xs-10'>";
							html += "<img src='"+obj[i].image+"' class='club_photo_record'/>";
							html += "</div><div class='aui-col-xs-12 aui-row'>";
							html += "<div class='aui-col-xs-12 aui-font-size-18 aui-text-center'style='color: #ffc955;padding: 0 0.2rem;'>"+obj[i].topic+"</div>";
							html += "<div class='aui-col-xs-12 aui-font-size-12 aui-text-center'style='color: #ffc955;padding: 0 0.2rem;'>"+obj[i].time+"</div>";
							html += "<div class='aui-bar-ligh-col-xs-12 aui-font-size-12'style='color: #757575;padding: 0 0.4rem;'>"+obj[i].intro+"</div></div>";
							html += "</div></li>";
							
							$("#recall_list").append(html);
 	  					}
	 	  				
					}
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("获取秀秀失败!");
	     	}
	
		});
	
})

window.onload=function(){
	////更新点赞状态
	var club_zan=document.getElementsByName("club_xiu_zan_index");
	for(var j=0;j<club_zan.length;j++){
		club_zan[j].addEventListener("touchstart",function(e){
			e.preventDefault();
			var show_id = this.id;
			//alert(1);
			if(this.className=="aui-iconfont aui-icon-like"){
				this.className="iconfont_like icon-xin";
		 	  	this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
				$.ajax({
					type:"post",
					url:"http://api.lizi123.cn/index.php/home/index/showGood",
		            xhrFields: {
		                withCredentials: true
		            },
					data:{
						"client_type":0,
						"show_id":show_id
					},	
					success:function(data){
						var obj = eval(data);
		 	  			if (obj.status==200) {
						}
		    		},
			     	error:function(data)
			     	{
			     		//alert("失败!");
			     	}
				});
			}else{
				this.className="aui-iconfont aui-icon-like";
		 	  	this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)-1;
				$.ajax({
					type:"post",
					url:"http://api.lizi123.cn/index.php/home/index/deleteShowGood",
		            xhrFields: {
		                withCredentials: true
		            },
					data:{
						"client_type":0,
						"show_id":show_id
					},	
					success:function(data){
						var obj = eval(data);
		 	  			if (obj.status==200) {
						}else if(obj.status==199){
							window.open("http://m.lizi123.cn/7_login/7_login.html");
						}
		    		},
			     	error:function(data)
			     	{
			     		//alert("失败!");
			     	}
				});
			}
		},false)
	}

}


//=================================获取url参数=====================
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
}; 