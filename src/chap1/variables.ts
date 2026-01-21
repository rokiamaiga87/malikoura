const age: number = 15;
const user: { name: string; age: number } = {
  name: "rokia",
  age: 15,
};
const pays: [string, string, number] = ["mali", "Bamako", 223];

interface user {
  name: string;
  age: number;
}

const u1: user = { name: "DIARRA", age: 17 };

enum Sexe {
  MASCULIN,   FEMININ,
}
const s1: Sexe = Sexe.MASCULIN;
console.log(age, pays, u1, s1);
