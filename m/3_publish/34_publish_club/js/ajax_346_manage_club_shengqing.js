$(document).ready(function(){
  //获取url参数中的user_id
  club_id = getQueryString("club_id");
  //alert(club_id);
  $.ajax({
    type:"post",
    url:"http://api.lizi123.cn/index.php/home/club/clubApplyList",
    data:{
    	"club_id":club_id,
    },
    success:function(data){
        var obj = eval(data);
        console.dir(obj);
        if (obj.status==200) {
          resShow(obj);
        };

    },
    error:function(data){
        alert("获取标签失败!");
    },
        
  });



});

//===================================通过申请=================================
function applyPass(id){
  //alert(id+"  "+club_id);
  if (id) {
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/club/passClubApply",
        data:{
          "club_id":club_id,
          "id":id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
              //alert(obj.status);
            };
        },
        error:function(data){
            //alert(obj.status);
            alert("获取标签失败!");
        },
            
    });
  }
}
//====================================申请列表展示=================================
function resShow(obj){
  $("#list").text("");
  if (obj.num>0) {
    for (var i = 0; i < obj.num; i++) {
      var html = "<div class='shenqing'>";
      html += "<img src='"+obj[i].member_info.head_image+"' class='touxiang'/>";
      html += "<div class='right'>";
      html += "<p>"+obj[i].member_info.user_name+"</p>";
      html += "<p>申请加入&nbsp;&nbsp;"+obj.club_name+"</p>";
      html += "<p class='yanzhen'>验证消息:"+obj[i].apply_text+"</p>";
      html += "</div>";
      html += "<span id='"+obj[i].id+"' class='tongguo'>通过</span>";
      html += "</div>";
      $("#list").append(html);
    }
  }else{
    document.getElementById("zanwu").style.display="block";
  }
  var yanzhen=document.getElementsByClassName("tongguo");
	for(i=0;i<yanzhen.length;i++){
    yanzhen[i].addEventListener("touchstart",function(e){
      e.preventDefault();
      
      applyPass(this.id);
      this.className="yitongguo";
      this.innerHTML="已通过";
    },false)
	}
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