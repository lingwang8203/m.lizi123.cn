$(document).ready(function(){
  //获取url参数中的user_id
  club_id = getQueryString("club_id");
  myManageClubAct(club_id);
});
//==================================我管理的社团活动===============================
function myManageClubAct(club_id){
  if (club_id) {
    $.ajax({
      type:"post",
      url:"http://qj_api.qdmedia.cc/index.php/home/club/myManageClubAct",
      data:{
        "club_id":club_id,
        },
        success:function(data){
          var obj=eval(data);
          console.dir(obj);
          if (obj.status==200) {
            resShow(obj);
          }else{
            alert("无管理权限！");
          }
          
        },
        error:function(data){
          alert("获取数据失败！");
        }
    });
  }

}
//====================================申请列表展示=================================
function resShow(obj){
  if (obj.length>0) {
    for (var i = 0; i < obj.length; i++) {
      var html = "<div class='activities'>";
      html += "<div class='yinying'></div>";  
      html += "<div class='image'>";  
      html += "<img src='"+obj[i].album_id+"' class='poster'/>";
      html += "<img src='img/edit.png' id='"+obj[i].id+"'class='edit'/>";
      html += "<img src='img/delete.png' id='"+obj[i].id+"' class='delete'/>";
      html += "<a href='activties_fuzeren.html?activity_id="+obj[i].id+"'><img src='img/zhiding.png' class='zhiding'/></a>";    
      html += "</div>";
      html += "<div class='header'>";
      html += "<h3>"+obj[i].name+"</h3>";
      html += "<a href='../ffunction/concret_activities.html?activity_id='"+obj[i].id+">查看活动详情页</a>";
      html += "</div>";
      html += "<div class='activties_date'>";
      html += "<img src='../ffunction/img/sports/CLOCK 2.png' />";
      html += "<span>"+obj[i].time+"</span>";
      html += "</div>";
      html += "<div class='activties_date'>";
      html += "<img src='../ffunction/img/sports/Location.png'/>";
      html += "<span>"+obj[i].school_id+"</span>";
      html += "</div>";
      html += "<div class='activties_date'>";
      html += "<img src='../ffunction/img/sports/yaoqiu.png' />";
      html += "<span>"+obj[i].intro+"</span>";
      html += "</div>";
      html += "</div>";
      $("#activityList").append(html);
    }
  }

  var del=document.getElementsByClassName("delete");
    var edit=document.getElementsByClassName("edit");
    for(i=0;i<del.length;i++){
      del[i].addEventListener("touchstart",function(e){
        e.preventDefault();
        if(confirm("要删除此活动吗?")){
          deleteActivity(this.id);
          var oldnode=this.parentNode.parentNode;
          var body=oldnode.parentNode;
          body.removeChild(oldnode);
        }
      },false)
    }
    for(var i=0;i<edit.length;i++){
      edit[i].addEventListener("touchstart",function(e){
        e.preventDefault();
        editActivityInfo(this.id);
      },false)
    }
  
}
//==============================编辑活动详情=====================================
function editActivityInfo(activity_id){
  alert(activity_id);
  window.open("../publish/publish_activities_first.html?activity_id="+activity_id);
}
//==================================删除活动====================================
function deleteActivity(activity_id){
  alert(activity_id);
  if (activity_id && club_id) {
    $.ajax({
      type:"post",
      url:"http://qj_api.qdmedia.cc/index.php/home/club/deleteActivity",
      data:{
        "club_id":club_id,
        "activity_id":activity_id,
      },
      success:function(data){
        var obj=eval(data);
        console.dir(obj);
        if (obj.status==199) {
          window.open("http://qj_wa.qdmedia.cc/LiZi/login/"); 
        }else if(obj.status==1){
          alert("权限不够！");
          window.location.reload();
        }
      },
      error:function(data){
        alert("无管理权限！");
      }
    });
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