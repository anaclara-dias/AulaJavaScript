let numero1, resultado;

function quadrado(n1)
{
    let quadradoN = Number(n1) * Number(n1);
    document.getElementById("mensagem").innerHTML = "O quadrado do número eh: " + quadradoN;
}

function solicitarEntradaDados()
{
    numero1 = Number(prompt("digite o número 1: "));

   quadrado(numero1, numero1 );
}

 function processar()
 {
    numero1 = document.getElementById("numero1").value;
    numero1 = document.getElementById("numero1").value;

    quadrado(numero1, numero1);
 }

 //function cubo(n1)
//{
//    let cuboN = Number(n1) * Number(n1) * Number(n1);
 //   document.getElementById("mensagem").innerHTML = "O cubo do número eh: " + cuboN;
//}

//function solicitarEntradaDados()
//{
  //numero1 = Number(prompt("digite o número 1: "));

  //cubo(numero1, numero1 );
//}

 //function processar()
 //{
  //  numero1 = document.getElementById("numero1").value;
   // numero1 = document.getElementById("numero1").value;

   // cubo(numero1, numero1, numero1);
 //}