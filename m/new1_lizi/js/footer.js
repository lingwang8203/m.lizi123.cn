alert(0);
//导航条切换
var mid=document.getElementById("middle");  
var index=document.getElementById("index");
var ffunction=document.getElementById("ffunction");
var ground=document.getElementById("ground");
var me=document.getElementById("me");
//首页区切换
index.addEventListener("touchstart",function(e){
    e.preventDefault();                         
    this.className="logo_on";
    mid.src="../index/index.html";
    ffunction.className="logo_off";
    exchange.className="logo_off";
    me.className="logo_off";
},false);
//功能区切换
ffunction.addEventListener("touchstart",function(e){
    e.preventDefault();                         
    this.className="logo_on";
    mid.src="frame2.html";
    inde.className="logo_off";
    exchange.className="logo_off";
    me.className="logo_off";
},false);
//广场区切换
ground.addEventListener("touchstart",function(e){
    e.preventDefault();                         
    this.className="logo_on";
    mid.src="../ground/index.html";
    inde.className="logo_off";
    ffunction.className="logo_off";
    me.className="logo_off";
},false);
//我的区切换
me.addEventListener("touchstart",function(e){
    e.preventDefault();                         
    this.className="logo_on";
    mid.src="../me/me.html";
    inde.className="logo_off";
    ffunction.className="logo_off";
    exchange.className="logo_off";
},false);



