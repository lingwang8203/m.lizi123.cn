$(document).ready(function(){
	var activity_id = getQueryString('activity_id');
	//alert("3:"+activity_id);
	///////////////进展
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/actProgressList",
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
			"activity_id":activity_id,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			if (obj.status==200) {
 	  			$("#sports_jinzhan_content").text("");
				var html="<li class='aui-margin-l-5' style='position: relative;margin-top: 1.4rem;'>";
				html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_first.png' style='position: absolute;top: -0.5rem;left: 0; width:2rem;height: 2rem;z-index: 99;'/>";
				html+="<div class='aui-row aui-padded-b-15 li_out' style='height: auto;'>";
				html+="<div class='aui-col-xs-12 aui-pull-right aui-padded-r-5 aui-font-size-16 li_in aui-padded-b-15'>敬请期待更多进展更新</div>";
				html+="</div></li>";
				$("#sports_jinzhan_content").append(html);
				for(var i=0;i<obj.length;i++){
					if(obj[i].is_vote==0){//0代表普通进展 1代表投票
						var htm="<li class='aui-margin-l-5' style='position: relative;'>";
						htm+="<img src='"+obj[i].tag_image+"' style='position: absolute;top: 0;left: 0; width:2rem;height: 2rem;z-index: 99;'/>";
						htm+="<div class='aui-row li_out aui-padded-b-10' style='height: auto;'>";
						htm+="<div class='aui-col-xs-12 aui-pull-right aui-padded-r-5 li_in'>";
						htm+="<div class='aui-font-size-16 aui-pull-left aui-padded-b-5'>"+obj[i].title+"</div>";
						htm+="<div class='aui-font-size-12 aui-pull-right' style='color: #9E9E9E;width: auto;'>"+obj[i].time+"</div></div>";
						htm+="<div class='aui-col-xs-12 aui-font-size-12  aui-pull-right aui-padded-r-10 li_in content_color'>"+obj[i].intro+"</div>";
						htm+="<div class='aui-col-xs-12 aui-row aui-padded-t-10'>";
						if (obj[i].image!=0) {
							for(var j=0;j<obj[i].image.length&&j<9;j++){
								htm+="<div class='aui-col-xs-4 aui-text-center'>";
								htm+="<img src='"+obj[i].image[j].album_picture+"' class='gift_photo'/>";
								htm+="</div>";
							}
						}
						
						htm+="</div></div></li>";
						htm += '<li class="aui-margin-b-15 aui-margin-l-5"style="position: relative;">';
						htm += '<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_first.png"style="position: absolute;top: 0;left: 0; width:2rem;height: 2rem;z-index: 99;"/>';
						htm += '<div class="aui-row aui-padded-b-15"style="height: auto;			margin-left: 1rem !important;">';
						htm += '<div class="aui-col-xs-12 aui-pull-right aui-padded-r-5 li_in">';
						htm += '<div class="aui-font-size-16 aui-pull-left aui-padded-t-5 aui-padded-b-5">活动开始</div>';
						htm += '<div class="aui-font-size-12 aui-pull-right"style="color: #9E9E9E;width: auto;"></div>';						
						htm += '</div></div></li>';
						$("#sports_jinzhan_content").append(htm);
					}else if(obj[i].type==1){
						var htm='<li class=" aui-margin-l-5"style="position: relative;">';
						htm+='<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_vote.png"style="position: absolute;top: 0;left: 0; width:2rem;height: 2rem;z-index: 99;"/>';
						htm+='<div class="aui-row li_out aui-padded-b-15"style="height: auto;">';
						htm+='<div class="aui-col-xs-12 aui-pull-right aui-padded-r-5 li_in">';
						htm+='<div class="aui-font-size-16 aui-pull-left aui-padded-b-5">投票</div>';
						htm+='<div class="aui-font-size-12 aui-pull-right"style="color: #9E9E9E;width: auto;">'+obj[i].time+'</div></div>';
						htm+='<div class="aui-col-xs-12 aui-font-size-12  li_in content_color aui-padded-b-5">向你心仪的选手投上一票，有机会参与抽奖，赢得6PLUS~</div>';
						htm+='<ul>';
						for(var j=0;j<obj[i].athlete.length;j++){
							htm+='<li class="aui-padded-b-15">';
							htm+='<div class="aui-col-xs-12   li_in  aui-row">';
							htm+='<div class="aui-col-xs-2">';
							htm+='<a href="../../5_mine/51_mine_homepage/51_mine_homepage.html"  target="_blank"><img src="'+obj[i].athlete[j].headImg+'"class="aui-img-round xuanshou_photo"/></a>';
							htm+='</div><div class="aui-col-xs-10 aui-row">';
							htm+='<div class="aui-col-xs-12 aui-row ">';
							htm+='<div class="aui-font-size-14 aui-col-xs-9 aui-pull-left">'+obj[i].athlete[j].name+'</div>';
							htm+='<div class="aui-col-xs-3 aui-pull-right">';
							htm+='<div class="aui-col-xs-3 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5"style="width: auto;border-radius: 0.4em;"name="vote'+vote_order+'" onclick="vote('+vote_order+','+current_order+','+poll+')">投票</div>';
							htm+='</div></div><div class="aui-font-size-12 aui-col-xs-12 content_color">'+obj[i].athlete[j].intro+'</div><div class="aui-font-size-12 aui-col-xs-12 content_color aui-text-base" style="display: none;" name="voteNum'+vote_order+'">当前票数:'+voteNumber+'票</div>';
							htm+='</div></div></li>';
						}
						htm+='</ul></div></li>';
						$("#sports_jinzhan_content").append(htm);
					}
				}
				html="";
				html+="<div style='width: 100%;height: 2rem;'></div>";
				html+="<li><div class='aui-text-center aui-padded-t-10 aui-padded-b-10 aui-font-size-14' style='width: 100%; background: #ffc040;color: white;position: fixed;right:0;bottom:0;'>去花絮，发布你想说的话</div></li>";
				$("#sports_jinzhan_content").append(html);
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}else{
				$("#sports_jinzhan_content").text("");
				var html="<li class='aui-margin-l-5' style='position: relative;margin-top: 1.4rem;'>";
				html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_first.png' style='position: absolute;top: -0.5rem;left: 0; width:2rem;height: 2rem;z-index: 99;'/>";
				html+="<div class='aui-row aui-padded-b-15 li_out' style='height: auto;'>";
				html+="<div class='aui-col-xs-12 aui-pull-right aui-padded-r-5 aui-font-size-16 li_in aui-padded-b-15'>敬请期待更多进展更新</div>";
				html+="</div></li>";
				$("#sports_jinzhan_content").append(html);
			}
		},
		error:function(data){
			//alert("失败！");
		},
	});
	
})

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
function vote(vote_order,current_order,poll){
	var tab=document.getElementsByName("vote"+vote_order);
	var sum=0;
	for(var i=0;i<tab.length;i++){
		if(tab[i].innerHTML=="已投"){
			sum++;
		}
	}
	if(sum>=poll){
		return 0;
	}else{
		tab[current_order].className="aui-col-xs-3 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5 aui-bg-base aui-text-white";
		tab[current_order].innerHTML="已投";
		for(var j=0;j<document.getElementsByName("voteNum"+vote_order).length;j++){
		document.getElementsByName("voteNum"+vote_order)[j].style.display="inline";
		}
	}
	
	
}
