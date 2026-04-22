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
}
