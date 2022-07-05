/* 1. Se le solicita al usuario que ingrese su nombre y luego su apellido. Realice un 
programa que arme y muestre el mensaje "Bienvenido", seguido del nombre y apellido 
del usuario. */



 var usuario = prompt ("ingrese su nombre")
var apellido= prompt("ingrese su apellido")

alert("bienvenido: " + usuario + " " + apellido)


/* 2. Se le solicita al usuario que ingrese el diámetro de un círculo. Realice un programa 
para calcular e informar el perímetro y el área del círculo. Se considerará para este 
ejercicio que el valor de PI será 3.1416 */



radio = parseFloat(prompt("ingresa el diametro de un circulo"))
const pi= 3.1416
 area = pi * (radio **2) 
 per = 2* radio * pi


 alert("El perimetro del circulo es : " + per );
 alert("El area del circulo es:"  + area)

 