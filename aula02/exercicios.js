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