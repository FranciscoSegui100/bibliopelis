
const peliculas = [
    {
        nombre: "En la Mira",
        categoria: "Suspenso",
        plataforma: "./img/HBO-Max-Logo.png",
        descripcion: "En la mira es una película de suspenso y drama. Sigue la historia de un empleado en un call center que se ve amenazado de muerte mediante una llamada de un consumidor al que no le dan la baja del servicio",
        imagen: "./img/enlamira.jpg",
        id: 1,
    },
    {
        nombre: "Actividad Paranormal",
        categoria: "Terror",
        plataforma: "./img/paramount-plus-logo.png",
        descripcion: "Cuando una joven pareja de clase media se muda a lo que parece ser la típica casa de barrio periférico, empieza a ser perturbada por una presencia, maligna, que se muestra especialmente activa durante las noches.",
        imagen: "./img/actividadparanormal.jpg",
        id: 2,
    },
    {
        nombre: "Lightyear",
        categoria: "Infantil",
        plataforma: "./img/disney-plus-logo.png",
        descripcion: "Buzz Lightyear se embarca en una aventura intergaláctica con un grupo de reclutas ambiciosos y su compañero robot.",
        imagen: "./img/buzz.jpg",
        id: 3,
    },
    {
        nombre: "Coco",
        categoria: "Infantil",
        plataforma: "./img/disney-plus-logo.png",
        descripcion: "Miguel es un niño que sueña con ser músico, pero su familia se lo prohíbe porque su tatarabuelo, músico, los abandonó Por accidente, Miguel entra en la Tierra de los Muertos, de donde sólo podrá salir si un familiar difunto le concede su bendición.",
        imagen: "./img/coco.jpg",
        id: 4,
    },
    {
        nombre: "Garra",
        categoria: "Drama",
        plataforma: "./img/netflix.png",
        descripcion: "Cuando un desafortunado cazatalentos de básquetbol encuentra un jugador excepcional en España, se dispone a demostrar que pueden triunfar en la NBA.",
        imagen: "./img/garra.jpg",
        id: 5,
    },
    {
        nombre: "Son como niños",
        categoria: "Comedia",
        plataforma: "./img/netflix.png",
        descripcion: "Después de 30 años, cinco amigos se reúnen en una casa del lago para llorar la pérdida de su antiguo entrenador de básquet y vuelven a descubrir la alegría de la niñez.",
        imagen: "./img/monday.jpg",
        id: 6,
    },
]

const EliminarFiltros = () =>{
    const eliminarFiltrado = document.getElementById('filtrado')
    const eliminarPelis = document.getElementById('peliculas')
    const eliminarUlti = document.getElementById("ultimaPeli")
        eliminarFiltrado.innerHTML= " "
        eliminarPelis.innerHTML= " "
        eliminarUlti.innerHTML = ''
    }
const clickEnQueVer = () => {
    const queVer = document.getElementById("queVer").addEventListener("click", () => {

        EliminarFiltros();

        const peliculaRandom = peliculas[Math.floor(Math.random() * peliculas.length)]

        const filtrado = document.getElementById('filtrado')

            filtrado.innerHTML += `<div class="peli1"><img src${peliculaRandom.imagen} alt="pel1" class="img1">
            <b><h3 class="h3">${peliculaRandom.nombre}</h3></b>
            <p>${peliculaRandom.descripcion}</p>
            <div class="plataformas">
            <h3> Plataforma:${peliculaRandom.plataforma}</h3>
            <input type="button" value="Ver" id="${peliculaRandom.id}">
            </div>`
    })
}

const cargarPeliculas = () => {
    const contenedorPeliculas = document.getElementById("peliculas")
   

            for (const peli of peliculas) {
                contenedorPeliculas.innerHTML +=
                
                `<div class="peli1"><img src="${peli.imagen}" alt="pel1" class="img1">
                <b><h3 class="h3">${peli.nombre}</h3></b>
                <p>${peli.descripcion}</p>
                <div class="plataformas">
                <img src="${peli.plataforma}" width="100"/>
                <input type="button" value="Click aquí para ver" id="${peli.id}" class="id">
                </div>`
                }
        
            
            peliculas.forEach((peli) => {
                document.getElementById(peli.id).addEventListener('click', () => {
                  
                  if (peli.plataforma === "./img/netflix.png") {
                      location.href = "https://www.netflix.com/"
                    }
                    if (peli.plataforma === "./img/disney-plus-logo.png") {
                        location.href = "https://www.disneyplus.com/"
                    }
                    if (peli.plataforma === "./img/HBO-Max-Logo.png") {
                        location.href = "https://play.hbomax.com/"
                    }
                    if (peli.plataforma === "./img/paramount-plus-logo.png") {
                        location.href = "https://www.paramountplus.com/"
                    }
                    
                    localStorage.setItem("", JSON.stringify(peli.nombre))
                    
                })
            })
    }  

