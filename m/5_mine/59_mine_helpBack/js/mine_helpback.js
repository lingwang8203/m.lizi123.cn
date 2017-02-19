window.onload=function(){
	var back=document.getElementById("mine_helpback_iframe_back");
	var problem=document.getElementById("mine_helpback_iframe_problem");
	var iframe=document.getElementById("mine-helpback-iframe");
	back.addEventListener("touchstart",function(e){
		e.preventDefault();
		this.className="aui-bar-btn-item aui-active";
		iframe.src="59_iframe_mine_Back.html";
		problem.className="aui-bar-btn-item";
	},false);
	problem.addEventListener("touchstart",function(e){
		e.preventDefault();
		this.className="aui-bar-btn-item aui-active";
		iframe.src="59_iframe_mine_help.html";
		back.className="aui-bar-btn-item";
	},false);
}
