<?php
namespace School_admin\Controller;
use Think\Controller;
class ImageController extends CommonController {
    public function __construct()
    {
        parent::__construct();
    }
    public function edit_public(){
        if(IS_POST){
            $data=I('post.');
            if($data['image_id']==null){
                $this->error("请选中图片",'',1);
            }
            for($i=0;$i<count($data['image_id']);$i++){
                $condition[$i]['image_id']=$data['image_id'][$i];
            }
            for($i=0;$i<count($condition);$i++){
                $image[$i]=M('Image')->where($condition[$i])->select();
            }
            $j=0;
            for($i=0;$i<count($image);$i++){
                if ($image[$i][0]['image_public']==0){
                    $data_arry['image_public']=1;
                }
                if ($image[$i][0]['image_public']==1){
                    $data_arry['image_public']=0;
                }
                $j=$j+count(M('Image')->where($image[$i])->save($data_arry));
            }
            if($j==count($data['image_id'])){
                $this->success('修改成功');
            }

        }
    }

    public function public_show(){
        $condition['image_public']=0; 
        $not_show=M('Image')->where($condition)->select();
        for($i=0;$i<count($not_show);$i++){
            if($not_show[$i]['image_area_id']==1){
                $condition1['id']=$not_show[$i]['image_content_id'];
                $content=M('Skill')->where($condition1)->find();
                $not_show[$i]['content']=$content;
            }else if($not_show[$i]['image_area_id']==3){
                $condition2['id']=$not_show[$i]['image_content_id'];
                $content=M('Activity')->where($condition2)->find();
                $not_show[$i]['content']=$content;
            }else if ($not_show[$i]['image_area_id']==5){
                $condition3['id']=$not_show[$i]['image_content_id'];
                $content=M('Club')->where($condition3)->find();
                $not_show[$i]['content']=$content;
            }
        }
        $condition['image_public']=1;
        $on_show=M('Image')->where($condition)->select();
        for($i=0;$i<count($on_show);$i++){
            if($on_show[$i]['image_area_id']==1){
                $condition4['id']=$on_show[$i]['image_content_id'];
                $content=M('Skill')->where($condition4)->find();
                $on_show[$i]['content']=$content;
            }else if($on_show[$i]['image_area_id']==3){
                $condition5['id']=$on_show[$i]['image_content_id'];
                $content=M('Activity')->where($condition5)->find();
                $on_show[$i]['content']=$content;
            }else if ($on_show[$i]['image_area_id']==5){
                $condition6['id']=$on_show[$i]['image_content_id'];
                $content=M('Club')->where($condition6)->find();
                $on_show[$i]['content']=$content;
            }
        }
        $this->assign('not_show',$not_show);
        $this->assign('on_show',$on_show);
        $this->display();
    }
    
    public function delete_image(){
        if (IS_GET) {
            $data['image_id']=I('get.image_id');
            $image=M('Image')->where($data)->find();
            $path="./".$image['image'];
            if(unlink($path)){
            if(M('Image')->where($data)->delete() ){
                $this->success('删除成功','http://admin.lizi123.cn/index.php/Admin/Image/content');
            }else {
                $this->error('删除失败');
            }
            }else {
                $this->error('删除失败');
            }
        }
    }
    public function edit_content(){
        if(IS_POST){
            $data=I('post.');
//             echo "<pre>";
//             var_dump($data);
//             echo  "<pre>";
//             exit();
            if(D('Image')->edit_content($data)==1){
                $this->success('指定成功','content');
            }else if(D('Image')->edit_content($data)==2){
                $this->error('请指定内容');
            }
        }else{
            $data=I('get.');
            $image=M('Image')->where($data)->find();
            $this->assign('image',$image);
            if($image['image_area_id']==1){
                if($image[image_content_id]!=null){
                    $data_arry['id']=$image[image_content_id];
                    $data=M('Skill')->where($data_arry)->find();
                    $this->assign('mess',$data);
                }
                $skill=M('Skill')->select();
                $this->assign('content',$skill);
            }else if($image['image_area_id']==2){
                if($image[image_content_id]!=null){
                    $data_arry['id']=$image[image_content_id];
                    $data=M('Document')->where($data_arry)->find();
                    $this->assign('mess',$data);
                }
                $document=M('Document')->select();
                $this->assign('content',$document);
            }else if($image['image_area_id']==3){
                if($image[image_content_id]!=null){
                    $data_arry['id']=$image[image_content_id];
                    $data=M('Activity')->where($data_arry)->find();
                    $this->assign('mess',$data);
                }
                $activity=M('Activity')->select();
                $this->assign('content',$activity);
            }else if($image['image_area_id']==5){
                if($image[image_content_id]!=null){
                    $data_arry['id']=$image[image_content_id];
                    $data=M('Club')->where($data_arry)->find();
                    $this->assign('mess',$data);
                }
                $club=M('Club')->select();
                $this->assign('content',$club);
            }
            $this->display();
        }
    }
    //内容分配
    public function content(){
        $image=M('Image')->order('image_id desc')->select();
        $this->assign('image',$image);
        $this->display();
    }
    
    
public function upload(){
    $upload = new \Think\Upload();// 实例化上传类
    $data=I('post.');
//     var_dump($data);
//     exit();
    $upload->maxSize   =     3145728 ;// 设置附件上传大小
    $upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
    $upload->rootPath  =     './public/Image/'; // 设置附件上传根目录
    $upload->savePath  =     ''; // 设置附件上传（子）目录
    $upload->saveName = array('uniqid'); //设置文件上传名称，采用uniqid函数生成一个唯一的字符串序列
    $upload->saveRule = "time"; //设置文件夹上传名称（按照时间）
    // 上传文件 
$info   =   $upload->upload();
if(!$info) {// 上传错误提示错误信息
    $this->error($upload->getError());
}else{// 上传成功 获取上传文件信息
    foreach($info as $file){
//         echo $file['rootpath'].$file['savepath'].$file['savename'];
        $root="/public/Image/";
        $file['filepath'] = $root.$file['rootpath'] . $file['savepath'] . $file['savename'];    
    }
    $data['image']=$file['filepath'];
    if(D('Image')->add_image($data)==1){
        $this->success('添加成功','show_image');
    }
}
}

public function up(){
    $school=M('School')->join('qj_city on qj_school.city_id = qj_city.city_id', 'left')->join('qj_province on qj_province.province_id=qj_city.province_id','left')->order('province_name,city_name')->select();
    $area=M('Area')->select();
    $this->assign('area',$area);
    $this->assign('school',$school);
    $this->display();
}
   

    
    public function show_image(){
        echo "<pre>";
        var_dump($_SESSION);
        echo "<pre>";
        $school=M('School')->select();
        $this->assign('school',$school);
        $this->display();
    }
    
