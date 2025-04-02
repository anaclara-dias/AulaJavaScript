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

  document.getElementById("Mensagem").innerHTML = "<p> o lado do quadrado é = " + valorL +
                                                  "<br> A area do quadrado é: " + valorQ +
                                                  "</p>";
}
  
function exercicio6()
{
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

   if (num1 = num2) then
   console.writeline("Os números são iguais!")
   else (num1 != num2)
   console.writeline("Os números são diferentes!")
 
}
