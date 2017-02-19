$(document).ready(function(){
    //获取url参数中的user_id
    var club_id = getQueryString("club_id");

    /*
    //用户头像
    var user_image = document.getElementById("Club_logo");
    //用户昵称
    var user_nickname = document.getElementsByClassName("nickname")[0];
    //用户简�?
    var user_intro = document.getElementById("pageclub_jianjie");
    //用户学校
    var user_school = document.getElementsByClassName("school")[0];
*/
    //================================社团基本信息显示==============================
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/club/clubDetails",
        data:{
            "id":club_id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                document.getElementById("top_touxiang1").src = obj.image;
                 document.getElementById("club_name1").innerHTML = obj.name;
                 document.getElementById("logo_write").href = "Edit_Club_information.html?club_id="+obj.id;
                 document.getElementById("club_sign1").innerHTML = obj.intro;
            }else if(obj.status==199){
                window.location.href = "http://m.lizi123.cn/LiZi/login";
            }
        },
        error:function(data){
            alert("error!");
        },
            
    });


    //============================社团成员及活动信息显�?============================
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/club/clubImpress",
        data:{
            "id":club_id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                document.getElementsByClassName("num")[0].innerHTML = obj.member_num+"�?>";
                document.getElementById("manage_club_people").href = "../page_club/manage_club_people.html?club_id="+club_id;
                document.getElementById("manage_club_activity").href = "../page_club/manage_club_activities.html?club_id="+club_id;
                var member="";
                for (var i = 0; i < obj.member_num; i++) {
                    member += "<a href=’PersonalHomepage_header.html'><img class='touxiang' id='touxiang2' src='"+obj[i]+"' /></a>";
                };
                member += "<a href='../page_club/yaoqing.html?club_id="+club_id+"' id='link'><img class='touxiang'  src='img/add.png' style='padding-right: 0;border-radius: 0;'</a>";
                $("#member").append(member);
                document.getElementsByClassName("num")[1].innerHTML = obj.length+"�?>";
                document.getElementById("haibao_same1").src = obj.poster1;
                document.getElementById("haibao_same2").src = obj.poster2;
                document.getElementById("haibao_same3").src = obj.poster3;
            }
        },
        error:function(data){
            alert("error!");
        },
            
    });


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

