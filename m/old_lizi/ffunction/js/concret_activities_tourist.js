$(document).ready(function(){
	//alert("js");
	//获取url参数
    var id = getQueryString("activity_id");
    //alert("t"+id);
	var voteNum = 1;
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/actProgressInfo",
		data:{
			"activity_id":id,
	      },
	    success:function(data){
	    	var obj=eval(data);
	    	console.dir(obj);
	    	if (obj.status==200) {
	    		$("#progress").text("");
	    		for (var i = 0; i < obj.length; i++) {
					var html = "<div class='jinzhan'>";
		    		html += "<div class='right'>";
		    		html += "<h3 class='right_header'>"+obj[i].title+"</h3>";
		    		html += "<span class='time'>"+obj[i].time+"<br>&nbsp;&nbsp;&nbsp;14.00</span>";
					html += "<p class='right_miaoshu'>"+obj[i].intro+"</p>";
					if (obj[i].image1) {
						html += "<img src='"+obj[i].image1+"' class='right_image'/>"; 
					}
					if (obj[i].image2) {
						html += "<img src='"+obj[i].image2+"' class='right_image'/>"; 
					}
					if (obj[i].image3) {
						html += "<img src='"+obj[i].image3+"' class='right_image'/>"; 
					}
					if (obj[i].is_vote==1) {
						for (var j = 0; j < obj[i].vote.length; j++) {
							html += "<div class='toupiao1'>";
							html += "<div class='toupiao1_left'><img src='"+obj[i].vote[j].image+"'></div>";
							html += "<div class='toupiao1_right'>";
							//html += "<div class='toupiao1_right_h'>"+obj[i].vote[j].title+"</div>";
							html += "<div class='toupiao1_right_p'>"+obj[i].vote[j].intro+" </div>";
							if (!obj[i].not_vote) {
								html += "<div class='toupiao1_right_right' id='"+obj[i].vote[j].id+"'name='toupiao"+voteNum+"'>投票</div>";
								html += "<div class='piaoshu' style='display:none;' name='piaoshu"+voteNum+"'>当前票数:<span id='num"+voteNum+j+"'>"+obj[i].vote[j].num+"</span>�?/div>";
								html += "</div>";
								html += "</div>";
							}else{
								html += "<div class='piaoshu' style='display:inline-block;' name='piaoshu"+voteNum+"'>当前票数:<span id='num"+voteNum+j+"'>"+obj[i].vote[j].num+"</span>�?/div>";
								html += "</div>";
								html += "</div>";
							}
							
						}	
					}
					html += "</div>";
					html += "<img src='"+obj[i].tag_image+"' class='tubiao'/>";
					html += "</div>";
					$("#progress").append(html);
					if (obj[i].is_vote) {
						var js = "<script>";
						js += "var name"+voteNum+"=document.getElementsByName('toupiao"+voteNum+"');";
						js += "var piaoshu"+voteNum+"=document.getElementsByName('piaoshu"+voteNum+"');";
						js += "for(var k=0;k<name"+voteNum+".length;k++){";
						js += "name"+voteNum+"[k].number=k;";
						js += "name"+voteNum+"[k].addEventListener('touchstart',function(e){";
						js += "e.preventDefault();";
						js += "for(var i=0;i<name"+voteNum+".length;i++){";
						js += "piaoshu"+voteNum+"[i].style.display='inline-block';";
						js += "if(k!=i){";
						js += "name"+voteNum+"[i].style.display='none';";
						js += "}";
						js += "}";
						js += "var num = parseInt($('#num"+voteNum+"'+this.number+'').text())+1;";
						js += "$('#num"+voteNum+"'+this.number+'').text(num);";
						js += "vote(this.id);";
						js += "this.style.display='inline-block';";
						js += "this.className='yitoupiao';";
						js += "},false);";
						js += "}";
						js += "</script>";
						$("#progress").append(js);
						voteNum++;
					}

				}
				
	    	} else {
	    		$("#progress").text("");
	    		var html = "<div class='jinzhan'>";
	    		html += "<h3 class='right_header'>无活动进�?/h3>";
	    		html += "</div>";
	    	}
	    },
	    error:function(data)
	    {
	    	alert("获取数据失败�?);
	    }
	    
	});
	
		///播放视频
		var play=document.getElementsByName("play");
		var myVideo=document.getElementsByName("video");
		function playPause(i) 
		{ 
		if (myVideo[i].paused){ 
			myVideo[i].play(); 
			play[i].style.opacity="0";
			}
		else {
			myVideo[i].pause(); 
			play[i].style.opacity="1";
			}
		} 
		for(var i=0;i<play.length;i++){
			play[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				playPause(i-1);
			},false);
		}



});

//获取url参数
function getQueryString(name){ 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) {
		return unescape(r[2]); 
	}else{
		return null; 
	}
}; 


	