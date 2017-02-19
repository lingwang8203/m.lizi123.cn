var del=new Array;
del=document.getElementsByName("delete_label");
for(var i=0;i<del.length;i++){
	del[i].addEventListener("touchstart",function(e){
		e.preventDefault();
		this.parentNode.style.display="none";
	},false);
}


var content1_label=new Array;
content1_label=document.getElementsByName("content1_label");
for(var i=0;i<content1_label.length;i++){
	content1_label[i].addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.className=="content1_label"){
			this.className="content1_label_hover";
		}
		else{
			this.className="content1_label";
		}
	},false);
}

