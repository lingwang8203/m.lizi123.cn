$(document).ready(function(){
	
	
	$.ajax({
					type:"post",
					url:"",
					xhrFields:{
	               		withCredentials: true
	           		},
					data:{
//						"sports_id":sports_id,
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
	
})

window.onload=function(){
	
	
	
	document.getElementById("back").addEventListener("touchstart",function(e){
		e.preventDefault();
		var require=new Array;
		var label=document.getElementsByName("function_class_label");
		for(var i=0;i<label.length;i++){
			if(label[i].className=="aui-label che_message aui-font-size-14  aui-col-xs-12 aui-bg-base aui-text-white"){
				require.push(label[i].id);
			}
		}
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
 	  					window.open("3121_publish_sports_step2_Manage_frame1.html");
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});
	},false)
	
}
function check(num){
//		e.preventDefault();
		if(document.getElementsByName("function_class_label")[num].className=="aui-label che_message aui-font-size-14  aui-col-xs-12 aui-bg-base aui-text-white"){
			document.getElementsByName("function_class_label")[num].className="aui-label che_message aui-font-size-14  aui-col-xs-12";
		}else{
			document.getElementsByName("function_class_label")[num].className="aui-label che_message aui-font-size-14  aui-col-xs-12 aui-bg-base aui-text-white"
	}
}