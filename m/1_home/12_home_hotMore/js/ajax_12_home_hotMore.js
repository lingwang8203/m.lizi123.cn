$(document).ready(function() {
    $.ajax({
        type: "post",
        url: "http://api.lizi123.cn/index.php/home/index/hot",
        data: {
            "client_type": 0,
        },
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            var obj = eval(data);
            console.dir(obj);
            if (obj.status == 200) {
                var html = '<li class="aui-row" style="width:100%;height:12rem;position: relative">';
                html += '<div class="aui-col-xs-12" style="padding: 0;margin: 0;height:auto;">';
                html += '<img src="'+obj[0].image+'" style="height:12rem;width:100%;" />';
                html += '</div>';
                html += '<a href="../13_home_label/13_home_label.html?tag_id='+obj[0].tag.id+'" target="_blank">';
                html += '   <div class="aui-label aui-pull-right aui-font-size-12 tap" style="position: absolute;top: 0.5rem;right: 0;">'+obj[0].tag.tag_name+'</div>';
                html += '</a>';
                html += '<div class="sportcontect" style="width:100%;height: auto;position: absolute;bottom:0rem;">';
                html += '    <div class="aui-col-xs-12 out">';
                html += '        <div class="aui-col-xs-12 in_opacity"></div>';
                html += '       <div class="aui-col-xs-2 rank aui-text-center aui-row aui-margin-t-10">';
                html += '            <div class="aui-font-size-18 aui-col-12">01</div>';
                html += '        </div>';
                html += '       <div class="aui-row aui-col-xs-7 aui-padded-t-5 ">';
                html += '            <div class="aui-font-size-16 aui-col-xs-12" style="color: white;">'+obj[0].name+'</div>';
                html += '            <div class="aui-font-size-12 aui-col-xs-12" style="color: white;">'+obj[0].intro+'</div>';
                html += '            <div class="aui-font-size-12 aui-col-xs-12" style="color: white;">主办方：'+obj[0].sponsor+'</div>';
                html += '        </div>';
                html += '        <div class="aui-row aui-col-xs-3 aui-pull-right aui-padded-t-10 aui-padded-r-5">';
                html += '            <div class="aui-label lab_join aui-pull-right aui-font-size-14 aui-col-xs-12" style="width: auto; color:white ;text-align: center;border-radius: 0.4rem;padding:0.1rem 0.3rem;">参与投票</div>';
                html += '            <a href="../../2_function/23_function_sports/232_function_sports_concret.html?activty_id='+obj[0].id+'" target="_blank">';
                html += '                <div class="aui-col-xs-12 aui-font-size-12" style="color: white;">';
                html += '                   <div class="aui-col-xs-3 aui-font-size-12 aui-pull-right aui-padded-r-5 aui-padded-t-10" style="width: auto;">活动详情></div>';
                html += '</div></a> </div> </div></div></li>';
                $("#home_hotMore").append(html);
                for (var i = 1; i < obj.length; i++) {
                    if (obj[i].area == 1) { //活动
                        var html = '<li class="aui-row aui-margin-t-10" style="width: 97%;height: auto;margin: 0 auto;border: 1px solid #dddddd;">';
                        html += '<div class="aui-col-xs-12" style="position: relative;height: auto;">';
                        html += '<a href="../13_home_label/13_home_label.html?tag_id='+obj[i].tag.id+'" target="_blank">';
                        html += '<div class="aui-label aui-pull-right aui-font-size-12 tap" style="position: absolute;top: 0.5rem;right: 0;">'+obj[i].tag.tag_name+'</div>';
                        html += '</a>';
                        html += '<img src="'+obj[i].image+'" style="width:100%;height:7rem;" />';
                        html += '<div class="aui-col-xs-2 Rrank aui-text-center aui-row aui-margin-t-10" style="position: absolute;bottom: 0.1rem;left: 0;">';
                        
                        if(i<9){
                            html += '<div class="aui-font-size-18 aui-col-12">0'+(i+1)+'</div>';
                        }else{
                            html += '<div class="aui-font-size-18 aui-col-12">'+(i+1)+'</div>';
                        }
                        html += '</div>';
                        html += '</div>';
                        html += '<div class="aui-row">';
                        html += '<div class="aui-col-xs-9 aui-row aui-padded-l-10 aui-padded-b-5">';
                        html += '<div class="aui-col-xs-12 aui-font-size-16">'+obj[i].name+'</div>';
                        html += '<div class="aui-font-size-12">讲师：'+obj[i].sponsor+'</div>';
                        html += '</div>';
                        html += '<a href="../../2_function/23_function_sports/232_function_sports_concret.html?activty_id='+obj[i].id+'" style="color: #212121 !important;" target="_blank">';
                        html += '<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right aui-padded-r-5 aui-padded-t-10" style="width: auto;">活动详情></div>';
                        html += '</a></div></l';
                        $("#home_hotMore").append(html);
                    }else if(obj[i].area == 2) { //课程
                        var html = '<li class="aui-row aui-margin-t-10" style="width: 97%;height: auto;margin: 0 auto;border: 1px solid #dddddd;">';
                        html += '<div class="aui-col-xs-12" style="position: relative;height: auto;">';
                        html += '<a href="../13_home_label/13_home_label.html?tag_id='+obj[i].tag.id+'" target="_blank">';
                        html += '<div class="aui-label aui-pull-right aui-font-size-12 tap" style="position: absolute;top: 0.5rem;right: 0;">'+obj[i].tag.tag_name+'</div>';
                        html += '</a>';
                        html += '<img src="'+obj[i].image+'" style="width:100%;height:7rem;" />';
                        html += '<div class="aui-col-xs-2 Rrank aui-text-center aui-row aui-margin-t-10" style="position: absolute;bottom: 0.1rem;left: 0;">';
                        
                        if(i<9){
                            html += '<div class="aui-font-size-18 aui-col-12">0'+(i+1)+'</div>';
                        }else{
                            html += '<div class="aui-font-size-18 aui-col-12">'+(i+1)+'</div>';
                        }
                        html += '</div>';
                        html += '</div>';
                        html += '<div class="aui-row">';
                        html += '<div class="aui-col-xs-9 aui-row aui-padded-l-10 aui-padded-b-5">';
                        html += '<div class="aui-col-xs-12 aui-font-size-16">'+obj[i].name+'</div>';
                        html += '<div class="aui-font-size-12">讲师：'+obj[i].user_info.user_name+'</div>';
                        html += '</div>';
                        html += '<a href="../../2_function/21_function_class/212_function_class_concret.html?class_id='+obj[i].id+'" style="color: #212121 !important;" target="_blank">';
                        html += '<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right aui-padded-r-5 aui-padded-t-10" style="width: auto;">课程详情></div>';
                        html += '</a></div></l';
                        $("#home_hotMore").append(html);
                    }
                }
            }
        },
        error: function(data) {
            alert("获取热门失败");
        },

    });
});