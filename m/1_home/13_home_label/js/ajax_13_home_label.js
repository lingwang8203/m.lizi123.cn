$(document).ready(function(){
 //id=getQueryString('tag_id');
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
 	  					document.getElementById("area_name").innerHTML=obj.name+"区";
 	  					for(var i=0;i<6&&i<obj.peple.length;i++){
 	  						var html='<div class="aui-col-xs-2"style="width: auto;">';
 	  						html+='<a href="../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id='+obj.peple[i].user_id+'" target="_blank"><img src="'+obj.peple[i].headImg+'" class="aui-img-round photo"/></a>';
 	  						html+='</div>';
 	  						$("#superman_list").append(html);
 	  					}
 	  					if(obj.peple.length>=6){
 	  						var html='<div class="aui-col-xs-2"style="width: auto;">';
 	  						html+='<a href="13_home_label_more_people.html?area_id='+obj.area_id+'" target="_blank"><img src="http://img.lizi123.cn/new_lizi/1_home/more.png" style="width:0.6rem;height:0.8rem;margin: 0.3rem;margin-right: 0;margin-top: 0.8rem;" /></a>';
 	  						html+='</div>';
 	  						$("#superman_list").append(html);
 	  					}
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
//					alert("失败！");
				},
			});
	
})

function changeIframeSrc(){
		if(document.getElementById("select-native-2").value=="1"){
				document.getElementById("ifram").src="13_home_label_iframe1.html";
		}
		else if(document.getElementById("select-native-2").value=="2"){
				document.getElementById("ifram").src="13_home_label_iframe2.html?tag_id="+id;
		}
		else if(document.getElementById("select-native-2").value=="3"){
				document.getElementById("ifram").src="13_home_label_iframe3.html";
		}
		else if(document.getElementById("select-native-2").value=="4"){
				document.getElementById("ifram").src="13_home_label_iframe4.html";
		}
		else if(document.getElementById("select-native-2").value=="5"){
				document.getElementById("ifram").src="13_home_label_iframe5.html";
		}
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
}; 