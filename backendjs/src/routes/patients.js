// Aqui o consign passa o próprio como parametro
module.exports = (app) => {
    app.get("/api/v1/pacientes", (req, res) => {
        app.src.controllers.patients.getAll(app ,req, res);
    });

    app.post("/api/v1/pacientes", (req, res) => {
        app.src.controllers.patients.add(app, req, res);
    })
}

