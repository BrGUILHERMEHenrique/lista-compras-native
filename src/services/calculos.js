class Calculos {
    valor = 0;

    multiplicaValorDoItem(valor, qtd){
        if (qtd > 1){
            return (valor * qtd);
        } else {
            return valor;
        }
    }

    subtrairValor(valor, qtd){
        this.valor -= this.multiplicaValorDoItem(valor, qtd);;
    }

    somaValor(valor, qtd){
        this.valor += this.multiplicaValorDoItem(valor, qtd);
    }

    retornaValorTotal(){
        return this.valor;
   } 
}

export default Calculos;