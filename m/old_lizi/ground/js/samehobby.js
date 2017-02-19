window.onload=function(){
	var edit=document.getElementsByClassName("edit")[0];
	var label=document.getElementsByName("label");
	var sex=document.getElementsByName("sex");
	var tanchuang=document.getElementById("tanchuang");
	var same=document.getElementsByName("same");
	var close=document.getElementById("tanchuang_close");
	edit.index=0;
	edit.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(edit.index==0){
			tanchuang.style.display="block";
			edit.index=1;
		}
		else{
			tanchuang.style.display="none";
			edit.index=0;
		}
	},false);
	
	close.addEventListener("touchstart",function(e){//////////////X按钮
		e.preventDefault();
		tanchuang.style.display="none";
	},false);
	
	for(var i=0;i<label.length;i++){////////////////////标签选择
		label[i].index=0;
		label[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				this.className="cho";
				this.index=1;
			}
			else{
				this.className="";
				this.index=0;
			}
		},false);
	}
	
	function sex_recover(){
		for(var i=0;i<sex.length;i++){
			sex[i].className="";
			sex[i].index=0;
		}
	}
	
	for(var i=0;i<sex.length;i++){
		sex[i].index=0;
		sex[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				sex_recover();
				this.className="cho";
				this.index=1;
			}
			else{
				this.className="";
				this.index=0;
			}
		},false);
	}
	
	for(var i=0;i<same.length;i++){
		same[i].index=0;
		same[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				this.className="cho";
				this.index=1;
			}
			else{
				this.className="";
				this.index=0;
			}
		},false);
	}
	
	
}
