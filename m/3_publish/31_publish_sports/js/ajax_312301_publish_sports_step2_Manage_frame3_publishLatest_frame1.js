$(document).ready(function(){
	
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
 	  					document.getElementById("content").value=obj.content;
 	  					for(var i=0;i<obj.images.length&&i<9;i++){
 	  						document.getElementById("preview"+i).style.display="inline-block";
							document.getElementById("preview"+i).style.width="100%";
							document.getElementById("preview"+i).style.height="100%";
							document.getElementById("preview"+i).src=images.path[i];			
 	  					}
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});
	
})
