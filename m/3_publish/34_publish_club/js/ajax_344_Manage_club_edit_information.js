$(document).ready(function(){
	club_id = getQueryString('club_id');
	
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/club/clubInfo",
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
			"club_id":club_id,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			if (obj.status==200) {
				///////////加载已有数据
				document.getElementById("Club_logo").src=obj.image;
				document.getElementById("name").value=obj.name;
				document.getElementById("intro").value=obj.intro;
				document.getElementById("belongTo").value=obj.sign;
				document.getElementById("type").innerHTML=obj.type;
			
				/*/////加载已有图片
				for(var i=0;i<obj.img.length&&i<8;i++){
					document.getElementsByClassName("add_pageclub_photo")[i].style.backgroundImage="none";
					document.getElementById("photo"+(i+1)).src=obj.img[i].imgPath;
				}*/
  					
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
			// alert("失败！");
		},
	});
	
	document.getElementById("return").href="http://m.lizi123.cn/3_publish/34_publish_club/343_publish_club_Manage.html?club_id="+club_id;
	
	
})












window.onload=function(){
	document.getElementById("furnish").addEventListener("touchstart",function(e){
		e.preventDefault();
		//alert(clubphoto.serverId);
		if(document.getElementById("name").value==""||document.getElementById("intro").value==""||document.getElementById("belongTo").value==""){
			alert("信息不允许为空,请填写完整!");
		}else{
			var new_name=document.getElementById("name").value;
			var new_intro=document.getElementById("intro").value;
			var new_logo=images.serverId[0];
			var new_belong=document.getElementById("belongTo").value;
			var new_photo=clubphoto.serverId;
			var data = new Object();
			if(club_id) {
				data.club_id = club_id;
				data.client_type = 0;
			}
			if(new_name) {
				data.club_name = new_name;
			}
			if (new_intro) {
				data.club_intro = new_intro;
			}
			if (new_logo) {
				data.club_logo = new_logo;
			}
			if (new_belong) {
				data.club_sign = new_belong;
			}
			if (new_photo) {
				data.club_image = new_photo[0];
			}
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/club/editClubInfo",
				xhrFields:{
               		withCredentials: true
           		},
				data:data,
				success:function(data){
					var obj = eval(data);
					//alert(data.status);
 	  				if (obj.status==200) {
 	  					window.location.href="http://m.lizi123.cn/3_publish/34_publish_club/343_publish_club_Manage.html?club_id="+club_id;
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					// alert("失败！");
				},
			});
		}
		
	},false)
	
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
}