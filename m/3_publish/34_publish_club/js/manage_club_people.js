var limit = new Array;//选中权限数组
var deleteGroupId = new Array;
var moveGroupId = new Array;//alert("lalal1q");
//var dataFromNet;//从服务器获取的数据
window.onload=function(){
	/////////////////分组缩放
	
	var open;
	var fenzu_label=document.getElementsByClassName("fenzu_icon");
	var people=document.getElementsByClassName("people");
	//alert(fenzu_label.length);
	for(var i=0;i<fenzu_label.length;i++){
		fenzu_label[i].index=0;
		fenzu_label[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/sanjiao1.png";
				this.parentNode.nextElementSibling.style.display="block";
				//alert("1q1q2w2w");
				this.index=1;
			}
			else{
				this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/sanjiao2.png";
				this.parentNode.nextElementSibling.style.display="none";
				this.index=0;
			}
		},false)
	}
	
	
	///////////////////////////////批量选择展开
	//alert(lalal);
	var piliang=document.getElementById("piliang");
	piliang.index=0;
	var touxiang=document.getElementsByClassName("people_touxiang");
	var choose=document.getElementsByClassName("choose");
	piliang.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			for(var i=0;i<touxiang.length;i++){
				touxiang[i].style.display="none";
				recover();
				choose[i].style.display="inline-block";
			}
			this.index=1;
			}
		else{
			for(var i=0;i<touxiang.length;i++){
				touxiang[i].style.display="inline-block";
				choose[i].style.display="none";
				this.index=0;
			}
		}
	},false);
	
	for(var j=0;j<choose.length;j++){
		choose[j].index=0;
		choose[j].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose2.png";
				this.index=1;
			}
			else{
				this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose1.png";
				this.index=0;
			}
		},false);
	}
	
	////////////////////////////////////////单人操作
	function recover(){
		for(var i=0;i<people.length;i++){
			people[i].style.backgroundColor="white";
			people[i].index=0;
			open=0;
		}
	}
	for(i=0;i<people.length;i++){
		people[i].index=0;
		people[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(piliang.index==0){
				if(this.index==0){
					recover();
					this.style.backgroundColor="whitesmoke";
					this.index=1;
					open=1;
				}
				else{
					this.style.backgroundColor="white";
					this.index=0;
					open=0;
				}
			}
		},false);
	}
