# Solução teste Aplis-desenvolvedor-jr

<br/>
<br/>

# Sobre o projeto

Aplicação Fullstack com:
* Frontend SPA em React
* Backend em PHP (Para gerenciamento de dados de médicos)
* Backend em Node.js (Para gerenciamento de dados de pacientes)
* Banco de dados MySQL

O sistema permite 
* A listagem e cadastro de dados de pacientes
* A listagem e cadastro de dados de médicos

<br />
<br />

# Arquitetura

```
app/
backendjs/
backendphp/
db.sql
```

<br />
<br />

# Tecnologias

## Frontend
* React
* Axios
* React Router

## Backend PHP
* PHP (MVC)
* PDO

## Backend Node.js
* Node.js
* Express
* MySQL

## Banco de dados
* MySQL

<br />
<br />

# Como rodar o projetor

## Banco de dados
```
CREATE DATABASE aplis;
```

Executar o script:
```
/db.sql
```
## Backend PHP
```
cd backendphp
php -S localhost:8000
```

## Backend Node.js
```
    cd backendjs
    npm install
    node index.js
```

### .env
```
PORT_SERVER = "8080"

DB_HOST = "localhost"
DB_USER = "root="
DB_NAME = nome_do_banco
DB_PASS = senha

```

## Frontend
```
cd app
npm install
npm run dev
```

### .env

```
VITE_API_PATIENTS_URL = "http://localhost:8080/api/v1"
VITE_API_DOCTORS_URL = "http://localhost:8000/api/v1"
```

<br />
<br />

# Endpoints

## Médicos (PHP)
### GET
`/api/v1/medicos`

### POST
`/api/v1/medicos`

Body:
```
{
    "nome": "João",
    "CRM": "12345678"
    "UFCRM": "12345678",
}
```


## Pacientes (Node.js)
### GET
`/api/v1/pacientes`

### POST
`/api/v1/pacientes`

Body:
```
{
    "nome": "João",
    "dataNascimento": "2025-01-01",
    "carteirinha": "12345678"
    "cpf": "123.456.789-09",
}
```
