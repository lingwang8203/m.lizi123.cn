<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx2e0779fc5b8d4454", "1609838f5fae1774a3f1dc78a21f65c3");
$signPackage = $jssdk->GetSignPackage();

$MediaID = $_GET["MediaID"];
 $tag = $_GET["tag"];
 $d = date("Y-m-d H-i-s");
	
		$date = date('Y-m-d'); 
		 
		$access_token = getToken($appid,1);
		
		$fileContent =  getMedia($access_token,$MediaID);           //获 取图片文件内容，同时加以判断
		$i = 0;
		while($fileContent == "false")                                        //删除文件重新获取
		{ 
			$access_token_new = getToken($appid,1);
			$fileContent = getMedia($access_token_new,$MediaID); 
			$i++;
			if( $i > 5)
			{
				break;
				return false;
			}
		}
		  	
		   
	        $path = "uploads/";
 	        if (!file_exists( $path )){  
              mkdir($path, 0777); 
            }  
			
	        $path = "uploads/user_imgs/";
 	        if (!file_exists( $path )){  
              mkdir($path, 0777); 
            }  
			
	    	$filename =  $tag."_".rand(100,999).".jpg"; 			
		    $d = date("Y-m-d");
		    $path = "uploads/user_imgs/$d/";
			$content = $path;
			 
 	        if (!file_exists( $path )){  
              mkdir($path, 0777); 
            }  
			
			$file_path = $path.$filename;
	        $path2 = "uploads/user_imgs/$d/".$filename;
	    
		    $domain =  $_SERVER['SERVER_NAME'];	
			$pic_url = "http://$domain/".$path2; 
		$data = $pic_url;
		$data = json_decode($this->get_php_file("pic_url.php"));	
		echo $pic_url;	
			
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