//	for(var i=0;i<people.length;i++){
//				people[i].index=0;
//				people[i].addEventListener("touchstart",function(e){
//					e.preventDefault();
//					if(this.index==0){
//						this.children[1].src="img/choose2.png";
//						this.index=1;
//					}
//					else{
//						this.children[1].src="img/choose1.png";
//						this.index=0;
//					}
//				},false);
//			}
	
	///////////////////////////权限图片选择
	var yellow=document.getElementById("yellow");
	var cyellow=document.getElementById("cyellow");
	var blue=document.getElementById("blue");
	var tblue=document.getElementById("tblue");
	var red=document.getElementById("red");
	yellow.index=0;
	cyellow.index=0;
	blue.index=0;
	tblue.index=0;
	red.index=0;
	yellow.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/yellow1.png";
			this.index=1;
			cyellow.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/cyellow.png";
			blue.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/blue.png";
			tblue.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/tblue.png";
			red.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/red.png";
			cyellow.index=0;
			blue.index=0;
			tblue.index=0;
			red.index=0;
		}
		else{
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/yellow.png";
			this.index=0;
		}
	},false);
	cyellow.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/cyellow1.png";
			this.index=1;
			yellow.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/yellow.png";
			blue.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/blue.png";
			tblue.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/tblue.png";
			red.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/red.png";
			yellow.index=0;
			blue.index=0;
			tblue.index=0;
			red.index=0;
		}
		else{
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/cyellow.png";
			this.index=0;
		}
	},false);
	blue.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/blue1.png";
			this.index=1;
			yellow.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/yellow.png";
			cyellow.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/cyellow.png";
			tblue.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/tblue.png";
			red.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/red.png";
			cyellow.index=0;
			yellow.index=0;
			tblue.index=0;
			red.index=0;
		}
		else{
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/blue.png";
			this.index=0;
		}
	},false);
	tblue.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/tblue1.png";
			this.index=1;
			yellow.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/yellow.png";
			cyellow.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/cyellow.png";
			blue.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/blue.png";
			red.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/red.png";
			cyellow.index=0;
			yellow.index=0;
			blue.index=0;
			red.index=0;
		}
		else{
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/tblue.png";
			this.index=0;
		}
	},false);
	red.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/red1.png";
			this.index=1;
			yellow.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/yellow.png";
			cyellow.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/cyellow.png";
			blue.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/blue.png";
			tblue.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/tblue.png";
			cyellow.index=0;
			yellow.index=0;
			blue.index=0;
			tblue.index=0;
		}
		else{
			this.src="img/red.png";
			this.index=0;
		}
	},false);
	
	
	//////////////////////////////////////权限选择
	var quanxian_choose=document.getElementsByClassName("quanxian_choose");
	for(var i=0;i<quanxian_choose.length;i++){
		quanxian_choose[i].index=0;
		quanxian_choose[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose2.png";
				this.index=1;
				limit.push(this.id);
			}
			else{
				this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose1.png";
				this.index=0;
				limit.splice($.inArray(this.id,limit),1);
			}
		},false);
	}
	
	/////////////////////编辑头衔
	var  touxian=document.getElementById("touxian");
	var edit_touxian=document.getElementById("edit_touxian");
	var back=document.getElementById("back");
	var touxian_cancel=document.getElementById("touxian_cancel");
	var touxian_confirm=document.getElementById("touxian_confirm");
	touxian.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(piliang.index==1||open==1){
			back.style.display="block";
			edit_touxian.style.display="block";
		}
	},false);
	
	touxian_cancel.addEventListener("touchstart",function(e){
		e.preventDefault();
			back.style.display="none";
			edit_touxian.style.display="none";
	},false);
	touxian_confirm.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(document.getElementById("newtouxian").value.length<1){
			return alert("输入字数不足");
		}
		if(piliang.index==1){
			for(var j=0;j<choose.length;j++){
				if(choose[j].index==1){
					choose[j].nextElementSibling.innerHTML=document.getElementById("newtouxian").value;
					editUserTitle(choose[j].name,choose[j].id,document.getElementById("newtouxian").value);
				}
			}
		}
		else{
			for(var j=0;j<people.length;j++){
				if(people[j].index==1){
					people[j].children[2].innerHTML=document.getElementById("newtouxian").value;
					editUserTitle(people[j].children[1].name,people[j].children[1].id,document.getElementById("newtouxian").value);
				}
			}
		}
		edit_touxian.style.display="none";
		back.style.display="none";
	},false);
	
	/////////////////////////////编辑颜色与权限
	var edit_quanxian=document.getElementById("edit_quanxian");
	var quanxian=document.getElementById("quanxian");
	var quanxian_cancel=document.getElementById("quanxian_cancel");
	var quanxian_confirm=document.getElementById("quanxian_confirm");
	var quanxian_img=document.getElementsByClassName("edit_quanxian_img")[0].children;
	var people_name=document.getElementsByClassName("people_name");
	people_name.quanxian=new Array;
	var quanxian_choose=document.getElementsByClassName("quanxian_choose");
	quanxian.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(piliang.index==1||open==1){
			back.style.display="block";
			edit_quanxian.style.display="block";
		}
	},false);
	
	quanxian_cancel.addEventListener("touchstart",function(e){
		e.preventDefault();
			back.style.display="none";
			edit_quanxian.style.display="none";
	},false);
	
	quanxian_confirm.addEventListener("touchstart",function(e){
		e.preventDefault();
		var newcolor;
		var quanxian=new Array;
		for(var i=0;i<quanxian_img.length;i++){
			if(quanxian_img[i].index==1){
				switch(i){
					case 0:newcolor="yellow";break;
					case 1:newcolor="cyellow";break;
					case 2:newcolor="blue";break;
					case 3:newcolor="tblue";break;
					case 4:newcolor="red";break;
				};
				if(piliang.index==1){
					for(var j=0;j<choose.length;j++){
						if(choose[j].index==1){
							choose[j].nextElementSibling.className="people_touxian "+newcolor;
							editUserLimit(choose[j].name,choose[j].id,newcolor);
						}
					}
				}
				else{
					for(var j=0;j<people.length;j++){
						if(people[j].index==1){
							people[j].children[2].className="people_touxian "+newcolor;
							editUserLimit(people[j].children[1].name,people[j].children[1].id,newcolor);
						}
					}
				}
			}
		}
		for(var j=0;j<quanxian_choose.length;j++){
					if(quanxian_choose[j].index==1){
						quanxian.push(j);
					}
			}
		if(piliang.index==1){
			for(var j=0;j<choose.length;j++){
						if(choose[j].index==1){
							people_name[j].quanxian=quanxian;//////////////////////////////用户权限代码存在people_name[i].quanxian
						}
					}
		}
		else{
			for(var j=0;j<people.length;j++){
						if(people[j].index==1){
							people[j].children[3].quanxian=quanxian;
						}
					}
		}
		edit_quanxian.style.display="none";
		back.style.display="none";
	},false);
	
	
	
	//////////////////////////////踢人
	var delete_people=document.getElementById("delete_people");
	var _delete=document.getElementById("delete");
	var delete_confirm=document.getElementById("delete_confirm");
	var delete_cancel=document.getElementById("delete_cancel");
	var people_list=document.getElementsByClassName("people_list");
	_delete.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(piliang.index==1||open==1){
			back.style.display="block";
			delete_people.style.display="block";
		}
	},false);
	
	delete_cancel.addEventListener("touchstart",function(e){
		e.preventDefault();
		e.preventDefault();
			back.style.display="none";
			delete_people.style.display="none";
	},false);
	
	delete_confirm.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(piliang.index==1){
			for(var j=choose.length-1;j>=0;j--){
						if(choose[j].index==1){
							var nnode=choose[j].parentNode;
							var parent=nnode.parentNode;
							deleteMember(choose[j].name,choose[j].id);
							if(parent){
								parent.removeChild(nnode);
							}
						}
					}
		}
		else{
			for(var j=people.length-1;j>=0;j--){
				if(people[j].index==1){
					deleteMember(people[j].children[1].name,people[j].children[1].id);
					people[j].parentNode.removeChild(people[j]);
				}
			}
		}
		open=0;
		delete_people.style.display="none";
		back.style.display="none";
	},false);
	
	////////////////////////////////移动成员  添加分组 删除分组
	var yidong=document.getElementById("yidong");
	var yidongfenzu=document.getElementById("yidongfenzu");
	var fenzu_cancel=document.getElementById("fenzu_cancel");
	var fenzu_confirm=document.getElementById("fenzu_confirm");
	yidong.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(piliang.index==1||open==1){
			back.style.display="block";
			yidongfenzu.style.display="block";
		}
	},false);
	
	var choose_fenzu=document.getElementsByClassName("choose_fenzu");
	var edit_fenzu=document.getElementsByClassName("edit_fenzu");
	var add_fenzu=document.getElementById("add_fenzu");
	var add_fenzu_cancel=document.getElementById("add_fenzu_cancel");
	var add_fenzu_confirm=document.getElementById("add_fenzu_confirm");
	var fenzu_list=document.getElementById("fenzu_list");
	var pageclub_people=document.getElementById("pageclub_people");
	function fuyuan(){
		for(var i=0;i<choose_fenzu.length;i++){
			choose_fenzu[i].src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose1.png";
			choose_fenzu[i].index=0;
		}
	}
	
	///////////////////////////////////选择分组
	for(var i=0;i<choose_fenzu.length;i++){
		choose_fenzu[i].index=0;
		choose_fenzu[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				fuyuan();
				this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose2.png";
				this.index=1;
				moveGroupId.push(this.id);
			}
			else{
				this.src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose1.png";
				this.index=0;
				moveGroupId.splice($.inArray(this.id,moveGroupId),1);
			}
		},false);
	}
	//////////////////////////删除分组
	for(var i=0;i<edit_fenzu.length;i++){
		edit_fenzu[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			deleteGroupId.push(this.id);
			this.parentNode.parentNode.removeChild(this.parentNode);
		},false);
	}
	var fenzu_index=0;
	/////////////////////////////////添加分组
	add_fenzu.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(fenzu_index==0){
			document.getElementsByClassName("add_fenzu")[0].style.display="block";
			fenzu_index=1;
		}
	},false);
	add_fenzu_cancel.addEventListener("touchstart",function(e){
		e.preventDefault();
		//groupInfoShow(dataFromNet);
		//alert(0);
		document.getElementsByClassName("add_fenzu")[0].style.display="none";
		fenzu_index=0;
	},false);
	add_fenzu_confirm.addEventListener("touchstart",function(e){
		e.preventDefault();
		var newfenzu=document.getElementById("newfenzu").value;
		if(newfenzu.length<1||newfenzu.length>6){
			return alert("字数超限");
		}
		addGroup(newfenzu);
		var div=document.createElement("div");
		div.className="fenzu";
//		var html="<div class='fenzu'>";
		var html="<img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose1.png' class='choose_fenzu'/>";
		html+="<span class='fenzu_nm'>"+newfenzu+"</span>";
		html+="<img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/cut.png' class='edit_fenzu'>";
//		html+="</div>";
		div.innerHTML=html;
		fenzu_list.appendChild(div);
		var hhtm="<div class='list'><div class='list_header'><img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/sanjiao2.png' class='fenzu_icon'/><span class='fenzu_name'>"+newfenzu+"</span></div><div class='people_list'></div></div>";
		$("#pageclub_people").append(hhtm);
		document.getElementsByClassName("add_fenzu")[0].style.display="none";
		fenzu_index=0;
	},false);
	
	fenzu_cancel.addEventListener("touchstart",function(e){
		e.preventDefault();
			//alert(0);
			//groupInfoShow(dataFromNet);
			back.style.display="none";
			yidongfenzu.style.display="none";
	},false)
	
	fenzu_confirm.addEventListener("touchstart",function(e){
		e.preventDefault();
		deleteGroup(deleteGroupId);
		var xinfenzu_num=0;
		for(var i=0;i<choose_fenzu.length;i++){
			if(choose_fenzu[i].index==1){
				xinfenzu_num=i;
			}
		}//////////////下面要改填充
		if(piliang.index==1){
			for(var i=choose.length-1;i>=0;i--){
				if(choose[i].index==1){
					moveGroup(choose[i].name,choose[i].id,moveGroupId);
					var touxian=choose[i].nextElementSibling.innerHTML;
					var classname=choose[i].nextElementSibling.className;
					var name=choose[i].nextElementSibling.nextElementSibling.innerHTML;
					var txt="<div class='people'><img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/touxiang.png' class='people_touxiang'/><img src='img/choose1.png' class='choose' style='display: none;'/><span class='"+classname+"'>"+touxian+"</span><span class='people_name'>"+name+"</span></div>";
					$(".people_list").eq(xinfenzu_num).append(txt);
					people[i].parentNode.removeChild(people[i]);

					
				}
			}
			//window.location.reload();
		}
		else{
			for(var i=people.length-1;i>=0;i--){
				if(people[i].index==1){
					moveGroup(people[i].children[1].name,people[i].children[1].id,moveGroupId);
					var p_touxiang=people[i].children[0].src;
					var touxian=people[i].children[2].innerHTML;
					var classname=people[i].children[2].className;
					var name=people[i].children[3].innerHTML;
					var txt="<div class='people'><img src='"+p_touxiang+"' class='people_touxiang'/><img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose1.png' class='choose' style='display: none;'/><span class='"+classname+"'>"+touxian+"</span><span class='people_name'>"+name+"</span></div>";
					$(".people_list").eq(xinfenzu_num).append(txt);
					people[i].parentNode.removeChild(people[i]);
					
				}
			}
			//window.location.reload();
		}
		for(var i=0;i<touxiang.length;i++){
				touxiang[i].style.display="inline-block";
				choose[i].style.display="none";
				piliang.index=0;
			}
		open=0;
		yidongfenzu.style.display="none";
		back.style.display="none";
	},false);
	////////////////////////////////////////////完成移动后需要刷新一下页面
	
	//////////////////////////////换届
	var huanjie=document.getElementsByClassName("huanjie");
	var huanjie_div=document.getElementById("huanjie_div");
	var huanjie_cancel=document.getElementById("huanjie_cancel");
	var huanjie_confirm=document.getElementById("huanjie_confirm");
	for(var i=0;i<huanjie.length;i++){
		huanjie[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			huanjie_div.style.display="block";
		},false);
	}
	
	huanjie_cancel.addEventListener("touchstart",function(e){
		e.preventDefault();
		huanjie_div.style.display="none";
	},false);
	
	
	
	
}