    //
    public function school_image(){
        $condition['school_id']=$_SESSION['school_id'];
            $condition['image_index']=0;
            $school=M('School')->where($condition)->find();
            $not_show=M('Image')->where($condition)->select();
            for($i=0;$i<count($not_show);$i++){
                if($not_show[$i]['image_area_id']==1){
                    $condition1['id']=$not_show[$i]['image_content_id'];
                    $content=M('Skill')->where($condition1)->find();
                    $not_show[$i]['content']=$content;
                }else if($not_show[$i]['image_area_id']==3){
                    $condition2['id']=$not_show[$i]['image_content_id'];
                    $content=M('Activity')->where($condition2)->find();
                    $not_show[$i]['content']=$content;
                }else if ($not_show[$i]['image_area_id']==5){
                    $condition3['id']=$not_show[$i]['image_content_id'];
                    $content=M('Club')->where($condition3)->find();
                    $not_show[$i]['content']=$content;
                }
            }
            $condition['image_index']=1;
            $on_show=M('Image')->where($condition)->select();
            for($i=0;$i<count($on_show);$i++){
                if($on_show[$i]['image_area_id']==1){
                    $condition4['id']=$on_show[$i]['image_content_id'];
                    $content=M('Skill')->where($condition4)->find();
                    $on_show[$i]['content']=$content;
                }else if($on_show[$i]['image_area_id']==3){
                    $condition5['id']=$on_show[$i]['image_content_id'];
                    $content=M('Activity')->where($condition5)->find();
                    $on_show[$i]['content']=$content;
                }else if ($on_show[$i]['image_area_id']==5){
                    $condition6['id']=$on_show[$i]['image_content_id'];
                    $content=M('Club')->where($condition6)->find();
                    $on_show[$i]['content']=$content;
                }
            }
            $this->assign('school',$school);
            $this->assign('image0',$not_show);
            $this->assign('image1',$on_show);
            $this->display();
        }


    
    
    public function edit_image(){
        if(IS_POST){
            $data=I('post.');    
            if($data['image_id']==null){
                $this->error("请选中图片",'',1);
            }
            for($i=0;$i<count($data['image_id']);$i++){
                $condition[$i]['image_id']=$data['image_id'][$i];
            }
            for($i=0;$i<count($condition);$i++){
            $image[$i]=M('Image')->where($condition[$i])->select();
            }
            $j=0;
            for($i=0;$i<count($image);$i++){
                if ($image[$i][0]['image_index']==0){
                $data_arry['image_index']=1;
                }
                if ($image[$i][0]['image_index']==1){
                    $data_arry['image_index']=0;
                }
                $j=$j+count(M('Image')->where($image[$i])->save($data_arry));
            }
            if($j==count($data['image_id'])){
                $this->success('修改成功','school_image/school_id/'.$data['school_id'].'.html');
            }
           
        }
    }
}