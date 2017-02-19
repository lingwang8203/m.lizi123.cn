
window.onload=function(){
//	alert("js");
//	var school_name=new Array;
//	school_name=document.getElementsByName("school_name");
//	alert(school_name.length);
//	for(var i=0;i<school_name.length;i++){
//		school_name[i].addEventListener("touchstart",function(e){
//			e.preventDefault();
//			for(var j=0;j<school_name.length;j++)
//				school_name[j].className="";
//			this.className="checked";
//			document.getElementById("campus").innerHTML=this.innerHTML;
//			document.getElementById("campus").id=this.id;
//		},false);
//	}
	
	document.getElementById("confirm").addEventListener("touchstart",function(e){
		e.preventDefault();
		/////////////选择完成 上传城市 学校
		//alert("1111");
//		var campus = document.getElementById("campus");
		var choosedCampus=campus.id;
		//alert("1111");
		//alert(choosedCampus);
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/index/setSchool",
			xhrFields:{
           		withCredentials: true
       		},
			data:{
				"client_type":0,
				"school_id":choosedCampus
			},
			success:function(data){
				var obj = eval(data);
				if (obj.status==200) {
					window.open("http://m.lizi123.cn");
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
			},
			error:function(data){
			//	alert("失败！");
			},
		});
		
	},false);
	
}
//	var startX = 0, startY = 0;
//	$('#near_school').on("touchstart", function(e) {
//		alert("11111");
//	    e.preventDefault();
//	    startX = e.originalEvent.changedTouches[0].pageX,
//	    startY = e.originalEvent.changedTouches[0].pageY;
//	},false);
//	
//	
//	
//	$("#near_school").on("touchmove", function(e) {
//  e.preventDefault();
//  moveEndX = e.originalEvent.changedTouches[0].pageX,
//  moveEndY = e.originalEvent.changedTouches[0].pageY,
//  X = moveEndX - startX,
//  Y = moveEndY - startY;
//   
//  if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
//      alert("left 2 right");
//  }
//  else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
//      alert("right 2 left");
//  }
//  if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
//      alert("top 2 bottom");
//		alert(Y);
//  }
//  else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
//      alert("bottom 2 top");
//		alert(Y);
//  }
//  else{
//      alert("just touch");
//  }
//},false);





