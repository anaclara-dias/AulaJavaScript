function exercicio1()
{
  let numero1 = document.getElementById("numero1").value;
    
  let quadrado = Number(numero1) * Number(numero1);
  let cuboN = Number(numero1) * Number(numero1) * Number(numero1);

 document.getElementById("mensagem").innerHTML = "<p> O numero digitado foi " + numero1 +
                                                    "<br>O quadrado é " + quadrado + 
                                                    "<br>O cubo é " + cuboN +
                                                    "</p>";
}

function exercicio2()
{
 let temperatura = document.getElementById("temperatura").value;

 let conversao = (Number(temperatura) - Number(32)) * 5/9;

 document.getElementById("mensagem").innerHTML = "<p> A temperatura em graus Fahrenheit foi" + temperatura +
                                                    "<br>A temperatura em graus Fahrenheit é " + conversao + 
                                                    "</p>";
}

function exercicio3()
{
  let valor = document.getElementById("valor").value;
  let taxa = document.getElementById("taxa").value;
  let tempo = document.getElementById("tempo").value;

  let valorP = Number(valor) + Number(valor) * Number(taxa) * 2/100 * Number(tempo);
  
  document.getElementById("mensagem").innerHTML = "<p> Valores informados" +
                                                   "<br> Valor = " + valor +
                                                   "<br> taxa =" + taxa +
                                                   "<br> tempo =" + tempo +
                                                   "<br> O valor atualizado é: " + valorP +
                                                   "</p>";
                                                   
}


function exercicio4()
{
  let valorB = document.getElementById("valorB").value;
  let valorA = document.getElementById("valorA").value;

  let area = Number(valorB) * Number(valorA) / 2;

  document.getElementById("mensagem").innerHTML = "<p> Base = " + valorB +
                                                  "<br> Altura = " + valorA +
                                                  "<br> A area do triangulo é: " + area +
                                                  "</p>";
}

function exercicio5()
{
  let valorL = document.getElementById("valorL").value;
   
  let valorQ = Number(valorL) * Number(valorL);

  document.getElementById("mensagem").innerHTML = "<p> o lado do quadrado é = " + valorL +
                                                  "<br> A area do quadrado é: " + valorQ +
                                                  "</p>";
}
  
function exercicio6()
{
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

   if (num1 == num2){
    document.getElementById("mensagem").innerHTML = "Os números são iguais!";

   } else if (num1 != num2) {
    document.getElementById("mensagem").innerHTML =  "Os números são diferentes!";
   }
}

function exercicio7()
{
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);

  if( (num1 + num2) < num3 ){
    document.getElementById("mensagem").innerHTML =  "O resultado da soma é menor que o terceiro numero digitado";
  } else {
    document.getElementById("mensagem").innerHTML = "O resultado da soma é maior que o terceiro numero digitado" ;
  }
}

function exercicio8()
{
 let salario = document.getElementById("salario").value;

 if (salario < 500 ){
  document.getElementById("mensagem").innerHTML = "Você tem direito ao aumento de salário";
 } else if (salario > 500){
  document.getElementById("mensagem").innerHTML = "Você não tem direito ao aumento de salário";
 }
}

function exercicio9(){
  let salario = document.getElementById("salario").value;

  let reajuste = Number(salario) * 30 / 100;

  if (salario >= 500){
    document.getElementById("mensagem").innerHTML = "Você não tem direito ao aumento de salário";

  } else {
    document.getElementById("mensagem").innerHTML = " O valor do salário reajustado fica: " + reajuste + "."; 
  }
}

function exercicio10(){
  let cod = document.getElementById("cod").value;
  let quantidade = document.getElementById("quantidade").value;

  let preco1 = 500.00;
  let preco = 300.00;

  let valorT = Number(preco1) * Number(quantidade);
  let valoor = Number(preco) * Number(quantidade);

  if (cod == 5){
    document.getElementById("mensagem").innerHTML = "A descrição do produto " + cod +
                                                    ", seu preço é: " + preco1 +
                                                    " o valor total fica: " + valorT;
  } else
  if (cod == 10){
    document.getElementById("mensagem").innerHTML = "A descrição do produto " + cod +
                                                    ", seu preço é: " + preco +
                                                    " o valor total fica: " + valoor;
  }
  else{
    document.getElementById("mensagem").innerHTML = "Código invalido";
  }
    
}

function exercicio11(){
  let quantidade = document.getElementById("quantidade").value;
  let pv = document.getElementById("pv").value;
  let cod = document.getElementById("cod").value;

 let preco = 10.00;
 let preco1 = 50.00;

  if (cod == 1){
    document.getElementById("mensagem").innerHTML = "A quantidade é: " + quantidade +
                                                    ", seu preço de venda é: " + pv +
                                                    " seu valor de sub-total é de " +  +
                                                    " o valor de frete fica: "+ +
                                                    " Seu valor total a pagar: "+ vt;
}
}