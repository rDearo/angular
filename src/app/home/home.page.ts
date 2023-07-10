import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {

  contaExibicao: string = " "; // string que ira abrigar todos valores e operadores
  resultado: number = 0 // ira guarda o resultado das operações

  entradaDeComando(valor:any){ // função para recerbe os numeros e os operadores  
    this.contaExibicao += valor; // adiciona o valor recebido a string

    if(typeof valor === 'number'){ //realiza o calculo do resultado para exibir previa
      return this.resultado = eval(this.contaExibicao)
    }
  }

  calcular(){ //clique do botao =
    this.resultado = eval(this.contaExibicao) // atribui ao resultado o calculo das operações da string (eval transforma string em calculo)
    this.contaExibicao = this.resultado.toString(); 
  }

  deletarUltimoDigito(){
    this.contaExibicao = this.contaExibicao.slice(0, -1) //retira ultimo digito da string conta
    this.resultado = 0
  }

  AllClear(){ // função para limpar variavel conta e resultado
    this.resultado = 0
    this.contaExibicao = ""
  }
  
  porcentagem(){ //aplica porcentagem a conta
    this.contaExibicao += ("/100")
    return this.resultado = eval(this.contaExibicao)
  }

}
