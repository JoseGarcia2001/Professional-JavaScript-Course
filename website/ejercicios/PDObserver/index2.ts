interface Observado {
  suscrbibirse: (observado: Observador) => void;
  desuscribirse: (observador: Observador) => void;
}

interface Observador {
  actualizarContenido: (info: any) => void;
}

class ObjetoObservado implements Observado {
  subscritos: Observador[];

  constructor() {
    this.subscritos = [];
    const inputObservado: HTMLInputElement = document.querySelector(
      "#observado"
    );
    inputObservado.addEventListener("input", () => {
      this.avisarDeActualizacion(inputObservado.value);
    });
  }

  suscrbibirse(subscriptor: Observador) {
    this.subscritos.push(subscriptor);
  }

  desuscribirse(subscriptor: Observador) {
    const index = this.subscritos.findIndex((subscripto) => {
      return subscripto === subscriptor;
    });

    this.subscritos.slice(index, 1);
  }

  avisarDeActualizacion(data: any) {
    this.subscritos.forEach((subscrito) => subscrito.actualizarContenido(data));
  }
}

class ObjetoObservador implements Observador {
  private elementoObservador: HTMLElement;
  constructor() {
    this.elementoObservador = document.querySelector("#Observador");
  }

  actualizarContenido(data: any) {
    this.elementoObservador.innerText = data;
  }
}

const observado: ObjetoObservado = new ObjetoObservado();
const observador: ObjetoObservador = new ObjetoObservador();

observado.suscrbibirse(observador);
