<?php

require_once 'src/config/DbConfig.php';
require_once 'src/repositories/MedicoRepository.php';

class MedicoController{
    public function getAll(){
        try{
            $db = new DbConfig();
            $conn = $db->connect();

            $repository = new MedicoRepository($conn);
            $doctors = $repository->getAll();

            header('Content-Type: application/json');
            http_response_code(200);
            echo json_encode($doctors);
            return;
        } catch(Exception $err){
            http_response_code(505);
            echo json_encode([
                "msg" => "Erro ao obter medicos",
                "err" => $err.getMessage()
            ]);
            return;
        }
    }

    public function add($data){
        try{
            $db = new DbConfig();
            $conn = $db->connect();

            $repository = new MedicoRepository($conn);
            $repository->add($data);

            header("Content-Type: application/json");
            http_response_code(200);
            echo json_encode([
                "msg" => "Médico criado com sucesso"
            ]);
            return;
            
        } catch(Exception $err){
            http_response_code(505);
            echo json_encode([
                "msg" => "Erro ao obter medicos",
                "err" => $err.getMessage()
            ]);
            return;
        }
    }
}