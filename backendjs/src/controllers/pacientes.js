module.exports.getAll = async (app, req, res) => {
    try{
        const context = app.config.db_config;
        const Pacientes = new app.src.models.Pacientes(context);
        const response = await Pacientes.getAll();
        res.status(200).json(response);
    } catch(err) {
        res.status(500).json(err);
        return;
    }
}

module.exports.add = (app, req, res) => {
    res.send("Adicionando novo paciente");
    return;
}

