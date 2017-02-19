window.onload=function(){
	user_id=1;

	//user_id=getQueryString('user_id');//
	document.getElementById("mine_activtity").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/5_mine/54_mine_sports/54_mine_sportsManege.html?user_id="+user_id);
	//	window.open("http://www.baidu.com");
	},false)
	
	document.getElementById("mine_club").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/5_mine/53_mine_club/531_mine_club_manage.html?user_id="+user_id);
	
	},false)
	
	document.getElementById("mine_class").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/5_mine/52_mine_class/521_mine_classManege.html?user_id="+user_id);
	},false)
	
	document.getElementById("mine_xiu").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/5_mine/55_mine_show/55_mine_showManege.html?user_id="+user_id);
	},false)
	
	document.getElementById("mine_guanzhu").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/5_mine/56_mine_focus/56_mine_focus.html?user_id="+user_id);
	},false)
	
	document.getElementById("mine_fensi").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/5_mine/57_mine_fans/57_mine_fans.html?user_id="+user_id);
	},false)
	
	
}

//=================================获取url参数=====================
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
}; 
