<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx2e0779fc5b8d4454", "1609838f5fae1774a3f1dc78a21f65c3");
$signPackage = $jssdk->GetSignPackage();  
$appid = "wx2e0779fc5b8d4454";
$MediaID = $_GET["MediaID"];
$fileContent =  getMedia($access_token,$MediaID);

   if(  downloadFile($file_path,$fileContent))             
			{				 
				//echo $pic_url;
				echo 1;
			}
			else
			{
				$content = "存储失败";
				echo 0;
			} //  */ 
    getMedia($access_token, $MediaID);
    function getMedia($access_token,$MediaID)
	{
		 $accessToken = self::getToken();  
        // 要存在你服务器哪个位置？  
        $savePathFile = '/home'.date('YmdHis').'.jpg';  
        $targetName = $savePathFile;  
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
         return PubCommon::serverDomain() . $savePathFile;
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