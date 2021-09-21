<?php
include_once './config/database.php';

$data = json_decode(file_get_contents('php://input'));
$userid = $data->userid;
$qry1=mysqli_query($con,"SELECT 
                        `users`.`name` AS `name`,
                        `activities`.`id` AS `id`,
                        `activities`.`title` AS `title`,
                        `activities`.`description` AS `description`

                            FROM `activities`,`users`

                                    WHERE `users`.`id`=`activities`.`userid` AND `userid`=".$userid);
$details=[];
while($row=mysqli_fetch_array($qry1)){
        $details[]=array(
            'id'=>$row['id'],
            'title'=>$row['title'],
            'description'=>$row['description'],
            'name'=>$row['name']
        );
        
}
    

echo json_encode(array(
    "messsage"=>"success",
    'data'=>$details
    ));
    //
?>