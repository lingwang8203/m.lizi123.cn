<?php
include('token.php');
//$appid = $_GET["appid"];
 $appid = "wx2e0779fc5b8d4454";
 $MediaID = $_GET["MediaID"];
 $tag = $_GET["tag"];

$con = mysql_connect("localhost","root","tokushimazg");
mysql_select_db("qj", $con);
$d = date("Y-m-d H-i-s");
	
		$date = date('Y-m-d'); 
		 
		$access_token = getToken($appid,1);
		
		$fileContent =  getMedia($access_token,$MediaID);           
		
		   
	        $path = "uploads/";
 	        if (!file_exists( $path )){  
              mkdir($path, 0777); 
            }  
			
	        $path = "uploads/user_voice/";
 	        if (!file_exists( $path )){  
              mkdir($path, 0777); 
            }  
			
	    	$filename =  $tag."_".rand(100,999).".jpg"; 			
		    $d = date("Y-m-d");
		    $path = "uploads/user_voice/$d/";
			$content = $path;
			 
 	        if (!file_exists( $path )){  
              mkdir($path, 0777); 
            }  
			
			$file_path = $path.$filename;
	        $path2 = "uploads/user_voice/$d/".$filename;
	    
		    $domain =  $_SERVER['SERVER_NAME'];	
			$voi_url = "http://$domain/".$path2; 
			

		    $sql = "insert into tp_user_upload_voice (tag,voi_url,date) values ('$tag','$voi_url','$d')";
			$re = mysql_query($sql,$con); 
			echo mysql_error();
			 
			 session_start();
			if( $_SESSION["$tag"] != "1" )
			{
				$_SESSION["$tag"] = "1";
			    $sql = "insert into tp_user_upload_tag (tag) values ('$tag')";
     			$re = mysql_query($sql,$con);				
				echo mysql_error();
			}
 

			 
		 	if(  downloadFile($file_path,$fileContent))             
			{				 
				//echo $voi_url;
				echo 1;
			}
			else
			{
				$content = "存储失败";
				echo 0;
			} //  */ 
			
			 
			
	 function getMedia($access_token,$MediaID)
	{
		
		$url = "http://file.api.weixin.qq.com/cgi-bin/media/get?access_token={$access_token}&media_id={$MediaID}";
		
		$ch = curl_init($url);	
		curl_setopt($ch, CURLOPT_HEADER,0);
		curl_setopt($ch, CURLOPT_NOBODY,0);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);		
		$package = curl_exec($ch);
		$httpinfo = curl_getinfo($ch);
		curl_close($ch);
		$len = strlen($package);
		if($len<50)
		{
			return "false";
		}else{
			return $package;			
		}
		//return array_merge(array("body"=>$package),array("header"=>$httpinfo));

	}
	
	function downloadFile($filename,$fileContent)
	{				
		//$date = date('Y-m-d');	
		$local_file = fopen($filename,'w');
		
		if(false !== $local_file){
			if(fwrite($local_file,$fileContent)){
				fclose($local_file);
				clearstatcache();
				return true;
			}
		}				
	}	
	
	function cacheFile($filename,$fileContent)
	{
		$local_file = fopen($filename,'w');
		
		if( $local_file !=false  )
		{
			if(fwrite($local_file,$fileContent))
			{
				fclose($local_file); 
				clearstatcache();				 
	
				return true;
			}
			else
			{
				return false;
			}
		}	
		else
		{
			return false;
		}
	}
	
	


?>