class Serie{

    constructor(nombre, cantTemporadas, genero, anio, cantidadVisitas){
        this.nombre = nombre;
        this.cantTemporadas = cantTemporadas;
        this.genero = genero;
        this.anio = anio;
        this.cantidadVisitas = cantidadVisitas;
        this.resenias = [];
    } 
    


    recibirResenia(resenia) {
        this.resenias.push(resenia);
    }

    //Necesito un método para saber si la serie tiene un nombre largo. Una serie tiene un nombre largo si este tiene más de 15 caracteres.

    tengoNombreLargo() {
        return this.nombre.length > 15;
    }

    //Necesito que cada dserie nos pueda decir si fue filmada entre los años dados por parámetros

    fueFilmadaEntreAños(anioMin, anioMax) {
        return (this.anio >= anioMin && this.anio <= anioMax)
    }

    //Devolver detalle completo de cierta serie.

    devuelveDetalleCompleto () {

        return this.nombre + "_" + this.genero + "_" + this.anio;
    }

    //Mostrar por pantalla el nombre de las series que son buenas. Las series que son buenas tienen más de 50k visitas.

    devuelveSeriesBuenas() {
        return this.cantVisitas >= 5000000000;
    }

    //Devuelve las series interminables. Se considera interminable si tiene más de 5 temporadas.

    esInterminable() {
        return this.cantTemporadas > 5; 
    }

    //Sumar clase Reseña, cada reseña va a tener un puntaje y una descripcción. Me interesa saber si una reseña es positiva, siendo su puntaje mayor a 6 y su descripción de 300 o + caracteres.
    //Ver resenia.js

    //Asociar reseña con la serie. Una serie es buena si la cantidad de visitas supera 50k y el promedio de los puntajes es mayor o igual a 6.

    cantidadDeVissitasSupera(numero){
        return this.cantVisitas >= 50000;
    }

    elPromedioDeLosPuntajesEs(promedio){
        const sumaDePuntajes = this.resenias.reduce((acumulador, resenia) => acumulador + promedio, 0);
        const cantResenias = this.resenias.length;
        return ()
    }

    
    serieEsMuyRecomendada(serie){
    
}
}


module.exports = Serie;


