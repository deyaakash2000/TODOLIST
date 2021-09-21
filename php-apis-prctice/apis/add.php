<?php
include_once './config/database.php';
include_once './config/authguard.php';
$data = json_decode(file_get_contents("php://input"));
// print_r($data);
$userid=$data->userid;
$title=$data->title;
$description = $data->description;
$current = date('Y-m-d H:i:s');
if ($description&& $title) {
    $qry="INSERT INTO `activities` VALUES ('','".$userid."','".$title."','".$description."','".$current."')";
$exe = mysqli_query($con,$qry);
if ($exe) {
    echo json_encode(array(
        'message'=>'success'
    ));
}else{
    echo json_encode(array(
        'message'=>'unsuccess'
    ));
}

}else{
    
}


?>