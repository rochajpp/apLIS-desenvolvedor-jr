<?php
class MedicoRepository{
    private $conn;

    public function __construct($conn){
        $this->conn = $conn;
    }

     public function getAll(){
        $query = "SELECT * FROM medicos";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function add($data){
        $query = "INSERT INTO medicos (Nome, CRM, UFCRM) VALUES (:nome, :CRM, :UFCRM)";

        $stmt = $this->conn->prepare($query);

        $stmt->bindValue(":nome", $data["nome"]);
        $stmt->bindValue(":CRM", $data["CRM"]);
        $stmt->bindValue(":UFCRM", $data["UFCRM"]);

        return $stmt->execute();
    }
}
