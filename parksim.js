class ParkSim {

    constructor(){
        this.valorPorMinutos = 0.0333;
    }

    inserirValor(valor){
        this.valorInserido = valor;
    }

    calcularMinutos(){

        let minutos =  Math.floor(this.valorInserido / this.valorPorMinutos);

        if (minutos > 120) {
            minutos  = 120;
        }
      
        return minutos
    }

    calculaTroco(){
        let custoTotal = this.calcularMinutos() * this.valorPorMinutos;

    if (this.calcularMinutos() === 120) {
        custoTotal = 3.00;
    }

    const troco = this.valorInserido - custoTotal;
    return troco.toFixed(2).replace('.', ',');

    }

    respostaMinutos(){
        let minutos = this.calcularMinutos();
        
        if (this.calcularMinutos() >= 30){
            document.getElementById("tempo").textContent = `Você esta liberado por ${minutos} minutos.`;
        }
        else document.getElementById("tempo").textContent = `Valor insuficiente`;
    }

    respostaTroco(){
        let troco = this.calculaTroco();

        if (this.calcularMinutos() >= 30){
            document.getElementById("troco").textContent = `Seu troco esta aqui: R$:${troco}`;
        }

        else document.getElementById("troco").textContent = ` `;

    }
}

function calcularTempo(){

    const valor = Number(document.getElementById("valor").value);

    const maquina = new ParkSim();

    maquina.inserirValor(valor);

    maquina.respostaTroco();
    maquina.respostaMinutos();

    document.getElementById("valor").value = "";

}

