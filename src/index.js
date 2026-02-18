import express from "express";
import { randomUUID } from "crypto";
import * as dotenv from "dotenv";
import { pets } from "./pets.js";
import { validateFieldsPost } from "./middlewares.js";
import { validateFieldsPut } from "./middlewares.js";
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

app.post("/pets", [validateFieldsPost], (req, res) => {
  try {
    const body = req.body;
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
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: `Erro no servidor ${error.toString()}`,
    });
  }
});

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

app.put("/pets/:id", [validateFieldsPut], (req, res) => {
  try {
    const { id } = req.params;
    const { name, breed, age, ownerName } = req.body;
    const pet = pets.find((item) => item.id === id);
    pet.name = name;
    pet.breed = breed;
    pet.age = age;
    pet.ownerName = ownerName;

    res.status(200).send({
      ok: true,
      message: "Pet atualizado com sucesso",
      pet,
      data: pets,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      message: `Erro no servidor ${error.toString()}`,
    });
  }
});

app.patch("/pets/:id", (req, res) => {
    try{
        const { id } = req.params;
        const pet = pets.find((item) => item.id === id);
        if (!pet) {
            return res.status(404).send({
            ok: false,
            message: "Pet nao encontrado",
            });
        }

        pet.registration = !pet.registration;
        res.status(200).send({
            ok: true,
            message: "Matricula alterada com sucesso",
        });
    }catch(error){
        res.status(500).send({
            ok: false,
            message: `Erro no servidor ${error.toString()}`
        })
    }
})

app.delete("/pets/:id", (req, res) => {
    try{
        const { id } = req.params;
        const pet = pets.find((item) => item.id === id);
        if (!pet) {
            return res.status(404).send({
            ok: false,
            message: "Pet nao encontrado, verifique e tente novamente",
            });
        }

        const petIndex = pets.indexOf((item) => item.id === id)
        pets.splice(petIndex, 1);
        res.status(200).send({
            ok: true,
            message: "Pet deletado com sucesso da lista",
            dataPets: pets
        })

    }catch(error){
        res.status(500),send({
            ok: false,
            message: `Erro no servidor ${error.toString()}`
        })
    }
})  

const port = process.env.PORT
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})