class Pacientes{
    constructor(context){
        this.context = context
    }

    async getAll(){
        try{
            const query = "SELECT * FROM pacientes";
            const [rows] = await this.context.query(query);
            return rows;

        } catch(err){
            console.error(err);
            throw err;
        }
    }
}

module.exports = () => {
    return Pacientes;
}
