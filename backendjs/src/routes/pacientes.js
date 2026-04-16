// Aqui o consign passa o próprio como parametro
module.exports = (app) => {
    app.get("/api/v1/pacientes", (req, res) => {
        app.src.controllers.pacientes.getAll(app ,req, res);
    });

    app.post("/api/v1/pacientes", (req, res) => {
        app.src.controllers.pacientes.add(app, req, res);
    })
}

