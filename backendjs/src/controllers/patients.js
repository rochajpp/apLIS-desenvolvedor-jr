module.exports.getAll = async (app, req, res) => {
    try{
        const context = app.config.db_config;
        const Pacientes = new app.src.models.Pacientes(context);
        const response = await Pacientes.getAll();
        res.status(200).json(response);
        return;
    } catch(err) {
        res.status(500).json({
            msg: "Houve um erro ao obter pacientes",
            err: err
        });
        return;
    }
}

module.exports.add = async (app, req, res) => {
    try{
        const data = req.body;
        const context = app.config.db_config;
        const Pacientes = new app.src.models.Pacientes(context);
        const response = await Pacientes.add(data);
        res.status(200).json({
            msg: "Paciente cadastrado com sucesso", 
            res: response
        });
        return;
    } catch(err){
        res.status(500).json({
            msg: "Houve um erro ao cadastra paciente",
            err: err
        });
        return;
    }
}


