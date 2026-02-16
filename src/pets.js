import randomUUID from "crypto"
export const pets = [
  {
    id: randomUUID(),
    name: "Spike",
    breed: "SRD",
    age: 15,
    ownerName: "Roger",
  },
  {
    id: randomUUID(),
    name: "Bob",
    breed: "Pinscher",
    age: 8,
    ownerName: "Carina",
  },
  {
    id: randomUUID(),
    name: "Clei",
    breed: "Pitbull",
    age: 10,
    ownerName: "Noe",
  },
  {
    id: randomUUID(),
    name: "Mel",
    breed: "Pug",
    age: 3,
    ownerName: "Clara",
  },
  {
    id: randomUUID(),
    name: "Thor",
    breed: "Golden Retriever",
    age: 8,
    ownerName: "Regis",
  },
  {
    id: randomUUID(),
    name: "Shiva",
    breed: "Chihuahua",
    age: 15,
    ownerName: "Eliana",
  },
];