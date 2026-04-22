<?php

// Configurando CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if($_SERVER['REQUEST_METHOD'] === "OPTIONS"){
    http_response_code(200);
    exit;
}


require_once './src/config/DbConfig.php';
require_once './src/controllers/MedicoController.php';

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if($uri == "/api/v1/medicos" && $method === "GET"){
    $controller = new MedicoController();

    $controller->getAll();
    return;
} else if ($uri == "/api/v1/medicos" && $method === "POST"){
    $controller = new MedicoController();

    $data = json_decode(file_get_contents("php://input"), true);

    $controller->add($data);
    return;
}else {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode([
        "msg" => "Rota nao encontrada"
    ]);
}
        