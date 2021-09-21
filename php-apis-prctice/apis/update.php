<?php
include_once './config/database.php';
include_once './config/authguard.php';
$data = json_decode(file_get_contents("php://input"));
// print_r($data);
$id = $data->id;
// $userid=$data->userid;
$title=$data->title;
$description = $data->description;
// $current = date('Y-m-d H:i:s');
   $qry = "UPDATE `activities` SET `title`='".$title."' , `description`='".$description."' WHERE `id`=".$id;
   $exe= mysqli_query($con,$qry);
   if ($exe) {
       echo json_encode(array(
        'mesage'=>'update successfully'
       ));
       
   }else{
       echo json_encode(array(
        'message'=>'update unsuccessfully'
       ));
   }




?>