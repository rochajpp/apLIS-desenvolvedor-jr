<?php
    class Medico{
        private $Id;
        private $Nome;
        private $CRM;
        private $UFCRM;

        public function __construct($Id, $Nome, $CRM, $UFCRM){
            $this->Id = $Id;
            $this->Nome = $Nome;
            $this->CRM = $CRM;
            $this->UFCRM = $UFCRM;
        }
    }