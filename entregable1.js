/* Declaramos una funcion la cual llevara por
nombre escribeTuNombre, lo que queremos hacer en esta función es que nos 
aparezca un prompt y nos pida un nombre, a lo que se ingrese se le asignara 
una variable llamada nombre */
function escribeTuNombre(){ /* Declaramos la funcion */
    let nombre = prompt("Ingresa tu nombre"); /* Pedimos al usuario un nombre, con un prompt,
    recuerda que este nombre se le va a asignar una variable llamada nombre */
document.getElementById("saludo").innerHTML="¡Hola " + nombre + "!";
/* Lo que se hace aqui es ir al docmento y encontrar el id de "saludo" en este caso
en el html el h1 tiene como id=saludo, ahora con el innerHTML lo que se hace es basicamente cambiar
lo que hay ahí por algo que quieras poner, en este caso como queremos saludar 
al usuario,ponemos un mensaje que sea un ¡Hola y concatenamos la variable nombre
que ya tiene asignado un valor(el que el usario le dio)  y ya imprime   */
}