//获取url参数中的club_id
var club_id = getQueryString("club_id");
document.getElementById("return").href="343_publish_club_Manage.html?club_id="+club_id;
//alert(club_id);

obtainGroupInfo(club_id);
//================================查看申请信息==================================
document.getElementById("message_state").addEventListener("touchstart",function(e){
		e.preventDefault();
		//alert(0);
		window.location.href = "manage_club_shenqing.html?club_id="+club_id;
},false);
//================================获取分组信息==================================
function obtainGroupInfo(club_id){
	if (club_id) {
		$.ajax({
		    type:"post",
		    url:"http://api.lizi123.cn/index.php/home/club/getGroupInfo",
		    data:{
		    	"club_id":club_id
		    },
		    xhrFields:{
	       		withCredentials: true
	   		},
		    success:function(data){
		        var obj = eval(data);
		        dataFromNet = eval(data);//设置全局变量，避免多次发起服务器请求
		        console.dir(obj);
		        if(obj.status==200){
		        	groupInfoShow(obj);
		        	
		        }else{
		        	alert("error");
		        }
		    },
		    error:function(data){
		        alert("error!");
		    },
		        
		});
	}

	
}

//=================================分组信息显示==================================
function groupInfoShow(obj){
	$("#pageclub_people").text("");
	$("#fenzu_list").text("");
	//alert(0);
	//alert(obj[0].member[0].user.user_name);
	for (var i = 0; i < obj.num; i++) {
		var html = "<div class='list'>";
		html += "<div class='list_header'>";
		html += "<img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/sanjiao2.png' class='fenzu_icon'/>";
		html += "<span class='fenzu_name'>"+obj[i].group_name+"</span>";
		html += "</div>";
		html += "<div class='people_list'>";
		for (var j = 0; j < obj[i].member.num; j++) {
			html += "<div class='people'>";
			html += "<img src='"+obj[i].member[j].user.head_image+"' class='people_touxiang'/>";
			html += "<img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose1.png' name='"+obj[i].id+"'id='"+obj[i].member[j].user_id+"'class='choose' style='display: none;'/>";
			html += "<span class='people_touxian "+obj[i].member[j].color+"'>"+obj[i].member[j].user_title+"</span>";
			html += "<span class='people_name'>"+obj[i].member[j].user.user_name+"</span>";
			html += "<span class='huanjie'>进行换届</span>";
			html += "</div>";
		}
		html += "</div>";
		$("#pageclub_people").append(html);
		//分组管理中分组显示
		var fenzu_list = "<div class='fenzu'>";
		fenzu_list += "<img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/choose1.png' id='"+obj[i].id+"' class='choose_fenzu'/>";
		fenzu_list += "<span class='fenzu_nm'>"+obj[i].group_name+"</span>";
		fenzu_list += "<img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/cut.png' id='"+obj[i].id+"'class='edit_fenzu'>";
		fenzu_list += "</div>";
		$("#fenzu_list").append(fenzu_list);
	}

}
//==================================编辑头衔=====================================
function editUserTitle(group,id,title){
	if (id) {
		//
		alert(group+" "+id+" "+club_id);
		$.ajax({
		    type:"post",
		    url:"http://api.lizi123.cn/index.php/home/club/editUserTitle",
		    data:{
		    	"group":group,
		        "id":id,
		        "title":title,
		        "club_id":club_id
		    },
		    xhrFields:{
	       		withCredentials: true
	   		},
		    success:function(data){
		        var obj = eval(data);
		        console.dir(obj);
		        
		        //alert(id+club_id+title);
		        if(obj.status!=200){
	        	alert("编辑失败or权限不够!");
	        	alert(obj.info);
	        	}
		    },
		    error:function(data){
		        alert("error!");
		    },
		        
		});
	}

}

