<?php
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;


    $secret_key = $jwt_secret;
    $jwt = null;

    $data = json_decode(file_get_contents("php://input"));

    if(!isset(getallheaders()['Authorization'])) {
        echo json_encode(array(
                "message" => "Access denied.",
                "error" => "No Token Found"
            )
        );
        die();
    }
     $arr = explode(" ", getallheaders()['Authorization']);
    $jwt = $arr[1];

    if($jwt){

        try {

            $decoded = JWT::decode($jwt, $secret_key, array('HS256'));

            // Access is granted. Add code of the operation here 

            // echo json_encode(array(
            //     "message" => "Access granted:"
            // ));

        }catch (Exception $e){

            // http_response_code(401);

            echo json_encode(array(
                "message" => "Access denied.",
                "error" => $e->getMessage()
            ));
            die(); // stop execution
        }

    }
?>