
window.onload=function(){
 	
//	document.getElementById("add_logo").style.backgroundImage="none";
	var leibie=new Array;
	var choose_leibie=0;
	var leibie_index;
	leibie=document.getElementsByName("leibie");
	for(var i=0;i<leibie.length;i++){
		leibie[i].index=i;
		leibie[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			for(var j=0;j<leibie.length;j++){
				if(j!=i){
					leibie[j].className="unchecked";
				}
				else{
					leibie[j].className="checked";
				}
			}
			leibie_index=this.id;
			this.className="checked";
			choose_leibie=1;
			document.getElementById("label0").innerHTML=this.innerHTML;
		},false);
	}
	document.getElementById("confirm").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(choose_leibie==1){
		document.getElementById("choose_fenlei").style.display="none";
		document.getElementById("back").style.display="none";
		}else{
			alert("必须选择至少一种类型");
		}
	},false);
	
	
	document.getElementById("furnish").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(document.getElementById("edit_clubname").value==""||document.getElementById("preview").style.display=="none"){
			alert("信息未填写完整！");
		}else{
			// alert(leibie_index);
			// alert(images.serverId[0]);
			// alert(document.getElementById("edit_clubname").value);
			var club_name=document.getElementById("edit_clubname").value;
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/club/publishClub",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
					"client_type":0,
					"club_name":club_name,
					"type_id":leibie_index,
					"image":images.serverId[0]
				},
				success:function(data){
					var obj = eval(data);
 	  				if (obj.status==200) {
 	  					window.location.href="http://m.lizi123.cn/3_publish/34_publish_club/342_publish_club_step2_invite.html?club_id="+obj.club_id;
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					// alert("失败！");
				},
			});


		}
	})


}