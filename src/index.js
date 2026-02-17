import express from "express";
import * as dotenv from "dotenv";
import { pets } from "./pets";
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




















const port = process.env.PORT
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})