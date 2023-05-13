<?php
class controller extends user
{
    private $f_name;
    private $l_name;
    private $email;

    private $user_name;

    private $password;
    private $specialty="";

    public function __construct($f_name,$l_name,$user_name,$email,$password,$specialty)
    {
        $this->f_name=$f_name;
        $this->l_name=$l_name;
        $this->user_name=$user_name;
        $this->email=$email;
        $this->password=$password;
        if($specialty!='')
        {
            $this->specialty=$specialty;
        }
    }
    
    public function new_paient()
    {
        return $this->create_patient($this->f_name,$this->l_name,$this->user_name,$this->email,$this->password);
    } 
    public function new_doctor()
    {
        return $this->create_doctor($this->f_name,$this->l_name,$this->user_name,$this->email,$this->password,$this->specialty);
    } 
}