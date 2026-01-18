import { format } from "date-fns";
import { fr } from "date-fns/locale";
function greet (name:string) {  
    const d = format(new Date(), "EEEE dd MMMM HH:mm", { locale: fr });
  console.log(`Hello ${name}, on est le ${d}`);
}
greet('ROKIA'); 
greet('MALIKOURA'); 
