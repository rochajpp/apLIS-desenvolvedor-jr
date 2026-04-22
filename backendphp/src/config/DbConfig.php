<?php

class DbConfig{
    private $host = "localhost";
    private $name = "aplis";
    private $user = "root";
    private $pass = "root";

    public function connect(){
        try{
            $conn = new PDO(
                "mysql:host={$this->host};dbname={$this->name};charset=utf8",
                $this->user,
                $this->pass
            );

            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $conn;
        } catch(PODException $err){
            http_response_code(505);
            echo json_encode([
                "msg" => "Erro ao tentar realizar a conexão",
                "err" => $e.getMessage()
            ]);
            return;
        }
    }
}