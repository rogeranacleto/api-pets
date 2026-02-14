import randomUUID from "crypto"
export const pets = [
  {
    id: randomUUID(),
    nome: "Spike",
    raca: "SRD",
    idade: 15,
    nomeTutor: "Roger",
  },
  {
    id: randomUUID(),
    nome: "Bob",
    raca: "Pinscher",
    idade: 8,
    nomeTutor: "Carina",
  },
  {
    id: randomUUID(),
    nome: "Clei",
    raca: "Pitbull",
    idade: 10,
    nomeTutor: "Noe",
  },
  {
    id: randomUUID(),
    nome: "Mel",
    raca: "Pug",
    idade: 3,
    nomeTutor: "Clara",
  },
  {
    id: randomUUID(),
    nome: "Thor",
    raca: "Golden Retriever",
    idade: 8,
    nomeTutor: "Regis",
  },
  {
    id: randomUUID(),
    nome: "Shiva",
    raca: "Chihuahua",
    idade: 15,
    nomeTutor: "Eliana",
  },
];