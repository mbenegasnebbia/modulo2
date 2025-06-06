class Genero {
    constructor(id, nombre, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.canciones = [];
        this.artistas = [];
    }

    agregarCancion(cancion) {
        this.canciones.push(cancion);
    }

    agregarArtista(artista) {
        this.artistas.push(artista);
    }

    obtenerCanciones() {
        return this.canciones;
    }

    obtenerArtistas() {
        return this.artistas;
    }

    obtenerTotalReproducciones() {
        return this.canciones.reduce((total, cancion) => total + cancion.reproducciones, 0);
    }
}

module.exports = Genero; 