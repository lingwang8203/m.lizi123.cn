$(document).ready(function(){
	club_id = getQueryString('club_id');
	    document.getElementById("publish_club_xiuxiu").addEventListener("touchstart",function(e){
    	e.preventDefault();
    	window.open("http://m.lizi123.cn/2_function/22_function_club/223_publish_club_xiuxiu.php?club_id="+club_id+"");
    },false)
	    document.getElementById("publish_club_jiyi").addEventListener("touchstart",function(e){
    	e.preventDefault();
    	window.open("http://m.lizi123.cn/3_publish/34_publish_club/34331_publish_club_step2_Manage_frame3_publishRecord.html?club_id="+club_id+"");
    },false)
	//alert(club_id);
	document.getElementById("ifram").src = "2221_function_club_concret_frame1.html?club_id="+club_id;
	//社团基本资料
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/club/clubInfo",
		async:false,
		data:{
			"client_type":0,
			"club_id":club_id
		},
        xhrFields: {
            withCredentials: true
        },
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
            if (obj.status==200) {
            	//document.getElementById("club_fengmian").src=obj.image;
            	document.getElementById("club_name").innerHTML=obj.name;
            	document.getElementById("club_title").innerHTML=obj.name;
            	//document.getElementById("club_school").innerHTML="("+obj.school+")";
            	document.getElementById("club_miaoshu").innerHTML=obj.sign;
            	
            	document.getElementById("club_headImg").src=obj.image;
            	document.getElementById("club_shoucang_number").innerHTML=obj.collect_num;
            	if(obj.is_collect==0){///0未收藏  1已收藏
            		document.getElementById("club_shoucang_index").className="aui-iconfont aui-icon-like aui-pull-right aui-font-size-14 aui-col-xs-12";
            	}else{
            		document.getElementById("club_shoucang_index").className="iconfont_like icon-xin aui-pull-right aui-font-size-14 aui-col-xs-12 ";
            	}
            	
            	if(obj.is_join==0){///0表示未加入  1表示已加入
            		document.getElementById("club_join_index").className="aui-row aui-label lab_join aui-pull-right aui-font-size-14 aui-col-xs-10 aui-margin-t-15 aui-margin-r-15";
            	}else{
            		document.getElementById("club_join_index").className="aui-row aui-label lab_join aui-bg-base aui-text-white aui-pull-right aui-font-size-14 aui-col-xs-10 aui-margin-t-15 aui-margin-r-15";
            		document.getElementById("club_join_index").innerHTML="已加入";
            	}
            }
		},
		error:function(data){
			//alert("获取社团资料失败");
		},
	});
	
	//更新收藏
	document.getElementById("club_shoucang_index").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.className=="aui-iconfont aui-icon-like aui-pull-right aui-font-size-14 aui-col-xs-12"){	
			$.ajax({
    			type:"post",
				url:"http://api.lizi123.cn/index.php/home/club/clubCollect",
				data:{
					"client_type":0,
					"club_id":club_id,
				},
		        xhrFields: {
		            withCredentials: true
		        },
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
					if (obj.status==200) {
						document.getElementById("club_shoucang_index").className="iconfont_like icon-xin aui-pull-right aui-font-size-14 aui-col-xs-12 ";
						document.getElementById("club_shoucang_index").firstElementChild.innerHTML=parseInt(document.getElementById("club_shoucang_index").firstElementChild.innerHTML)+1;
					}
				},
		        error:function(data)
		        {
		        	//alert("收藏失败!");
		        }
			});
		}else{	
			$.ajax({
    			type:"post",
				url:"http://api.lizi123.cn/index.php/home/club/deleteClubCollect",
				data:{
					"client_type":0,
					"club_id":club_id,
				},
		        xhrFields: {
		            withCredentials: true
		        },
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
					if (obj.status==200) {
			    		document.getElementById("club_shoucang_index").className="aui-iconfont aui-icon-like aui-pull-right aui-font-size-14 aui-col-xs-12";
						document.getElementById("club_shoucang_index").firstElementChild.innerHTML=parseInt(document.getElementById("club_shoucang_index").firstElementChild.innerHTML)-1;
			    		
					}
				},
		        error:function(data)
		        {
		        	//alert("收藏失败!");
		        }
			});
		}
	},false)
	

	document.getElementById("club_join_index").addEventListener("touchstart",function(e){
		e.preventDefault();
		this.className="aui-row aui-label lab_join  aui-pull-right aui-font-size-14 aui-col-xs-10 aui-margin-t-15 aui-margin-r-15 aui-bg-base aui-text-white";
		this.innerHTML="已申请";
		
		$.ajax({
						type:"post",
						url:"",
						xhrFields:{
		               		withCredentials: true
		           		},
						data:{
		//					"sports_id":sports_id,
						},
						success:function(data){
							var obj = eval(data);
		 	  				if (obj.status==200) {
							}else if(obj.status==199){
								window.open("http://m.lizi123.cn/7_login/7_login.html");
							}
						},
						error:function(data){
							//alert("失败！");
						},
					});
	},false)
})


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
