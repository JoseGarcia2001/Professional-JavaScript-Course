//Variables por tipo
// String
let person: string = "Person";
// number
let age: number = 32;
// boolean
let muted: boolean = true;

// ARRAYS
let people: string[] = [];
people = ["Martha", "Hugo"];
// ARRAYS VARIADOS
let peopleAndAges: Array<string | number> = [];
peopleAndAges = ["Pedro", 13];

// Enums como arrays con un valor en específico

enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green",
}

let favoriteColor: Color = Color.Blue;

//Any

let comodin: any = "hola";
comodin = {};
comodin = [];

//FUNCIONES EN TYPESCRIPT

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(3, 4);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

//De esta forma puedo retornar una función y especificar que valor
//se va a retornar de la función

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

//si quiero hacer argumentos opcionales o pasar alguno por omicion

function fullName(firstName: string, lastName: string = "Garcia"): string {
  return `My name is ${firstName} ${lastName}`;
}

fullName("Jose");

//INTERFACES EN TYPESCRIPT
enum Colorcito {
  Rojo = "Rojo",
  Verde = "Verde",
}
interface Rectangulo {
  ancho: number;
  alto: number;
  color: string;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Colorcito.Rojo,
};

function calcArea(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRec = calcArea(rect);
console.log(areaRec);

console.log(rect.toString());

rect.toString = function () {
  return `Un rectangulo ${this.color}`;
};

console.log(rect.toString());
