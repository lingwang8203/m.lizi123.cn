$(document).ready(function(){
    selectRes(1);
    //获取活动类型
    getType();
    /***************************点击标签*************************/
    var sports_label=new Array;
    var select;
	sports_label=document.getElementsByName("function_sports_label");
    for (var i=0;i<sports_label.length;i++) {
        sports_label[i].addEventListener("touchstart",function(e){
            e.preventDefault();
            if(this.className=="aui-label tap_nor aui-font-size-12 aui-col-xs-12"){
            	for(var m=0;m<sports_label.length;m++){
            		sports_label[m].className="aui-label tap_nor aui-font-size-12 aui-col-xs-12";
            	}
                this.className="aui-label tapp aui-font-size-12 aui-col-xs-12 ";  
                select=this.value;
            }else{
                this.className="aui-label tap_nor aui-font-size-12 aui-col-xs-12";
                select=null;
            }
            selectRes(select);   
        },false);
    }
	
})


//===============================获取活动类型==============================
function getType(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/activity/actType",
        data:{
            "client_type":0
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
                var sports_label=new Array;
                sports_label=document.getElementsByName("function_sports_label");
                for (var i=0;i<sports_label.length;i++) {
                    sports_label[i].innerHTML = obj[i].type_name;
                    sports_label[i].value = obj[i].id;
                    //alert(choose_but[i].value);
                }
            };
        },
        error:function(data){
            getType();
        },
            
    });


}




//=======================获取筛选结果列表========================
function selectRes(type_id){
    if (type_id) {
        $.ajax({
            type:"post",
            url:"http://api.lizi123.cn/index.php/home/activity/actSelectRes",
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
                    $("#sports_push_content").text("");
                    selectResShow(obj);
                }else{
                    $("#sports_push_content").text("");
                        var nullRes = "<div class='hotRe'>";
                        nullRes += "<p class='title'style='width: 80%;'>无筛选结果</p>";
                        nullRes += "</div>";
                    $("#sports_push_content").append(nullRes);
                }
            },
            error:function(data){
                //alert("error!");
            },
            
        });
    };
    
}



//============================筛选结果展示============================
function selectResShow(obj){
    //未进行参数检查
    for (var j = 0; j < obj.length; j++) {
        var html="<li  class='aui-row aui-padded-b-5 ' style='width:100%;height: auto;position: relative;'>";
            html+="<div class='aui-col-xs-12' style='padding: 0;margin: 0;height:auto;'>";
            html+="<img src='"+obj[j].image+"' style='height:16rem;width:100%;'/></div>";
            html+="<a target='_blank' href='http://m.lizi123.cn/1_home/13_home_label/13_home_label.html?tag_id="+obj[j].tag_id+"'><div class='aui-label aui-pull-right aui-font-size-12 tap' style='position: absolute;top: 0.5rem;right: 0;'>"+obj[j].tag_name+"</div></a>";
            html+="<div class='sportcontect' style='width:100%;height: auto;position: absolute;bottom:1.8rem;'>";
            html+="<div style='width: 100%;height: auto;'><div class='aui-col-xs-12 out'><div class='aui-col-xs-12 in_opacity'></div>";
            html+="<div class='aui-col-xs-2 join_title aui-text-center aui-row aui-margin-t-10'><div class='aui-font-size-16 aui-col-12'>";
            switch(obj[j].activity_status){
                case "1":html+="投票";break;
                case "2":html+="活动";break;
                case "3":html+="报名";break;
            }
            html+="</div>";
            html+="<div class='aui-font-size-12 aui-col-12'>进行中</div></div><div class='aui-row aui-col-xs-7 aui-padded-t-5'>";
            html+="<div class='aui-font-size-16 aui-col-xs-12' style='color: white;max-height: 1.2rem;overflow: hidden;'>"+obj[j].name+"</div><div class='aui-font-size-12 aui-col-xs-12' style='color: white;max-height:1.7rem !important;overflow:auto;'>"+obj[j].intro+"</div><div class='aui-font-size-12 aui-col-xs-12' style='color: white;'>主办方:"+obj[j].sponsor+"</div>";
            html+="</div><div class='aui-row aui-col-xs-3 aui-pull-right aui-padded-t-10 aui-padded-r-5' style='width:auto;'>";
            switch(obj[j].activity_status){
                case "1":html+="<a href='"+obj[j].sport_vote_id+"' target='_blank'>";break;
                case "2":html+="<a href='"+obj[j].sport_id+"' target='_blank'>";break;
                case "3":html+="<a href='http://m.lizi123.cn/2_function/23_function_sports/2321_function_sports_concret_fillMessage.html?activty_id="+obj[j].sport_join_id+"' target='_blank'>";break;
            }
            html+="<div class='aui-label lab_join aui-pull-right aui-font-size-14 aui-col-xs-12' style='width: auto; color:white ;text-align: center;border-radius: 0.4rem;padding:0.1rem 0.3rem;'>参与";
            switch(obj[j].activity_status){
                case "1":html+="投票";break;
                case "2":html+="活动";break;
                case "3":html+="报名";break;
            }
            html+="</div></a>";
            html+="<a href='http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id="+obj[j].id+"'target='_blank'><div class='aui-col-xs-12 aui-font-size-12'style='color: white;'>";
            html+="<div class='aui-col-xs-3 aui-font-size-12 aui-pull-right aui-padded-r-5 aui-padded-t-10'style='width: auto;'>活动详情></div></div></a>  "
            html+="</div></div></div></div><div class='aui-row aui-col-xs-12'><div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
            html+="<i class='aui-iconfont aui-icon-like' name='sport_dianzan'></i>";
            html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[j].good_num+"</span>";
            html+="</div><a href='../2_function/23_function_sports/232_function_sports_concret.html?sports_id="+obj[j].id+"' target='_blank'><div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i><span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[j].comment_num+"</span>";
            html+="</div></a></li><div class='aui-hr'></div>";
        $("#sports_push_content").append(html);
    }
}
    