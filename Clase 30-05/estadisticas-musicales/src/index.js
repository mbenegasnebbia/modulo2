const fs = require('fs');
const Artista = require('./domain/Artista');
const Cancion = require('./domain/Cancion');
const Genero = require('./domain/Genero');
const Colaboracion = require('./domain/Colaboracion');

/*
ENUNCIADO 0:
Implementar la función cargarDatos que debe:
- Leer los archivos JSON de la carpeta data
- Crear instancias de las clases correspondientes
- Establecer las relaciones entre las instancias
- Devolver un objeto con todas las instancias creadas

Ejemplo de salida esperada:
{
    artistas: [
        Artista {
            id: 1,
            nombre: "Bad Bunny",
            fechaNacimiento: "1994-03-10",
            nacionalidad: "Puerto Rico",
            generos: ["Reggaeton", "Trap Latino", "Hip Hop"],
            canciones: [...],
            colaboraciones: [...]
        },
        ...
    ],
    canciones: [...],
    generos: [...],
    colaboraciones: [...]
}
*/

function cargarDatos() {
    let artistas = [];
    let canciones = [];
    let colaboraciones = [];
    let generos = [];
    let artistasData = fs.readFileSync('./data/artistas.json', 'utf8');
    let artistasJSON = JSON.parse(artistasData)
    let artistasJSONArray = artistasJSON.artistas
    for (let i = 0; i < artistasJSONArray.length; i++) {
        artistaActual = artistasJSONArray[i]
        artistas.push(new Artista(artistaActual.id,artistaActual.nombre,artistaActual.fechaNacimiento, artistaActual.nacionalidad, artistaActual.generos))
    }
    let cancionesData = fs.readFileSync('./data/canciones.json', 'utf8');
    let cancionesJSON = JSON.parse(cancionesData)
    let cancionesJSONArray = cancionesJSON.canciones
    for (let i = 0; i < cancionesJSONArray.length; i++) {
        cancionActual = cancionesJSONArray[i]
        canciones.push(new Cancion(cancionActual.id,cancionActual.titulo,cancionActual.duracion, cancionActual.fechaLanzamiento, cancionActual.genero, cancionActual.artistaId, cancionActual.reproducciones))
    }
    let colaboracionesData = fs.readFileSync('./data/colaboraciones.json', 'utf8');
    let colaboracionesJSON = JSON.parse(colaboracionesData)
    let colaboracionesJSONArray = colaboracionesJSON.colaboraciones
    for (let i = 0; i < colaboracionesJSONArray.length; i++) {
        colaboracionActual = colaboracionesJSONArray[i]
        colaboraciones.push(new Colaboracion(colaboracionActual.id,colaboracionActual.cancionId,colaboracionActual.artistaPrincipalId, colaboracionActual.artistaColaboradorId, colaboracionActual.fechaColaboracion))
    }
    let generosData = fs.readFileSync('./data/generos.json', 'utf8')
    let generosJSON = JSON.parse(generosData)
    let generosJSONArray = generosJSON.generos
    for (let i = 0; i < generosJSONArray.length; i++) {
        generoActual = generosJSONArray[i]
        generos.push(new Genero(generoActual.id,generoActual.nombre,generoActual.descripcion))
    }
    return {artistas : artistas, canciones: canciones,generos: generos,colaboraciones : colaboraciones}
}

function obtenerGeneroPorNombre(generos,nombre){
    return generos.find((genero) => genero.nombre == nombre)
}

function generarRelaciones(artistas,canciones,generos,colaboraciones){
    for (let i = 0; i < canciones.length; i++) {
        artistas[canciones[i].artista - 1].agregarCancion(canciones[i]);
        obtenerGeneroPorNombre(generos,canciones[i].genero).agregarArtista(artistas[canciones[i].artista - 1])
        obtenerGeneroPorNombre(generos,canciones[i].genero).agregarCancion(canciones[i])
    }
    for (let i = 0; i < colaboraciones.length; i++) {
        
        artistas[colaboraciones[i].artistaPrincipal - 1].agregarColaboracion(colaboraciones[i])
        artistas[colaboraciones[i].artistaColaborador- 1].agregarColaboracion(colaboraciones[i])
    } 
}


