let tab: number []= [1,2,3,4,5,6,7,9,10];
//for (let i = 0; i < tab.length; i++) {
    //if (tab[i] % 2 === 0){
       // console.log(`${tab[i]} est un nombre pair`);
    //}
//}

//let tabFiltre:number []=tab.filter((e) => e % 2 ===0);
//console.log("Nombres pairs:", tabFiltre);

//let tabfind: number =tab.find ((e) => e > 6)!;
//console.log("Premier nombre > 6:", tabfind);
import { format } from "date-fns";

let employes: {id: number; nom: string; prenom: string; datenaiss: Date; salaire: number; sexe: string}[] = [ 
    {id:1, nom:"Maiga", prenom:"Aminata", datenaiss:new Date("1990-05-15"), salaire: 50000, sexe: "f"},
    {id:2, nom:"Toure", prenom:"Moussa", datenaiss:new Date("1985-10-20"), salaire: 60000, sexe: "M"},
    {id:3, nom:"Sow", prenom:"Fatoumata", datenaiss:new Date("1992-03-25"), salaire: 55000, sexe: "f"},
    {id:4, nom:"Keita", prenom:"Ibrahim", datenaiss:new Date("1988-07-30"), salaire: 70000, sexe: "M"},
];

// 1️⃣ Total des salaires
let totalSalaire: number = employes.reduce((s, c) => s + c.salaire, 0);
console.log("Total des salaires:", totalSalaire);

// 2️⃣ Filtrer les employées femmes
let empFemme = employes.filter(e => e.sexe.toLowerCase() === "f");
console.log("Employées femmes:", empFemme);

// 3️⃣ Total des salaires des femmes
let totalSalaireFemmes: number = empFemme.reduce((s, c) => s + c.salaire, 0);
console.log("Total des salaires des femmes:", totalSalaireFemmes);
