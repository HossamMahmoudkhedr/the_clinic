<?php
include_once "../backend/class/DBS.class.php";
include_once "../backend/class/user.class.php";
include_once "../backend/class/controller.class.php";
if($_SERVER['REQUEST_METHOD']=="POST")
{
    $user=new controller($_POST['f_name'],$_POST['l_name'],$_POST['user_name'],$_POST['password'],$_POST['email'],$_POST['specialty']);
    if($_POST['specialty']=='')
    {
        if($user->new_paient())
        {
            header("Location:../log.html");
        }
        else
        {
            header("Location:../index.html?error=usernamefounded");
        }
    }
    else
    {
        if($user->new_doctor())
        {
            header("Location:../log.html");
        }
        else
        {
            header("Location:../index.html?error=usernamefounded");
        }
    }


}
