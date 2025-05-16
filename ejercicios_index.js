const fs = require("fs");

//de esta forma llamamos a las variables y el contenido de un archivo
// en la primera linea de la función llamamos al archivo 'clientes.csv' y el formato en el que queremos que lo tracingChannel, en este caso 'utf-8'
// lo que estamos haciendo es abrir el archivo csv y separar cada línea como un array distinto. también declaramos variablas para cada entidad

function leerClientes() {
    const clientesCsv = fs.readFileSync('clientes.csv', 'utf-8');
    const lineasClientes = clientesCsv.split('\n');
    const clientes = [];

    for(let i = 0; i < lineasClientes.length; i++) {
        const[id, nombre, apellido, documento, sexo, fecha_nacimiento] = lineasClientes[i].split(",");
        if(id) {
            clientes.push({
                id,
                nombre,
                apellido,
                documento,
                sexo,
                fecha_nacimiento,
            });
        }
    }
    return clientes;
    
}

//acá hacemos lo mismo que arriba pero con un archivo json, es mucho más simple el proceso porque la estructura/escritura del archivo json es similar a la de javascript

function leerCompras() {
    const comprasJson = fs.readFileSync('compras.Json', 'utf-8');
    return JSON.parse(comprasJson);
}
const clientes = leerClientes();
console.log(clientes);

const compras = leerCompras();
console.log(compras);


// Crear una función que reciba un nombre por parámetro y cuente la cantidad de clientes que tengan ese nombre



function contarNombres (nombre) {
    let cantidadNombres = 0;
    for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].nombre == nombre) {
    cantidadNombres ++;
    }
        
    }
    return cantidadNombres;
}

console.log(contarNombres("Martina"));

// Crear una función que ordene alfabéticamente a los clientes por apellido.


function ordenarAlfabeticamente (clientes) {
    clientes.sort(function (cliente1, cliente2) {
        return cliente1.apellido.localeCompare(cliente2.apellido);
    })
    return clientes;
} 

console.log(ordenarAlfabeticamente(clientes))



// Crear una función que reciba un año y que cuente la cantidad de clientes que nacieron en ese año.


function devuelveClienteAño (fecha_nacimiento) {
    let cantidadPorAño = 0;
    for (let i = 0; i < clientes.length; i++) {
        let arrayFechaNacim = clientes[i].fecha_nacimiento.split("-")
        if(fecha_nacimiento == arrayFechaNacim[2]) {
        cantidadPorAño ++;
        }
    }
    return cantidadPorAño;
}

console.log(devuelveClienteAño(1996));


// Crear una función que dado el id de un cliente nos diga cuál fue el gasto total.

function devuelveGastoTotal (compras) {
    let gastoTotal = precio_total;
    for (let i = 0; i < clientes.length; i++) {
        let 
    }

}



// Crear un función que dado el dni de un cliente devuelva su gasto total.

// Obtener el cliente que más gastó.
