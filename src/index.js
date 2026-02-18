import express from "express";
import { randomUUID } from "crypto";
import * as dotenv from "dotenv";
import { pets } from "./pets.js";
const app = express();
app.use(express());
app.use(express.json())
dotenv.config();

app.get("/pets", (req, res) => {
    try{
        const { name, breed, age, ownerName } = req.query;
        let data = pets;
        if (name) {
            data = data.filter((item) => item.name === name);
        }
        if (breed) {
            data = data.filter((item) => item.breed === breed);
        }
        if (age) {
            data = data.filter((item) => item.age === age);
        }
        if (ownerName) {
            data = data.filter((item) => item.ownerName === ownerName);
        }

        return res.status(200).send({
            ok: true,
            message: "Pets listados com sucesso.",
            data
        })

    }catch(error){
        return res.status(500).send({
            ok: false,
            message: `Erro no servidor ${error.toString()}`
        })
    }
})


app.post("/pets", (req, res) => {
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

        const newPet = {
            id: randomUUID(),
            name: body.name,
            breed: body.breed,
            age: body.age,
            ownerName: body.ownerName,
        };
        pets.push(newPet);
        
        res.status(201).send({
            ok: true,
            message: "Novo pet criado com sucesso",
            newPet,
        });

    }catch(error){
        res.status(500).send({
          ok: false,
          message: `Erro no servidor ${error.toString()}`,
        });
    }

})

app.get("/pets/:id", (req, res) => {
    try{
        const { id } = req.params;
        const getPet = pets.find((item) => item.id === id);
        if(!getPet){
            res.status(404).send({
                ok: false,
                message: "Pet nao encontrado, verifique e tente novamente"
            })
        }
        res.status(200).send({
            ok: true,
            message: "Pet encontrado com sucesso",
            petData: getPet
        })
    }catch(error){
        res.status(500).send({
            ok: false,
            message: `Erro no servidor ${error.toString()}`
        })
    }

})
const port = process.env.PORT
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})