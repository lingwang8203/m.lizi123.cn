//
//$("#near_school").on("touchstart", function(e) {
//  e.preventDefault();
//  startX = e.originalEvent.changedTouches[0].pageX,
//  startY = e.originalEvent.changedTouches[0].pageY;
//},false);
//
	var school_name=new Array;
	school_name=document.getElementsByName("school_name");
	for(var i=0;i<school_name.length;i++){
		school_name[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			for(var j=0;j<school_name.length;j++)
				school_name[j].className="";
			this.className="checked";
		},false);
	}
//$("#near_school").on("touchmove", function(e) {
//  e.preventDefault();
//  moveEndX = e.originalEvent.changedTouches[0].pageX,
//  moveEndY = e.originalEvent.changedTouches[0].pageY,
//  X = moveEndX - startX,
//  Y = moveEndY - startY;
//   
////  if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
////      alert("left 2 right");
////  }
////  else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
////      alert("right 2 left");
////  }
//  if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
////      alert("top 2 bottom");
//		alert(Y);
//  }
//  else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
////      alert("bottom 2 top");
////		alert(Y);
//		if(Y<-3&&Y>-6){
//			if(length>5){
//				hidden=first_hidden();
//				last=lastfive();
//				if(hidden>last){
//					for(i=0;i<school_name.length;i++){
//						
//					}
//				}
//				else{
//					
//				}
//			}
//		}
//  }
//  else{
////      alert("just touch");
//  }
//},false);