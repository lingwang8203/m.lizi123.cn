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
        <script src="js/ajax_4_ground_iframe4.js"></script>
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
    <div class="aui-col-xs-12 aui-row" style="background: #ffbf2a;">
			<div class="aui-col-xs-8 aui-pull-left" style="padding: 0.5rem 0;">
				<select name="select-native-2" id="select-native-2" data-mini="true" class="mid choose" onchange="changeIframeSrc()">
                <option value="1">&nbsp;&nbsp;&nbsp;最新></option>
	    	    <option value="2">&nbsp;&nbsp;&nbsp;课程></option>
	    	    <option value="3">&nbsp;&nbsp;&nbsp;活动></option>
	   	 	    <option value="4">&nbsp;&nbsp;&nbsp;秀秀></option>
				<option value="5">&nbsp;&nbsp;&nbsp;已关注></option>
				</select>
			</div>
			<a href="41_ground_hobby/41_ground_hobby.html" target="_blank" id="hobby" class="aui-pull-right aui-font-size-14 aui-padded-r-5" style="color: white;width: auto;padding: 0.5rem 0;">找同好</a>
		</div>
			<!--<!------推送内容------------------------>
	<div class="aui-content">
		<ul class="aui-list" id="ground">		
		<!----------------------秀秀推送格式-------------->
		<!----------------------秀秀推送格式（一图）-------------->

       <!----------------------秀秀推送格式(3图)-------------->

       <!----------------------秀秀推送格式(2图)-------------->
	  </ul>	
    </div>	
</div>
</body>
</html>