//================================编辑颜色与权限=================================
function editUserLimit(group,id,color){
	$.param(limit);
	//alert("limit"+limit);
	$.ajax({
	    type:"post",
	    url:"http://api.lizi123.cn/index.php/home/club/editUserLimit",
	    data:{
	    	"group":group,
	        "id":id,
	        "limit":limit,
	        "color":color,
	        "club_id":club_id
	    },
	    xhrFields:{
       		withCredentials: true
   		},
	    success:function(data){
	        var obj = eval(data);
	        console.dir(obj);
	        //alert("color:"+obj.color);
	        if(obj.status!=200){
	        	alert("编辑失败or权限不够!");
	        	
	        }
	    },
	    error:function(data){
	        alert("error!");
	    },
	        
	});
	//alert(limit+" "+group+" "+id+" "+color+" "+club_id);

}
//================================删除社团成员===================================
function deleteMember(group,id){
	//alert(group);
	//alert(id);
	$.ajax({
	    type:"post",
	    url:"http://api.lizi123.cn/index.php/home/club/deleteMember",
	    data:{
	    	"group":group,
	        "id":id,
	        "club_id":club_id
	    },
	    xhrFields:{
       		withCredentials: true
   		},
	    success:function(data){
	        var obj = eval(data);
	        console.dir(obj);
	        //alert(obj.status);
	        if(obj.status!=200){
	        	alert("删除成员失败or权限不够!");
	        }
	    },
	    error:function(data){
	        alert("error!");
	    },
	        
	});

}
//==================================删除分组=================================

