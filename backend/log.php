<?php
header('Content-Type: application/json');
include_once "../backend/class/DBS.class.php";
include_once "../backend/class/user.class.php";
include_once "../backend/class/view.class.php";
if($_SERVER['REQUEST_METHOD']=="POST")
{
    $user=new view;
    $user->log_in($_POST['type'],$_POST['user_name'],$_POST['password']);
}