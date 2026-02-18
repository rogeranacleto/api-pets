import { pets } from "./pets.js";

export const validateFieldsPost = (req, res, next) => {
    try{
        const body = req.body;
        if (!body.name) {
            return res.status(400).send({
            ok: false,
            message: "O nome do pet precisa ser informado",
            });
        }
        if (!body.breed) {
            return res.status(400).send({
            ok: false,
            message: "A raça do pet deve ser informada",
            });
        }
        if (!body.age) {
            return res.status(400).send({
            ok: false,
            message: "A idade do pet precisa ser informada",
            });
        }
        if (!body.ownerName) {
            return res.status(400).send({
            ok: false,
            message: "O nome do tutor precisa ser informado",
            });
        }
        next();

    }catch(error){
        res.status(500).send({
            ok: false,
            message: `Erro no servidor ${error.toString()}`
        })
    }
}


export const validateFieldsPut = (req, res, next) => {
    try{
        const { id } = req.params;
        const pet = pets.find((item) => item.id === id);
        if (!pet) {
            return res.status(404).send({
            ok: false,
            message: "Pet nao encontrado, verifique e tente novamente",
            });
        }
        next();
    }catch(error){
        res.status(500).send({
            ok: false,
            message: `Erro no servidor ${error.toString()}`
        })
    }
}