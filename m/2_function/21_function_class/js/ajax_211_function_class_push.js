$(document).ready(function(){
    var times = 1;//加载次数
    getType();
    //===========================点击标签===============================
    var class_label=new Array;
    var select;
    $("#class_push_content").text("");

  //获取默认热门
  hotClass();
  class_label=document.getElementsByName("function_class_label");
  for (var i=0;i<class_label.length;i++) {
    class_label[i].addEventListener("touchstart",function(e){
      e.preventDefault();
        if(this.className=="aui-label tap_nor aui-font-size-12 aui-col-xs-12"){
          for(var m=0;m<class_label.length;m++){
            class_label[m].className="aui-label tap_nor aui-font-size-12 aui-col-xs-12";
          }
          this.className="aui-label tapp aui-font-size-12 aui-col-xs-12 ";   
          select=this.value;
        }else{            
          this.className="aui-label tap_nor aui-font-size-12 aui-col-xs-12";
          select="";
        }
        selectRes(select);
      },false);
  }

  

})


//========================获取课程类型==================================
function getType(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/class/classType",
        data:{
            "client_type":0
        },
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
                var class_label=new Array;
                class_label=document.getElementsByName("function_class_label");
                for (var i=0;i<class_label.length;i++) {
                    class_label[i].innerHTML = obj[i].type_name;
                    class_label[i].value = obj[i].id;
                    //alert(choose_but[i].value);
                }
            };
        },
        error:function(data){
            if (times<4) {
                getType();
            };
        },

    });
}




//=======================获取筛选结果列表======================
function selectRes(type_id){
    if (type_id) {
        $.ajax({
            type:"post",
            url:"http://api.lizi123.cn/index.php/home/class/classSelectRes",
            data:{
                "client_type":0,
                "type_id":type_id,
            },
            xhrFields: {
                withCredentials: true
            },
            success:function(data){
                var obj = eval(data);
                console.dir(obj);
                if (obj.status==200) {
                    $("#class_push_content").text("");
                    selectResShow(obj);
                }else{
                    $("#class_push_content").text("");
                    var nullRes = "<div class='hotRe'>";
                    nullRes += "<p class='title'style='width: 80%;'>无筛选结果</p>";
                    nullRes += "</div>";
                    $("#class_push_content").append(nullRes);
                }
            },
            error:function(data){
                //alert("error!");
            },
            
        });
    };
    
}


//=========================未点击状态下获取热门课程=============================
function hotClass(){
    if (1) {
        $.ajax({
            type:"post",
            url:"http://api.lizi123.cn/index.php/home/class/hotClass",
            data:{
                "client_type":0
            },
            xhrFields: {
                withCredentials: true
            },
            success:function(data){
                var obj = eval(data);
                console.dir(obj);
                if (obj.status==200) {
                    $("#class_push_content").text("");
                    selectResShow(obj);
                }else{
                    //alert(obj.status);
                    $("#class_push_content").text("");
                    var nullRes = "<div class='hotRe'>";
                    nullRes += "<p class='title'style='width: 80%;'>无筛选结果</p>";
                    nullRes += "</div>";
                    $("#class_push_content").append(nullRes);
                }
            },
            error:function(data){
                //alert("error!");
            },
            
        });
    };
    
}
//=========================筛选结果展示=============================
function selectResShow(obj){

    //未进行参数检查
    for (var i = 0; i < obj.length; i++) {
        var html="<li name='time' id='"+obj[i].time+"' class='aui-row aui-padded-t-5' style='width:100%;'>";
        html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";

        html+="<a href='http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_info.id+"' style='width: 2rem !important;height:auto;' target='_blank'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;' /></a>";
        html+="</div><div class='aui-col-xs-6 aui-row'><div class='aui-col-12'>"+obj[i].user_info.user_name+"</div><div class='aui-col-12 aui-font-size-12'>"+obj[i].time+"</div>";
        html+="</div><div class='aui-col-xs-4' style='margin-top: 0.3rem;'>";
//下面这句console会报错，但并无影响 Orz.....
      if(obj[i].tag.Id) {
          html+="<a href='http://m.lizi123.cn/1_home/13_home_label/13_home_label.html?tag_id="+obj[i].tag.Id+"' target='_blank'><div class='aui-label aui-pull-right aui-font-size-12 tap'>"+obj[i].tag.tag_name+"</div></a></div>";
      }else{
          html+="<a href='#'><div class='aui-label aui-pull-right aui-font-size-12 tap'></div></a></div>";

      }
      html+="<a href='http://m.lizi123.cn/2_function/21_function_class/212_function_class_concret.html?class_id="+obj[i].id+"' target='_blank' style='color: #212121 !important;'><div class='aui-row aui-col-xs-12'>";
      html+="<div class='aui-col-xs-5 aui-pull-left' style='height: 8.4rem;padding: 0.5rem !important;padding-top: 0 !important;'>";
      html+="<img src='"+obj[i].image+"' style='height:8.4rem;width: 100%;'/></div>";
      html+="<div class='aui-col-xs-7 aui-row aui-pull-left'><div class='aui-row aui-col-12'><div class='aui-col-12 aui-font-size-18'>"+obj[i].name+"</div>";
      html+="</div><div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课方式</div>";
      html+="<div class='aui-col-xs-8 aui-font-size-12'>";
      switch(obj[i].way){
         case "0":
         html += "一对多";
         break;
         case "1":
         html += "一对一";
         break;
         default:
         html += "不限";
         break;
     }
     html+="·";
     switch(obj[i].method){
         case "0":
         html += "线上";
         break;
         case "1":
         html += "线下";
         break;
         default:
         html += "不限";
         break;
     }
     html+="</div></div><div class='aui-row aui-col-12'>";
     html+="<div class='aui-col-xs-4  aui-font-size-12'>课程简介</div><div class='aui-col-xs-8 aui-font-size-12'>"+obj[i].intro+"</div>";
     html+="</div><div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课地点</div>";
     html+="<div class='aui-col-xs-8 aui-font-size-12'>"+obj[i].address+"</div></div>";
     html+="<div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课时间</div>";
     if (obj[i].week_time) {
      html+="<div class='aui-col-xs-8  aui-row aui-font-size-12'><div class='aui-col-12' >周";
      html+=obj[i].week_time;
  }else{
      html+="<div class='aui-col-xs-8  aui-row aui-font-size-12'><div class='aui-col-12' >不限";
  }
  html+="</div><div class='aui-col-12'>共 <span style='color: #ffac0d;'>"+obj[i].week_hour+"</span>学时</div>";
  html+="</div></div></div></div></a><div class='aui-row aui-col-xs-12'><div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
  html+="<i class='aui-iconfont aui-icon-like' name='class_dianzan'></i><span class='aui-font-size-12'>"+obj[i].good_num+"</span></div>";
  html+="<a href='"+obj[i].id+"' style='color: #212121 !important;'><div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i>";
  html+="<span class='aui-font-size-12'>"+obj[i].evaluate_num+"</span></div></a><div class='aui-col-xs-4 aui-pull-right'>";
  html+="<a href='http://m.lizi123.cn/2_function/21_function_class/2121_function_class_concret_fillMessage.html?class_id="+obj[i].id+"' target='_blank'><div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on' style='margin-top: 0;'>报名参加</div></a>";
  html+="</div></div></li><div class='aui-hr'></div>";

  $("#class_push_content").append(html);
}
}


