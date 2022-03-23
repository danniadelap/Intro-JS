var numero1 = Number(prompt("Dame un numero"));
var numero2 = 1;


do {
  if (numero2 % 5 === 0){
    console.log(numero2);
    numero2++;
    }
  } while (numero1 <= numero2);
