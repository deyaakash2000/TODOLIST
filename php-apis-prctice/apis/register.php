<?php
include_once './config/database.php';

$data = json_decode(file_get_contents('php://input'));
// print_r($data);die();
$name = $data->name;
$phone = $data->phone;
$password = $data->password;
$city = $data->city;
$qry1=mysqli_query($con,"SELECT `id` FROM `users` WHERE `phone`='".$phone."'");
// $exe = mysqli_query($con,$qry);
$num = mysqli_num_rows($qry1);
// echo($num);die();
if($name && $phone && $password && $city){
if($num === 0){
        $qry = "INSERT INTO`users` VALUES ('','".$name."','".$phone."','".$password."','".$city."')";
        $exe = mysqli_query($con,$qry);
        if($exe) {
            echo json_encode(array(
                "message"=>"successfully store"
            ));
        }else{
            echo json_encode(array(
                "message"=>"unable to store"
            ));
        }
    
}else{
    echo json_encode(array(
        "messsage"=>"email exist"
    ));
}
}else{

}
?>