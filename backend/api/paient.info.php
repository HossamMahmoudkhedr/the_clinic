<?php
session_start();
header('Access-Control-Allow-Origin *');
header('Content-Type:application/json');
include_once "../class/DBS.class.php";
include_once "../class/user.class.php";
include_once "../class/view.class.php";

if(isset($_COOKIE['logininfo']))
{
    $paient=new view();
    $result=$paient->paient_info($_SESSION['username']);
    $num=$result->rowCount();
    if($num>0)
    {
        $arr=array();
        $arr['user_info']=array();
        $row=$result->fetch();
        extract($row);
        $data=['user_name'=>$user_name,'f_name'=>$f_name,'l_name'=>$l_name,'email'=>$email];
        array_push($arr['user_info'],$data);
        echo json_encode($arr);
    }
    else
        {
            echo json_encode(['massage'=>'empty']);
        }
}