/*
ENUNCIADO 1:
Implementar la función encontrarArtistaMasReproducido que debe:
- Encontrar el artista con más reproducciones totales
- Calcular estadísticas detalladas incluyendo:
  * Total de reproducciones
  * Promedio de reproducciones por canción
  * Evolución de reproducciones por canción (ordenadas por fecha)
  * Análisis de colaboraciones por género
  * Lista de artistas colaboradores únicos
  * Duración promedio de las canciones
- Devolver un objeto con todas estas estadísticas

Ejemplo de salida esperada:
{
    artista: {
        id: 1,
        nombre: "Bad Bunny",
        ...
    },
    totalReproducciones: 4500000,
    promedioReproduccionesPorCancion: 1500000,
    evolucionReproducciones: [
        {
            titulo: "Me Porto Bonito",
            fecha: "2022-05-06",
            reproducciones: 1500000
        },
        ...
    ],
    generos: ["Reggaeton", "Trap Latino", "Hip Hop"],
    colaboraciones: {
        total: 2,
        porGenero: {
            "Reggaeton": 1,
            "Pop": 1
        },
        artistasColaboradores: ["Rosalía", "J Balvin"]
    },
    duracionPromedioCanciones: 173
}
*/
function encontrarArtistaMasReproducido(artistas) {
    
}

/*
ENUNCIADO 2:
Implementar la función encontrarGeneroMasPopular que debe:
- Identificar el género musical más popular basado en reproducciones totales
- Calcular estadísticas detalladas incluyendo:
  * Total de reproducciones del género
  * Cantidad total de canciones y artistas
  * Top 3 de artistas más populares del género
  * Top 3 de canciones más populares del género
  * Duración promedio de las canciones
  * Cantidad total de colaboraciones en el género
- Devolver un objeto con todas estas estadísticas

Ejemplo de salida esperada:
{
    genero: {
        id: 1,
        nombre: "Reggaeton",
        descripcion: "Género musical que se deriva del reggae y el dancehall"
    },
    totalReproducciones: 4500000,
    totalCanciones: 2,
    totalArtistas: 3,
    artistasMasPopulares: [
        {
            nombre: "Bad Bunny",
            reproducciones: 1500000
        },
        {
            nombre: "J Balvin",
            reproducciones: 3000000
        },
        {
            nombre: "Rosalía",
            reproducciones: 1000000
        }
    ],
    cancionesMasPopulares: [
        {
            titulo: "Mi Gente",
            artista: "J Balvin",
            reproducciones: 3000000
        },
        {
            titulo: "Me Porto Bonito",
            artista: "Bad Bunny",
            reproducciones: 1500000
        }
    ],
    duracionPromedio: 181.5,
    colaboracionesEnElGenero: 2
}
*/

function obtenerCancionesPorGenero(canciones, genero) {
    return canciones.filter((cancion) => cancion.genero === genero)
}


function encontrarGeneroMasPopular(generos) {
    let maxReproducciones = -1
    let maxReproduccionesID = -1
    for (let i = 0; i < generos.length; i++) {
        reproduccionesGeneroActual = generos[i].obtenerTotalReproducciones()  
        if(reproduccionesGeneroActual > maxReproducciones){
            maxReproducciones = reproduccionesGeneroActual
            maxReproduccionesID = i
        }
    }
    
    let artistasPorReproducciones = generos[maxReproduccionesID].artistas.sort((artista,otroArtista) => artista.obtenerReproducciones() - otroArtista.obtenerReproducciones())
    console.log(artistasPorReproducciones);
}

