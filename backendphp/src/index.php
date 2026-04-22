<?php

// Configurando CORS
header("Access-Control-Allow-Origin: *");



require_once './config/DbConfig.php';
require_once './controllers/MedicoController.php';

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

if($uri == "/api/v1/medicos" && $method === "GET"){
    $controller = new MedicoController();
    $doctors = [];

    http_response_code(200);
    $controller->getAll();
    return;
} else if ($uri == "/api/v1/medicos" && $method === "POST"){
    echo "Inciando cadastrar médico";
}else {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode([
        "msg" => "Rota nao encontrada"
    ]);
}