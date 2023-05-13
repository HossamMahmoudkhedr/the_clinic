<?php
class user extends DBS
{
    protected function create_patient($f_name,$l_name,$user_name,$password,$email)
    {
        $query="SELECT user_name FROM patient WHERE user_name= ? LIMIT 1";
        $stm=$this->connect()->prepare($query);
        $stm->execute([$user_name]);
        $num=$stm->rowCount();
        if($num>0)
        {
            return false;
        }
        else
        {
            $password=password_hash($password,PASSWORD_DEFAULT);
            $query="INSERT INTO patient (f_name,l_name,user_name,password,email) VALUES(?,?,?,?,?)";
            $stm=$this->connect()->prepare($query);
            $stm->execute([$f_name,$l_name,$user_name,$password,$email]);
            return true;
        }
        
    }
    protected function create_doctor($f_name,$l_name,$user_name,$password,$email,$specialty)
    {
        $query="SELECT user_name FROM doctor WHERE user_name= ? LIMIT 1";
        $stm=$this->connect()->prepare($query);
        $stm->execute([$user_name]);
        $num=$stm->rowCount();
        if($num>0)
        {
            return false;
        }
        else
        {
            $password=password_hash($password,PASSWORD_DEFAULT);
            $query="INSERT INTO doctor (f_name,l_name,user_name,password,email,specialty) VALUES(?,?,?,?,?,?)";
            $stm=$this->connect()->prepare($query);
            $stm->execute([$f_name,$l_name,$user_name,$password,$email,$specialty]);
            return true;
        }
        
    }
   protected function log_user($user_name,$password,$type)
    {
        $msg="";
        $table="";
        if($type=="doctor")
        {
            $table="doctor";
        }
        else
        {
            $table="patient";
        }
        $query="SELECT user_name , password FROM $table WHERE user_name= ? LIMIT 1";
        $stm=$this->connect()->prepare($query);
        $stm->execute([$user_name]);
        $num=$stm->rowCount();
        $result=$stm->fetch();
        if($num==0||!password_verify($password,$result['password']))
        {
            $msg=" incorrect username or paswword founded";
            return false ;
        }
        $result['password']="";
        $msg="Done";
        return $result ;
    }
    protected function paient_date($user_name)
    {
        $query="SELECT * FROM patient WHERE user_name= ? LIMIT 1";
        $stm=$this->connect()->prepare($query);
        $stm->execute([$user_name]);
       
        return $stm;
    }
    protected function doctor_date($user_name)
    {
        $query="SELECT * FROM doctor WHERE user_name= ? LIMIT 1";
        $stm=$this->connect()->prepare($query);
        $stm->execute([$user_name]);
       
        return $stm;
    }
/*
    protected function log_paient($user_name,$password)
    {
        $msg="";
        $query="SELECT user_name FROM patient WHERE user_name= ? LIMIT 1";
        $stm=$this->connect()->prepare($query);
        $stm->execute([$user_name]);
        $num=$stm->rowCount();
        $result=$stm->fetch();
        if($num>0||!password_verify($password,$result['password']))
        {
            $msg=" incorrect username or paswword founded";
            return false ;
        }
        $result['password']="";
        session_start();
        $_SESSION['user_name']=$result['user_name'];
        $_SESSION['type']='patient';
        $msg="Done";
        return $result ;
    }*/
}