const cargarEventosALosFiltros = () => {
    const inputsDeFiltros = document.getElementsByClassName('filtrarPorCategoria')
    
    if (inputsDeFiltros.length > 0) {
        [...inputsDeFiltros].forEach((input) => {
            input.addEventListener("click", () => {
                filtrarPorCategoria(input.value)
                const eliminarPelis = document.getElementById('peliculas')
                eliminarPelis.innerHTML= " "
                const eliminarUltimaPeli = document.getElementById('ultimaPeli')
                eliminarUltimaPeli.innerHTML = " "
                const eliminarEstrenos = document.getElementById("ProximasPeliculas")
                eliminarEstrenos.innerHTML = " "
            })
        })
    }
}
const filtrarPorCategoria = (categoria) => {
    const filtrado = document.getElementById('filtrado')

    EliminarFiltros();
    
    const pelisFiltradas = peliculas.filter((peli) => peli.categoria.toLowerCase() === categoria.toLowerCase())

    if (pelisFiltradas.length > 0) {
        for (const peli of pelisFiltradas) {

            filtrado.innerHTML += `<div class="peli1"><img src="${peli.imagen}" alt="pel1" class="img1">
            <b><h3 class="h3">${peli.nombre}</h3></b>
            <p>${peli.descripcion}</p>
            <div class="plataformas">
            <img src="${peli.plataforma}" width="100"/>
            <input type="button" value="Click aquí para ver" id="${peli.id}" class="id"></input>
        </div>`
        }
    }  
}
const ultimaPeliVista = () => {

    const pelisVistas = document.getElementById("ultimaPeli")
        pelisVistas.innerHTML= `<div id="ultimaPeli"><h2>¿Que te parecio la ultima peli vista?</h2>
        <h2>${JSON.stringify(localStorage)}</h2><a href="https://www.sensacine.com/peliculas/criticas-sensacine/" target="_blank"><b><h2>Valorar Aquí </h2></b></div>`
}
// const cargarEventosAPlataformas = () => {
//     const inputsDePlatamorfa = document.getElementsByClassName('filtrarPorPlataforma')

//     if (inputsDePlatamorfa.length > 0) {
//         [...inputsDePlatamorfa].forEach((input) => {
//             input.addEventListener("click", () => {
//                 filtrarPorPlataforma(input.value)
//                 const eliminarPelis = document.getElementById('peliculas')
//                 eliminarPelis.innerHTML= " "
//                 const eliminarUltimaPeli = document.getElementById('ultimaPeli')
//                 eliminarUltimaPeli.innerHTML = " "
//             })
//         })
//     }
// }
// const filtrarPorPlataforma = (plataforma) => {
//     const filtrado = document.getElementById('filtrado')

//     filtrado.innerHTML = ''
    
//     const pelisFiltradas = peliculas.filter((peli) => pelis.plataforma.toLowerCase() === plataforma.toLowerCase())
    
//     if (pelisFiltradas.length > 0) {
//         for (const peli of pelisFiltradas) {
            
//             filtrado.innerHTML += `<div class="peli1"><img src="${peli.imagen}" alt="pel1" class="img1">
//             <b><h3 class="h3">${peli.nombre}</h3></b>
//             <p>${peli.descripcion}</p>
//             <div class="plataformas">
//             <img src="${peli.plataforma}" width="100"/>
//             <input type="button" value="Click aquí para ver" id="${peli.id}" class="id">
//         </div>`
//         }
//     }  
// }
const cargarProximasPeliculas = () => {
    const contenedorPeliculas = document.getElementById("ProximasPeliculas")
    
    fetch ('../pelis.json')
    .then ( (res) => res.json())
    .then ((pelis) => {
        
        pelis.forEach((peli) =>{

                contenedorPeliculas.innerHTML +=
                
                `<div class="peli1"><img src="${peli.imagen}" alt="pel1" class="img1">
                <b><h3 class="h3">${peli.nombre}</h3></b>
                <p>${peli.descripcion}</p>
                <div class="plataformas">
                <img src="${peli.plataforma}" width="100"/>
                <h2 class="idPP"> Proximamente </h2>
                </div>`
        })
    })
    
}
const ProxPelis = document.getElementById("proxPelis").addEventListener("click", () => {
    cargarProximasPeliculas()
    EliminarFiltros()
})

    Swal.fire({
    title: 'Ingresa tu edad',
    icon: 'warning',
    input: 'number',
    inputAttributes: {
      min: 13,
      max: 120,
      step: 1
    },
    inputValidator: (value) => {
        if (value <= 13) {
          return 'Debes ser mayor de 13 años para ingresar'
        }
      }
})   

clickEnQueVer()
cargarEventosALosFiltros()
// cargarEventosAPlataformas()
cargarPeliculas()
ultimaPeliVista()