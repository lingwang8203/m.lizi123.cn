window.onload=function(){
	
	var label=document.getElementsByName("function_class_label");
	for(var i=0;i<label.length;i++){
		label[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.className=="aui-label che_message aui-font-size-14  aui-col-xs-12"){
				this.className="aui-label che_message aui-font-size-14  aui-col-xs-12 aui-bg-base aui-text-white";
			}else{
				this.className="aui-label che_message aui-font-size-14  aui-col-xs-12";
			}
		},false)
		
		
	}
	
	document.getElementById("back").addEventListener("touchstart",function(e){
		e.preventDefault();
		var require=new Array;
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
