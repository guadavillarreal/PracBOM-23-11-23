//ej del obj window: - funciona de ambas maneras 
//window.alert('Hola');
//alert('Hola'); -- promt, confirm

//setTimeout, serInterval: METODOS DEL OBJ WINDOW; Siempre van acompañados de una funcion

//setTimeout: Siempre va acompañado de una funcion
//funcion declarativa
function saludar() {
            document.write('<p> Hola Mundo :) </p>');
}
//llamada normal de la funcion
//saludar();
//le indica que despues de el tiempo-5000- indicado ejecute la funcion llamada -saludar-
// window.setTimeout(saludar , 5000);
// //tambien en este metodo puedo utilizar funciones anonimas-las que se declara donde son usadas- si es que solo quiero utilizarlas por unica vez
// setTimeout( ()=> {
//             document.write('<p> Hoy es un dia de lluvia </p>');
// } , 2000);

//serInterval: Siempre va acompañado de una funcion
//invoca una funcion desde de determinado tiempo
//setInterval (saludar,2000); 
//CLEARINTERVAL; detiene el metodos setInterval
//para utilizarlo tengo que guardar el identificador unico que genera el setInterval
const identificadorIntervalo = setInterval (saludar,2000); 
//lo muestro por consola para solo ver el id
console.log(identificadorIntervalo);
//lo detiene en el momento que leyo lo linea de cog, por loque si estan seguidos no se llegara a ejecutar el setInterval
//clearInterval (identificadorIntervalo);
//lo puedo colocar dentro de una estructura log y puedo combinar los metodos para poder asi ejecutar por det tiempo el setInterval y detenerlo luego
//creo al func anonima dentro del setTimeout para poder ejecutar solo por determinado tiempo 
setTimeout(()=> {
            console.log('Ahora detengo el setInterval');
            clearInterval(identificadorIntervalo);}, 10000);