/*
ENUNCIADO 3:
Implementar la función encontrarColaboracionMasReciente que debe:
- Encontrar la colaboración más reciente entre artistas
- Realizar un análisis detallado incluyendo:
  * Información completa de la canción colaborativa
  * Estadísticas detalladas de cada artista involucrado
  * Top 3 de canciones más populares de cada artista
  * Análisis de la relación entre los artistas:
    - Géneros musicales en común
    - Cantidad de colaboraciones previas
    - Impacto relativo de la colaboración
- Devolver un objeto con todas estas estadísticas

Ejemplo de salida esperada:
{
    colaboracion: {
        id: 1,
        fechaColaboracion: "2022-05-06",
        ...
    },
    cancion: {
        titulo: "Me Porto Bonito",
        reproducciones: 1500000,
        duracion: 178,
        genero: "Reggaeton"
    },
    artistas: [
        {
            nombre: "Bad Bunny",
            totalCanciones: 1,
            totalReproducciones: 1500000,
            promedioReproducciones: 1500000,
            totalColaboraciones: 2,
            generos: ["Reggaeton", "Trap Latino", "Hip Hop"],
            cancionesMasPopulares: [
                {
                    titulo: "Me Porto Bonito",
                    reproducciones: 1500000
                }
            ]
        },
        {
            nombre: "Rosalía",
            totalCanciones: 1,
            totalReproducciones: 2000000,
            promedioReproducciones: 2000000,
            totalColaboraciones: 1,
            generos: ["Flamenco", "Pop", "Reggaeton"],
            cancionesMasPopulares: [
                {
                    titulo: "Despechá",
                    reproducciones: 2000000
                }
            ]
        }
    ],
    analisis: {
        mismoGenero: true,
        generosComunes: ["Reggaeton"],
        colaboracionesPrevias: 0,
        impactoRelativo: 0.75
    }
}
*/
function encontrarColaboracionMasReciente(colaboraciones) {
    // TODO: Implementar la función
}

/*
ENUNCIADO 4:
Implementar la función calcularPromedioDuracionPorGenero que debe:
- Calcular la duración promedio de las canciones para cada género musical
- Considerar todas las canciones asociadas a cada género
- Devolver un Map con el nombre del género como clave y el promedio como valor

Ejemplo de salida esperada:
Map(3) {
    'Reggaeton' => 181.5,
    'Pop' => 156,
    'Trap Latino' => 178
}
*/
function calcularPromedioDuracionPorGenero(generos) {
    // TODO: Implementar la función
}

/*
ENUNCIADO 5:
Implementar la función encontrarColaboracionesFrecuentes que debe:
- Identificar parejas de artistas que han colaborado más de una vez
- Para cada pareja de artistas frecuentes, calcular:
  * Nombres de los artistas
  * Cantidad total de colaboraciones
  * Géneros musicales que tienen en común
- Devolver un array con la información de cada pareja frecuente

Ejemplo de salida esperada:
[
    {
        artistas: ["Bad Bunny", "J Balvin"],
        cantidadColaboraciones: 2,
        generosComunes: ["Reggaeton"]
    }
]
*/
function encontrarColaboracionesFrecuentes(artistas) {
    // TODO: Implementar la función
}

// Ejecutar las funciones
const datos = cargarDatos();
generarRelaciones(datos.artistas,datos.canciones,datos.generos,datos.colaboraciones);
//console.log(obtenerCancionesPorGenero(datos.canciones, "Reggaeton"))
encontrarGeneroMasPopular(datos.generos)
// console.log('1. Artista más reproducido:', encontrarArtistaMasReproducido(datos.artistas));
// console.log('2. Género más popular:', encontrarGeneroMasPopular(datos.generos));
// console.log('3. Colaboración más reciente y análisis:', encontrarColaboracionMasReciente(datos.colaboraciones));
// console.log('4. Promedio de duración por género:', calcularPromedioDuracionPorGenero(datos.generos));
// console.log('5. Colaboraciones frecuentes:', encontrarColaboracionesFrecuentes(datos.artistas)); 

