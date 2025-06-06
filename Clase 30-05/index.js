const Serie = require('./serie');

const eternauta = new Serie("El Eternauta", 1, "Ciencia Ficción", 2025, 800000);

const workAmong = new Serie("Work Among", 8, "Terror", 2023, 219120102);

const Resenia = require('./resenia');

console.log(eternauta.nombre, eternauta.genero, eternauta.tengoNombreLargo(), eternauta.fueFilmadaEntreAños(2010, 2030), eternauta.devuelveDetalleCompleto());

console.log(workAmong.nombre, workAmong.genero, workAmong.tengoNombreLargo());

const fs = require('fs');
const data = fs.readFileSync('series_netflix_1.json', 'utf8');
const seriesJson = JSON.parse(data);

const series = seriesJson.map((series) => new Serie(
    series.nombre,
    series.cant_temporadas,
    series.genero,
    series.anio,
    series.cant_visitas,
    [],
));

series.forEach((serie) => console.log(serie.devuelveDetalleCompleto()));


//Mostrar por pantalla el nombre de las series que son buenas. Las series que son buenas tienen más de 50k visitas.

series.forEach((serie) => console.log(serie.devuelveSeriesBuenas()));

//Devuelve las series interminables. Se considera interminable si tiene más de 5 temporadas.
   
series.forEach((serie) => console.log(serie.esInterminable()));
    

const unaResenia = new Resenia(8, "Estuvo muy buena");
const otraResenia = new Resenia(4, "A mí no me gustó");

eternauta.recibirResenia(unaResenia);
eternauta.recibirResenia(otraResenia);

// Nos interesa saber si una serie fue fuertemente recomendada. Una serie es fuertemente recomendada si es buena y al menos 2 reseñas superan los 1500 caracteres cada una.




// Nos interesa saber si una series es paupérrima. Una serie es paupérrima si es promedio de puntajes de reseñas es menor a 4 y al menos una reseña contiene la frase "pérdida de tiempo".

// De cada plataforma nos interesa saber su nombre y las series que ofrece. Por cada plataforma queremos saber si tiene buen contenido. 
// Una plataforma tiene buen contenido cuando el promedio de sus series buenas es mayor a 6).

// También nos interesa saber si una platafoprma ofrece contenido paupérimo. La plataforma ofrece contenido paupérrimo si al menos el 45% de todas sus series son paupérrimas.