var id = getQueryString("club_id");//获取url参数
document.getElementById("delete").addEventListener("touchstart",function(e){
 		e.preventDefault();
 		if(confirm("确定放弃编辑吗？")){
			window.location.href="page_club.html?club_id="+id;
		}
 },false);


//点击完成
document.getElementById("furnish").addEventListener("touchstart",function(e){
			e.preventDefault();
			var title = document.getElementById("title").value;//标题
			var content = document.getElementById("activities_details").value;//详情内容
			var image;
			if (title && content) {
				var year = document.getElementById("year").value;
				var month = document.getElementById("month").value;
				var day = document.getElementById("day").value;
				var dateTest = /^(\d{4})-(\d{2})-(\d{2})$/; 
				var date = year+"-"+month+"-"+day;
				if(!dateTest.test(date) || parseInt(month)>12 || parseInt(month)<1 || parseInt(day)<1 || parseInt(day)>31 ){
					alert("年月日格式错误！,正确格式：2016年09月08日");
				}else{
					var file_head = document.getElementById("upload_logo");
					// 获取文件对象
					var formData = new FormData();
					formData.append("file",file_head.files[0]);
					$.ajax({  
				        url:"http://qj_api.qdmedia.cc/index.php/home/index/uploads",
				        type: 'POST',  
				        data: formData,  
				        async: false,  
				        cache: false,  
				        contentType: false,  
				        processData: false,  
				        success: function (data) {  
				        	var obj = eval(data);
				            if (obj.status==200) {
				            	image = obj.msg;
				            } 
				        },  
				        error: function (data) {  
				        }  
				    });
		    		$.ajax({  
				        url:"http://qj_api.qdmedia.cc/index.php/home/club/publishRecall",
				        type: 'POST',  
				        data:{
				        	"club_id":id,
				        	"title":title,
				        	"image":image,
				        	"date":date,
				        	"content":content,
				        },
				        success: function (data) {  
				        	var obj = eval(data);
				        	console.dir(obj);
				            if (obj.status==200) {
				            	window.location.href="page_club.html?club_id="+id;
				            }else if (obj.status==199) {
				            	window.location.href = "http://qj_wa.qdmedia.cc/LiZi/login/";
				            }else{
				            	alert("无发布权限！");
				            }
				        },  
				        error: function (data) {  
				             alert("发布失败，请重试！");
				        }  
				    });
				}
			}else{
				alert("内容不能为空！");
			}
//			alert(document.getElementById("demo1").value);
			
			
			
},false)

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

