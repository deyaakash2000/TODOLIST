<?php
include_once './config/database.php';
include_once './config/authguard.php';
$data = json_decode(file_get_contents("php://input"));
// print_r($data);
$id = $data->id;
// $userid=$data->userid;
// $current = date('Y-m-d H:i:s');
   $qry = "DELETE FROM `activities` WHERE `id`=".$id;
   $exe= mysqli_query($con,$qry);
   if ($exe) {
       echo json_encode(array(
        'mesage'=>'delete successfully'
       ));
       
   }else{
       echo json_encode(array(
        'message'=>'delete unsuccessfully'
       ));
   }




?>