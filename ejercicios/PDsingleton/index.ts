import Singleton from "./singleton";

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(`A y B son iguales? ${a === b}`);
