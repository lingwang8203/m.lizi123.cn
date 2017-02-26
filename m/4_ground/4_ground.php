<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>广场</title>
	    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
	    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
	    <link rel="stylesheet" type="text/css" href="../css/aui.2.0.css" />	
	    <link rel="stylesheet" type="text/css" href="../1_home/css/index.css" />	
	    
	    <?php include("../footer.html");?>
	    	        
        <script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>	
        <script src="../js/add_loading.js"></script>
        <script src="js/ajax_4_ground.js"></script>
        <script src="js/ajax_4_ground_iframe1.js"></script>
	</head>
	<style type="text/css">
		.choose{
		padding-left:6.4rem;color: white;	
		}
		@media screen and (min-width:365px){ 
		.choose{
		padding-left:8.4rem;color: white;	
		}
		}
	</style>
	
	<body>
		<!-------下面推送部分-------------------------->
	<div class="aui-col-xs-12 aui-row"style="background: #ffbf2a;">
		<div class="aui-col-xs-8 aui-pull-left"style="padding: 0.5rem 0;" >
			<select name="select-native-2" id="select-native-2" data-mini="true"class="mid choose" onchange="changeIframeSrc()">
	    	    <option value="1">&nbsp;&nbsp;&nbsp;最新></option>
	    	    <option value="2">&nbsp;&nbsp;&nbsp;课程></option>
	    	    <option value="3">&nbsp;&nbsp;&nbsp;活动></option>
	   	 	    <option value="4">&nbsp;&nbsp;&nbsp;秀秀></option>
				<option value="5">&nbsp;&nbsp;&nbsp;已关注></option>
 	 	    </select>
		</div>
		<a href="41_ground_hobby/41_ground_hobby.html" target="_blank" id="hobby" class="aui-pull-right aui-font-size-14 aui-padded-r-5"style="color: white;width: auto;padding: 0.5rem 0;">找同好</a>
	</div>
	<div class="aui-content">
			<ul class="aui-list" id="ground">
				<!----------------------课程推送格式-------------->

				<!----------------------秀秀推送格式-------------->

				<!----------------------课程推送格式-------------->

				<!----活动推送--------------------->

				<!----------------------秀秀推送格式-------------->
				<!----------------------秀秀推送格式（一图）-------------->

				<!----------------------秀秀推送格式(3图)-------------->

				<!----------------------秀秀推送格式(2图)-------------->

			</ul>
		</div>
		
	</body>
	<script>

//		var select_id=document.getElementById("select-native-2").options;
//	    	var menu_id= getQueryString('url_index');
//	    	var iframe_id=document.getElementById("ifram");
//	    	if(menu_id=="gro2"){	    
//	    		select_id[1].selected=true;
//	    		
//	    		iframe_id.src="4_ground_iframe2.html";
//	    		
//	    	}else if(menu_id=="gro3"){
//	    		select_id[2].selected=true;
//	    		iframe_id.src="4_ground_iframe3.html";
//	    		
//	    	}else if(menu_id=="gro4"){
//	    		select_id[3].selected=true;
//	    		iframe_id.src="4_ground_iframe4.html";
//	    		
//	    	}
//	    	else if(menu_id=="gro5"){
//	    		select_id[4].selected=true;
//	    		iframe_id.src="4_ground_iframe5.html";
//	    		
//	    	}
//  	
//	    	function getQueryString(name) {
//			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//			var r = window.location.search.substr(1).match(reg);
//			if(r != null) {
//				return unescape(r[2]);
//			} else {
//				return null;
//			}
//		}
//	    })

	</script>
</html>
