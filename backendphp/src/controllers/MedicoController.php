<?php

require_once 'config/DbConfig.php';
require_once 'repositories/MedicoRepository.php';

class MedicoController{
    public function getAll(){
        $db = new DbConfig();
        $conn = $db->connect();

        $repository = new MedicoRepository($conn);
        $doctors = $repository->getAll();

        header('Content-Type: application/json');

        echo json_encode($doctors);
        return;
    }
}