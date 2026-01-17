import { format } from "date-fns/format";
import { fr } from "date-fns/locale";
function greet(name) {
    const d = format(new Date(), "EEEE dd MMMM HH:mm", { locale: fr });
    console.log(`Hello ${name}, on est le ${d}`);
}
greet('ROKIA');
greet('MALIKOURA');
//# sourceMappingURL=greeting.js.map