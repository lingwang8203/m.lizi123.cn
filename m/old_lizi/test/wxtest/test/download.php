<?php
    if(IS_POST && $_POST['vote_pic']){   //提交过来的vote_pic是微信服务器端的图像资源id
            $pic_id = $_POST['vote_pic'];
            $return = array();
            C('WEIXIN_UPLOAD') = './Uploads/Weixin/';//定义保存路径            
            $dir = realpath(C('WEIXIN_UPLOAD')).'/'.date('Y_m_d').'/';//为方便管理图片 保存图片时 已时间作一层目录作区分
            if(!file_exists($dir)){
                mkdir($dir,'0777');
            }
            $Weixin = new \Weixin\Controller\BaseController();
            $pic_url = $Weixin->WechatAuth->mediaGet($pic_id); //获取服务器图片路径
            $time = time().substr($pic_id, 9,3);
            $filename = 'wx_'.$time.'.jpg';   //定义图片文件名
            $Http = new \Org\Net\Http;
            if($Http::curlDownload($pic_url,$dir.$filename)){//http下载图片
                $this->success('提交成功',U('index'));
            }   
   	
?>