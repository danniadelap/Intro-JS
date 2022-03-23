// var numero1 = Number(prompt("Ingrese un primer numero"));
// var numero2 = Number(prompt("Ingrese un primer numero"));
// var numero3 = Number(prompt("Ingrese un primer numero"));

var numero1 = 8
var numero2 = 8
var numero3 = 8

if (numero1 >= numero2 && numero1>= numero3 && numero2 != numero3) {
    console.log("El numero mayor es", numero1);
    
}else if (numero2 >= numero1 && numero2>= numero3 && numero1 != numero3) {
    console.log("El numero mayor es", numero2);
    
}else if (numero3 >= numero1 && numero3>= numero2 && numero1 != numero2) {
    console.log("El numero mayor es", numero3);
    
}else if (numero3 == numero2 && numero3 == numero1) {
    console.log("Los numeros son iguales", numero3);
    
}
else if (numero1 == numero2 && numero1 != numero3) {
    console.log("El numero mayor es "+ numero3+ " y Los numeros son iguales", numero1, numero2);
    
}else if (numero2 == numero3 && numero2 != numero1) {
    console.log("El numero mayor es "+ numero1+ " y Los numeros son iguales", numero2, numero3);
    
}else if (numero3 == numero1 && numero3 != numero2) {
    console.log("El numero mayor es "+ numero2+ " y Los numeros son iguales", numero3, numero1);
    
}