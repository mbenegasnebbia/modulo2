class Cancion {
    constructor(id, titulo, duracion, fechaLanzamiento, genero, artista) {
        this.id = id;
        this.titulo = titulo;
        this.duracion = duracion; // en segundos
        this.fechaLanzamiento = fechaLanzamiento;
        this.genero = genero;
        this.artista = artista;
        this.colaboradores = [];
        this.reproducciones = 0;
    }

    agregarColaborador(artista) {
        this.colaboradores.push(artista);
    }

    obtenerColaboradores() {
        return this.colaboradores;
    }

    incrementarReproducciones() {
        this.reproducciones++;
    }

    obtenerDuracionEnMinutos() {
        return (this.duracion / 60).toFixed(2);
    }
}

module.exports = Cancion; 