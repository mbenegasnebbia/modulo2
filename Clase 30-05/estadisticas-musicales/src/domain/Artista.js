class Artista {
    constructor(id, nombre, fechaNacimiento, nacionalidad, generos) {
        this.id = id;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.nacionalidad = nacionalidad;
        this.generos = generos || [];
        this.canciones = [];
        this.colaboraciones = [];
    }

    agregarCancion(cancion) {
        this.canciones.push(cancion);
    }

    agregarColaboracion(colaboracion) {
        this.colaboraciones.push(colaboracion);
    }

    obtenerCanciones() {
        return this.canciones;
    }

    obtenerColaboraciones() {
        return this.colaboraciones;
    }

    tieneGenero(genero) {
        return this.generos.includes(genero);
    }

    obtenerReproducciones(){
       return this.canciones.reduce((total, cancion) => total + cancion.reproducciones, 0); 
    }
}

module.exports = Artista; 