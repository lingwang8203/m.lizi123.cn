$(document).ready(function(){
  //获取url参数中的user_id
  //club_id = getQueryString("club_id");
  $.ajax({
    type:"post",
    url:"http://api.lizi123.cn/index.php/home/user/obtainMyFansList",
    data:{
    },
    success:function(data){
        var obj = eval(data);
        console.dir(obj);
        if (obj.status==200) {
          resShow(obj);
        };
    },
    error:function(data){
        alert("获取数据失败!");
    },
        
  });

});


//====================================粉丝列表展示=================================
function resShow(obj){
  if (obj.length>0) {
    for (var i = 0; i < obj.length; i++) {
    	var html = "<a href='http://m.lizi123.cn/LiZi/me/PersonalHomepage_header.html?user_id="+obj[i].user_id+"'><div class='people'>";
    	html += "<img src='"+obj[i].member_info.user_image+"' class='people_touxiang'/>";
    	html += "<div class='people_name'>";
    	html += "<p>"+obj[i].member_info.user_nickname+"</p>";
    	html += "<p class='from'>来自达人秀</p>";
    	html += "</div>";
    	if (obj[i].is_care==1) {
			html += "<span id="+obj[i].user_id+" class='yiguanzhu'>已关�?/span>";
    	}else{
    		html += "<span id="+obj[i].user_id+" class='guanzhu'>关注</span>";
    	}
    	
    	html += "</div></a>";
    	$(".people_list").append(html);
    }
  }else{
    //document.getElementById("zanwu").style.display="block";
  }
		var guanzhu=document.getElementsByClassName("guanzhu");
    alert(guanzhu.length);
		for(var i=0;i<guanzhu.length;i++){
			guanzhu[i].addEventListener("touchstart",function(e){
				e.preventDefault();
        userCare(this.id);
				this.className="yiguanzhu";
				this.innerHTML="已关�?;
			},false);
		}
}


//===================================关注粉丝====================================
function userCare(id){
  if (id) {
    $.ajax({
    type:"post",
    url:"http://api.lizi123.cn/index.php/home/user/userCare",
    data:{
      "id":id,
    },
    success:function(data){
        var obj = eval(data);
        console.dir(obj);
        if (obj.status==200) {
        };
    },
    error:function(data){
        alert("关注失败!");
    },
        
  });
  }
}