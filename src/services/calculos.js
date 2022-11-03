class Calculos {
    valor = 0;
    qtdCalculo = 0;

    multiplicaValorDoItem(valor, qtd){
        console.log('qtd calculo: ', qtd);
        this.qtdCalculo = qtd;
        // this.qtdCalculo = parseInt(qtd.replace(/[^0-9]/g, ""));
        
        if (this.qtdCalculo > 1){
            console.log(parseInt(valor));
            console.warn('this: ', this.qtdCalculo);
            return (parseInt(valor) * this.qtdCalculo);
        } else {
            return valor;
        }
    }

    subtrairValor(valor, qtd){
        this.valor -= this.multiplicaValorDoItem(valor, qtd);
    }

    somaValor(valor, qtd){
        this.valor += this.multiplicaValorDoItem(valor, qtd);
    }

    retornaValorTotal(){
        return this.valor;
   } 
}

export default Calculos;