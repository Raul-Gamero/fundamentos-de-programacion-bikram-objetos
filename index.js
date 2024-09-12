//Pair Programming.

//Objetos

//Declaración

//1. Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo, matricula

let Coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    matricula: 'ABC123'
};

//2. Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso

let Casa = {
    codPostal: '28001',
    calle: 'Gran Via',
    portal: 5,
    piso: 2
};

//3. Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes, array proyectos

let FullStackDeveloper = {
    lenguajes: ['JavaScript', 'Python', 'Java'],
    proyectos: ['App Web', 'API REST']
};

//4. Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color, edad, función ladrar, función popo

let Perro = {
    nombre: 'Rex',
    raza: 'Labrador',
    color: 'Negro',
    edad: 5,

    ladrar: function() {
        console.log('!Guau');
    },
    popo: function() {
        return Math.random() * 3;
    }
};

//Lectura de propiedades

//5. Dado un objeto de nombre Portatil, obtén el valor de la propiedad marca con .marca guardándolo en la variable marcaPortatil

let Portatil = {
    marca: 'HP',
    modelo: 'Pavilon'
};

let marcaPortatil = Portatil.marca;

//6. Dado un objeto de nombre Portatil, obtén el valor de la propiedad marca con ["marca"] guardándolo en la variable marcaPortatil2

let marcaPortatil2 = Portatil['marca'];

//7. Dado un objeto de nombre Concierto, obtén el valor de la propiedad array grupos guardándolo en la variable grupos

let Concierto = {
    array: {
        grupos: ['The Rolling Stones', 'Coldplay']
    }
};

//8. Dado un objeto de nombre Led, obtén el valor de las propiedades rojo, verde y azul guardándolo en la variable array RGB[Rojo, Verde, Azul]

let Led = {
    rojo: 255,
    verde: 0,
    azul: 0
};

let RGB = [Led.rojo, Led.verde, Led.azul];

//Modificación de propiedades

//9. Dado un objeto de nombre Portatil, modifica el valor de la propiedad modelo por el valor P345

Portatil.modelo = 'P345';

//10. Dado un objeto de nombre Concierto, añade el valor Guns N' Roses a la propiedad cartelera

Concierto.cartelera = 'Guns N\' Rose';

//11. Dado un objeto de nombre Concierto, modifica el valor de la propiedad fecha por el valor new Date() (fecha de hoy)

Concierto.fecha = new Date();

//12. Dado un objeto de nombre Impresora, modifica el valor de la propiedad imprimiendo por el valor objeto con propiedades: nombreArchivo, copias, numPaginas

let Impresora = {
    imprimiendo: {}
};

Impresora.imprimiendo = {
    nombreArchivo: 'documento.pdf',
    copias: 2,
    numPaginas: 10
};

//Objetos (Continuación)

//Declaración

//13. Crea un objeto de nombre Noticia que tenga las propiedades: titular, cuerpo

let Noticia = {
    titular: 'Ultimas noticias',
    cuerpo: 'Hoy se ha anunciado un nuevo avance tecnologico'
};

//14. Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos, edad

let Persona = {
    nombre: 'Raul',
    apellidos: 'Gamero',
    edad: '28'
};

//15. Crea un objeto de nombre Avion que tenga las propiedades: numPasajeros, función despegar, función volar, función aterrizar

let Avion = {
    numPasajeros: 420,

    despegar: function () {
        console.log('despegando');
    },

    volar: function() {
        console.log('llegando al destino');
    },

    aterrizar: function() {
        console.log('aterrizando');
    }
};

//16. Crea un objeto de nombre Paquete que tenga las propiedades: array contenido con todos los objetos que contenga el paquete

let Paquete = {
    contenido: [
        { nombre: 'Libro', cantidad: 1 },
        { nombre: 'Cuaderno', cantidad: 3 }
    ]
};

//17. Crea un objeto de nombre Pais que tenga las propiedades: numHabitantes, continente, gentilicio

let Pais = {
    numHabitantes: 7000000,
    continente: 'America',
    gentilicio: 'Salvadoreans'
}

//Lectura de propiedades

//18. Dado un objeto de nombre O_Error, obtén el valor de la propiedad codigo guardándolo en la variable codError

let O_Error = {
    codigo: '404'
};

let codError = O_Error.codigo;

//19. Dado un objeto de nombre Grupo, obtén el valor de la propiedad array integrantes guardándolo en la variable integrantes

let Grupo = {
    array: {
        integrantes: ['Raul', 'Mateo', 'Alisson', 'Luisa']
    }
};

let integrantes = Grupo.array.integrantes;

//20. Dado un objeto de nombre Impresora, obtén el valor de la propiedad objeto tinta{rojo, verde, azul} guardándolo en la variable nivelesTinta

let Impresora = {
    objeto: {
        tinta: {
            rojo: 100,
            verde: 75,
            azul: 50
        }
    }
};

let nivelesTinta = Impresora.objeto.tinta;

//Lectura de propiedades (Continuación)

//21. Dado un objeto de nombre Pantalla, obtén el valor de la propiedad array bidimensional pixeles guardándolo en la variable pixeles

let Pantalla = {
    array: {
        bidimensional: {
            pixeles: [
                [0, 0, 0],
                [255, 255, 255]
            ]
        }
    }
};

let pixeles = Pantalla.array.bidimensional.pixeles;

//22. Dado un objeto de nombre Movil, obtén el valor de la propiedad especificaciones con ["especificaciones"] guardándolo en la variable especificaciones

let Movil = {
    especificaciones: {
        RAM: '8GB',
        almacenamiento: '128GB'
    }
};

let especificaciones = Movil['especificaciones'];

//Modificación de propiedades

//23. Dado un objeto de nombre Grupo, modifica el valor de la propiedad numIntegrantes por el valor 5

let Grupo1 = {
    numIntegrantes: 3
};

Grupo1.numIntegrantes = 5;

//24. Dado un objeto de nombre Pantalla, modifica el valor de la propiedad dimensiones por el valor 1920x1080

let Pantalla1 = {
    dimensiones: '1280x720'
};

Pantalla.dimensiones = '1920x1080';

//25. Dado un objeto de nombre Led, modifica el valor de la propiedad encendido por el valor false si vale true y true si vale false

let Led1 = {
    encendido: true
};

Led.encendido = !Led.encendido;

//26. Dado un objeto de nombre Movil, modifica el valor de la propiedad temperatura por el valor 20º

let Movil1 = {
    temperatura: 30
};

Movil.temperatura = 20; 
