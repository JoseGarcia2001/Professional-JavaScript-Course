interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}
interface Observer {
  update: (data: any) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[];

  constructor() {
    this.observers = [];
    const el: HTMLInputElement = document.querySelector("#value");
    el.addEventListener("input", () => {
      this.notify(el.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });

    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;
  constructor() {
    this.el = document.querySelector("#price");
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

// setTimeout(() => {
//   value.unsubscribe(display);
// }, 5000);

console.log(value);
/**
 * observers        //array de tags vinculados
 * constructor()    //escucha el cambio en input y corre notify
 * subscribe()      //agrega tag al array observers
 * unsubscribe()    //quita tag del array observers
 * notify()         //manda a cada uno el valor
 */

console.log(display);
/**
 * el               //variable del tag de html
 * constructor()    //establece el tag de html en el
 * update()         //recibe un valor y lo imprime en el tag el
 */
