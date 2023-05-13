<?php
class view extends user
{

    
    
    public function log_in($accout_type,$user_name,$password)
    {
        $result=$this->log_user($user_name,$password,$accout_type);
        $password="";
        if($result==false)
        {
            header("Location:../log.html?error=incorrectdata");
            return;
        }
        session_start();
        $_SESSION['username']=$user_name;
        $_SESSION['type']=$accout_type;
        setcookie("logininfo",$accout_type,time()+3600*2,"/");
        header("Location:../ho.html");
    }
    public function paient_info($user_name)
    {
        return $this->paient_date($user_name);
    }
    public function doctor_info($user_name)
    {
        return $this->doctor_date($user_name);
    }

}