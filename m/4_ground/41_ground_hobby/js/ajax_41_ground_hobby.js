
var chooseFromLabelValue=new Array;
var chooseFromSexValue=new Array;
var chooseFromRequestValue=new Array;
$(document).ready(function(){
	p = 1;
	findFriends(p);
	
	
})

window.onload=function(){

	
	var url_index="gro";
	document.getElementById("return").addEventListener("touchstart",function(e){
		e.preventDefault();
		var myurl="http://m.lizi123.cn"+"?"+"url_index="+url_index;
		window.location.assign(myurl);
	},false);
	
	document.getElementById("filter").addEventListener("touchstart",function(e){
		e.preventDefault();
		document.getElementById("pop").style.display="block";
	},false)
	
	
	var chooseFromLabel=document.getElementsByName("chooseFromLabel");
	for(var i=0;i<chooseFromLabel.length;i++){
		chooseFromLabel[i].index=i;
		chooseFromLabel[i].addEventListener("touchstart",function(e){
			// alert('上');
			e.preventDefault();
			if(this.className=="aui-grid-label aui-font-size-16"){
				this.className="aui-grid-label aui-font-size-16 aui-text-base";
			}else{
				this.className="aui-grid-label aui-font-size-16";
			}
		},false)
	}
	
	
	var chooseFromSex=document.getElementsByName("chooseFromSex");
	for(var j=0;j<chooseFromSex.length;j++){
		
		chooseFromSex[j].index=j;
		chooseFromSex[j].addEventListener("touchstart",function(e){
			// alert('中');
			e.preventDefault();
			if(this.className=="aui-grid-label aui-font-size-16"){
				for(var k=0;k<chooseFromSex.length;k++){
					chooseFromSex[k].className="aui-grid-label aui-font-size-16";
				}
				this.className="aui-grid-label aui-font-size-16 aui-text-base";
			}else{
				this.className="aui-grid-label aui-font-size-16";
			}
		},false)
	}
	

	var chooseFromRequest=document.getElementsByName("chooseFromRequest");
	for(var m=0;m<chooseFromRequest.length;m++){
		
		chooseFromRequest[m].index=m;
		chooseFromRequest[m].addEventListener("touchstart",function(e){
			// alert('下');
			e.preventDefault();
			if(this.className=="aui-grid-label aui-font-size-16"){
				this.className="aui-grid-label aui-font-size-16 aui-text-base";
			}else{
				this.className="aui-grid-label aui-font-size-16";
			}
		},false)
	}
	
	//点击确认后的
	document.getElementById("confirm").addEventListener("touchstart",function(e){
		e.preventDefault();
		for(var i=0;i<chooseFromLabel.length;i++){

			if(chooseFromLabel[i].className=="aui-grid-label aui-font-size-16 aui-text-base"){
				chooseFromLabelValue.push(chooseFromLabel[i].id);
			}
		}
		
		for(var j=0;j<chooseFromSex.length;j++){
			if(chooseFromSex[j].className=="aui-grid-label aui-font-size-16 aui-text-base"){
				chooseFromSexValue.push(chooseFromSex[j].id);
			}
		}
		
		for(var k=0;k<chooseFromRequest.length;k++){
			if(chooseFromRequest[k].className=="aui-grid-label aui-font-size-16 aui-text-base"){
				chooseFromRequestValue.push(chooseFromRequest[k].id);
			}
		}
		
		

		
		/*$.ajax({
				type:"post",
				url:"",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
//					"chooseFromLabelValue":chooseFromLabelValue,
//					"chooseFromSexValue":chooseFromSexValue,
//					"chooseFromRequestValue":chooseFromRequestValue
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
			});*/
			p++;
		// alert(p);
		findFriends(p);
		chooseFromLabelValue.splice(0,chooseFromLabelValue.length);
		chooseFromSexValue.splice(0,chooseFromSexValue.length);
		chooseFromRequestValue.splice(0,chooseFromRequestValue.length);

		document.getElementById("pop").style.display="none";
	},false)
	
	document.getElementById("cancel").addEventListener("touchstart",function(e){
		e.preventDefault();
		document.getElementById("pop").style.display="none";
	},false)
	
}