function deleteGroup(deleteGroupId){
	//alert(deleteGroupId);
	console.dir(deleteGroupId);
	if(deleteGroupId.length>0){
		$.param(deleteGroupId);
		$.ajax({
		    type:"post",
		    url:"http://api.lizi123.cn/index.php/home/club/deleteGroup",
		    data:{
		    	"groupId":deleteGroupId,
		    	"club_id":club_id
		    },
		    xhrFields:{
	       		withCredentials: true
	   		},
		    success:function(data){
		        var obj = eval(data);
		        console.dir(obj);
		        //alert(obj.status+"  "+obj.info);
		        if(obj.status!=200){
		        	alert("删除分组失败or权限不够!");
		        }
		    },
		    error:function(data){
		        alert("error!");
		    },
		        
		});
	}
	

}

//=================================添加分组======================================

function addGroup(newfenzu){
	//alert(newfenzu);
	$.ajax({
	    type:"post",
	    url:"http://api.lizi123.cn/index.php/home/club/addGroup",
	    data:{
	    	"newfenzu":newfenzu,
	    	"club_id":club_id,
	    },
	    xhrFields:{
       		withCredentials: true
   		},
	    success:function(data){
	        var obj = eval(data);
	        console.dir(obj);
	        if(obj.status!=200){
	        	alert("添加分组失败or权限不够!");
	        }
	    },
	    error:function(data){
	        alert("error!");
	    },
	        
	});

}
//=================================移动分组======================================
function moveGroup(groupId,id,moveGroupId){
	//console.dir(groupId);
	//console.dir(id);
	//console.dir(moveGroupId[0]);
	newGroup = moveGroupId[0];
	//alert(groupId+id+moveGroupId);
	$.ajax({
	    type:"post",
	    url:"http://api.lizi123.cn/index.php/home/club/moveGroup",
	    data:{
	    	"groupId":groupId,
	    	"user_id":id,
	    	"moveGroupId":newGroup,
	    	"club_id":club_id,
	    },
	    xhrFields:{
       		withCredentials: true
   		},
	    success:function(data){
	        var obj = eval(data);
	        //console.dir(obj);

	        if(obj.status!=200){
	        	alert("添加分组失败or权限不够!");
	        }
	    },
	    error:function(data){
	    	
	        alert("error!");
	    },
	});
}
//=================================获取url参数===================================
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
};
