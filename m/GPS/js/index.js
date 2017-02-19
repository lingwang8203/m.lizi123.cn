$(document).ready(function(){
    //设置停留时间
    time = 0;
    //设置停留地点
    point = new Object();
    point.address = "";
    point.lat = 0;
    point.lng = 0;
    point.distence = 0;
    //============================加载用户信息============================
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/gps/getUserInfo",
        data:{
            "client_type":0,
        },
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            document.getElementById("user_image").src = obj.user_image;
            document.getElementById("user_name").innerHTML = obj.user_name;
        },
        error:function(data){
            console.dir(data);
        },
        
    });

    
});

window.onload = function(){
    //调用初始化函数地图
    //init();
    //getlatlng();
}
//========================获取经纬度并打开地图================
function getlatlng(){
  wx.getLocation({
    type: 'gcj02',
    success: function (res) {
      //console.dir(res);
      lat = res.latitude; // 纬度，浮点数，范围为90 ~ -90
      lng = res.longitude; // 经度，浮点数，范围为180 ~ -180。

      document.getElementById("lng").innerHTML = "纬度:"+lat+"经度:"+lng+"";
      //打开地图
      mapinit(lat,lng);
      //speed = res.speed; // 速度，以米/每秒计
      //accuracy = res.accuracy; // 位置精度
      //alert(lat+","+lng);
      //计算偏差距离
      distence(lat,lng);
      
      
    },
    cancel: function (res) {
      alert('用户拒绝授权获取地理位置');
    }
  });
}
//=======================显示停留时间===============================
function showTime(){
    time++;
    var h = parseInt(time/3600);
    var m = parseInt((time%3600)/60);
    var s = (time%3600)%60;
    document.getElementById("time").innerHTML = "<b>"+h+"</b>小时<b>"+m+"</b>分<b>"+s+"</b>秒";    
}
//======================计算偏差距离===============================
function distence(lat,lng){
    if ((point.lat!=0)&&(point.lng!=0)) {
        var radLat1 = degToRad(lat);//degToRad()函数将角度转换为弧度
        var radLng1 = degToRad(lng);

        var radLat2 = degToRad(point.lat);
        var radLng2 = degToRad(point.lng);

        var a = radLat1-radLat2;
        var b = radLng1-radLng2;
        var distence=2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2)+Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)))*6378.137;
        //alert("偏差距离:"+distence);
        //超除设定的偏差距离
        if (distence>point.distence) {            
            //停止统计停留时间
            if (cst) {
                clearInterval(cst);
            };
            getTagAddress(lat,lng);
        }
    }else{
        getTagAddress(lat,lng);
    }
                  
}
//=====================角度转弧度===================================
function degToRad(deg){
    return deg/180*Math.PI;
}
//=======================统计停留时间===============================
function countStayTime(){
    console.dir(point);
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/gps/countStayTime",
        data:point,
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            console.dir(data);
        },
        error:function(data){
            console.dir(data);
        },
        
    });
}
//====================获取数据库指定位置============================
function getTagAddress(lat,lng){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/gps/getTagAddress",
        data:{
            "lat":lat,
            "lng":lng,
        },
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            var obj = eval(data);
            if (obj.status==200) {
                if (point.address==""||point.address!=obj.address) {
                    //停留地点发生变化，时间归零
                    time = 0;
                    point=obj;
                    console.dir(point);
                    //每60秒上报一次停留时间
                    cst = setInterval(countStayTime,60000);
                    document.getElementById("lct").innerHTML = "当前在"+obj.address+"停留";
                }
            }else{
                //在统计范围内
                document.getElementById("lct").innerHTML = "您目前不在设定的区域内";
            }            
        },
        error:function(data){
            console.dir(data);
        },
        
    });
}
//======================初始化地图函数==============================
function mapinit(lat,lng) {
    //定义中心点
    var center = new qq.maps.LatLng(lat,lng);
    //定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
    var map = new qq.maps.Map(document.getElementById("container"), {
        center: center,      // 地图的中心地理坐标。
        zoom:16                                                 // 地图的中心地理坐标。
    });
    //创建一个Marker
    var marker = new qq.maps.Marker({
        //设置Marker的位置坐标
        position: center,
        //设置显示Marker的地图
        map: map
    });
}