//ej del obj window: - funciona de ambas maneras 
//window.alert('Hola');
//alert('Hola'); -- promt, confirm

//setTimeout, serInterval: METODOS DEL OBJ WINDOW; Siempre van acompañados de una funcion

//setTimeout: Siempre van acompañados de una funcion

//funcion declarativa
function saludar() {
            document.write('<p> Hola Mundo :) </p>');
}
//llamada normal de la funcion
//saludar();
//le indica que despues de el tiempo-5000- indicado ejecute la funcion llamada -saludar-
window.setTimeout(saludar , 5000);
//tambien en este metodo puedo utilizar funciones anonimas-las que se declara donde son usadas- si es que solo quiero utilizarlas por unica vez
setTimeout( ()=> {
            document.write('<p> Hoy es un dia de lluvia </p>');
} , 2000);
//serInterval: Siempre van acompañados de una funcion
 