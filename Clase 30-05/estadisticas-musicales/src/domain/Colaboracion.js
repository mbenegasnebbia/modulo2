class Colaboracion {
    constructor(id, cancion, artistaPrincipal, artistaColaborador, fechaColaboracion) {
        this.id = id;
        this.cancion = cancion;
        this.artistaPrincipal = artistaPrincipal;
        this.artistaColaborador = artistaColaborador;
        this.fechaColaboracion = fechaColaboracion;
    }

    obtenerArtistas() {
        return [this.artistaPrincipal, this.artistaColaborador];
    }

    esColaboracionEntre(artista1, artista2) {
        return (this.artistaPrincipal === artista1 && this.artistaColaborador === artista2) ||
               (this.artistaPrincipal === artista2 && this.artistaColaborador === artista1);
    }
}

module.exports = Colaboracion; 