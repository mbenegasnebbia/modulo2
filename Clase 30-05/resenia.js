class Resenia{

    constructor(puntaje, descripcion){
        this.puntaje = puntaje;
        this.decripcion = [];
    } 

    reseñaEsPositiva(){
    return this.puntaje > 6 && this.descripcion.length >= 300;
}


}

module.exports = Resenia;

// Cada reseña va a tener un puntaje y una descripcción. Me interesa saber si una reseña es positiva, siendo su puntaje mayor a 6 y su descripción de 300 o + caracteres.


//Asociar reseña con la serie. Una serie es buena si la cantidad de visitas supera 50k y el promedio de los puntajes es mayor o igual a 6.
