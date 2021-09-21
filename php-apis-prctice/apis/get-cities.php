<?php
include_once './config/database.php';

// $data = json_decode(file_get_contents('php://input'));
// print_r($data);die();
$qry1=mysqli_query($con,"SELECT * FROM `cities` WHERE `status`='active'");
$citise=[];
while($row=mysqli_fetch_array($qry1)){
        $citise[]=array(
            'id'=>$row['id'],
            'name'=>$row['name'],
            'status'=>$row['status']
        );
}
    

echo json_encode(array(
    "messsage"=>"success",
    'data'=>$citise
    ));

?>