function findFriends(p){
	// alert(chooseFromLabelValue);
	// alert(chooseFromSexValue);
	// alert(chooseFromRequestValue);
	// alert('demo');
	/////加载用户列表
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/ground/findFriendsIndex",
		xhrFields:{
			withCredentials: true
		},
		data:{
			"client_type":0,
			"chooseFromLabelValue":chooseFromLabelValue,
			"chooseFromSexValue":chooseFromSexValue,
			"chooseFromRequestValue":chooseFromRequestValue,
			"p":p
		},
		success:function(data){
			// alert('success');
			var obj = eval(data);
			console.dir(obj);
			if(obj.length==0)
				alert('暂无同好信息哦~');
			$("#hobby_list").text("");
			if (obj.status==200) {
				for(var i=0;i<obj.length;i++){
					var html="<li class='aui-row'style='border-bottom: 0.5rem solid #ebebeb;'>";
					html+="<div class='aui-col-xs-12 aui-row  aui-padded-t-5 aui-padded-b-5'>";
					html+="<div class='aui-col-xs-2 aui-text-center' style='margin-top: 0.1rem;'>";
					html+="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].id+"'target='_blank'><img src='"+obj[i].head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a></div>";
					html+="<div class='aui-row aui-col-xs-10'>";
					html+="<div class='aui-col-xs-12 aui-row aui-padded-b-5' style='height:1.5rem;'>";
					html+="<div class='aui-col-xs-8 aui-row  aui-padded-t-5'>";
					html+="<div class='aui-font-size-16'style='float: left;'>"+obj[i].user_name+"</div>";
					if(obj.sex==0){////0表示男生 1表示女生
						html+="<img src='http://img.lizi123.cn/new_lizi/4_ground/41_ground_hobby/man.png' class='man'style='float: left;margin-left: 0.2rem;margin-top: 0.3rem;'/>";
					}else{
						html+="<img src='http://img.lizi123.cn/new_lizi/4_ground/41_ground_hobby/woman.png' class='woman'style='float: left;margin-left: 0.2rem;margin-top: 0.3rem;'/>";
					}
					//联系教师
					if (obj.online_user_id==0) {
						var href = "http://m.lizi123.cn/7_login/7_login.html";
					}else{
						var href = "http://m.lizi123.cn/6_chat/siliao.php?id="+obj[i].id+"&id2="+obj.online_user_id+"";
					}

					html+="<a href='"+href+"'><div class='aui-label lab aui-font-size-12 aui-label-outlined aui-margin-r-5'style='width: auto;border-radius: 0.4em;color: #ffb409;float: left;margin-left: 0.2rem;margin-top: 0.1rem;'>聊天</div></a></div>";
					html+="<div class=' aui-col-xs-4 aui-padded-r-5 aui-padded-t-5'style='color: #b3b3b3;'>";
					//html+="<div class='aui-font-size-12  aui-pull-right' id='placeName'>"+obj.school+"</div>";
					html+="<i class='aui-iconfont aui-icon-location  aui-pull-right'></i></div></div>";
					html+="<div class='aui-hr'></div>";
					html+="<div class='aui-col-xs-12 aui-font-size-12'style='color:#b3b3b3;'>ta参与的活动 · 社团 · 课程</div>";
					html+="<div class='tap_out other aui-padded-b-5'>";
					var join_num=0;
					for(var j=0;join_num<4&&j<obj[i].Class.length;j++){
						html+="<a href='../../2_function/21_function_class/212_function_class_concret.html?class_id="+obj[i].Class[j].id+"'>";
						html+="<div class='aui-label aui-font-size-12 tap class_tap aui-padded-b-5 aui-padded-t-5'style='width: auto;'>";
						html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/4_ground/41_ground_hobby/class.png' class='class_ic'/>"+obj[i].Class[j].name+"</div></a>";
						join_num++;
					}
					for(var k=0;join_num<4&&k<obj[i].Activity.length;k++){
						html+="<a href='../../2_function/23_function_sports/232_function_sports_concret.html?sports_id="+obj[i].Activity[k].id+"'>";
						html+="<div class='aui-label aui-font-size-12 tap sport_tap aui-padded-b-5 aui-padded-t-5'style='width: auto;'>";
						html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/4_ground/41_ground_hobby/sports.png'class='sports_ic'/>"+obj[i].Activity[k].name+"</div></a>";
						join_num++;
					}
					for(var m=0;join_num<4&&m<obj[i].Club.length;m++){
						html+="<a href='./../2_function/22_function_club/222_function_club_concret.html?club_id="+obj[i].Club[m].id+"'>";
						html+="<div class='aui-label aui-font-size-12 tap club_tap aui-padded-b-5 aui-padded-t-5'style='width: auto;'>";
						html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/4_ground/41_ground_hobby/club.png' class='club_ic'/>"+obj[i].Club[m].name+"</div></a>";
						join_num++;
					}
					html+="</div><div class='aui-hr'></div>";
					html+="<div class='tap_out other'>";
					for(var n=0;n<3&&n<obj[i].tag.length;n++){
						html+="<a href='../../1_home/13_home_label/13_home_label.html?tag_id="+obj[i].tag[n].id+"'><div class='aui-label aui-font-size-12 tap fun_tap'>"+obj[i].tag[n].tag_name+"</div></a>";
					}
					html+="</div></div></div></li>";
					$("#hobby_list").append(html);
				}
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
			//alert("失败！");
		},
	});

}