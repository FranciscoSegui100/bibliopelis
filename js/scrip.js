
const peliculas = [
{
    nombre: "En la Mira",
    categoria: "Suspenso",
    plataforma: "../img/HBO-Max-Logo.png",
    descripcion:"En la mira es una película de suspenso y drama. Sigue la historia de un empleado en un call center que se ve amenazado de muerte mediante una llamada de un consumidor al que no le dan la baja del servicio",
    imagen:"../img/enlamira.jpg",
    id: 1,    
},
{
    nombre: "Actividad Paranormal",
    categoria: "Terror",
    plataforma: "../img/paramount-plus-logo.png",
    descripcion:"Cuando una joven pareja de clase media se muda a lo que parece ser la típica casa de barrio periférico, empieza a ser perturbada por una presencia, maligna, que se muestra especialmente activa durante las noches.",
    imagen:"../img/actividadparanormal.jpg",
    id: 2,
},
{
    nombre: "Lightyear",
    categoria: "Infantil",
    plataforma: "../img/disney-plus-logo.png",
    descripcion:"Buzz Lightyear se embarca en una aventura intergaláctica con un grupo de reclutas ambiciosos y su compañero robot.",
    imagen: "../img/buzz.jpg",
    id: 3,
},
{
    nombre: "Coco",
    categoria: "Infantil",
    plataforma: "../img/disney-plus-logo.png",
    descripcion:"Miguel es un niño que sueña con ser músico, pero su familia se lo prohíbe porque su tatarabuelo, músico, los abandonó Por accidente, Miguel entra en la Tierra de los Muertos, de donde sólo podrá salir si un familiar difunto le concede su bendición.",
    imagen: "../img/coco.jpg",
    id: 4,
},
{
    nombre: "Garra",
    categoria: "Drama",
    plataforma: "../img/netflix.png",
    descripcion:"Cuando un desafortunado cazatalentos de básquetbol encuentra un jugador excepcional en España, se dispone a demostrar que pueden triunfar en la NBA.",
    imagen:"../img/garra.jpg",
    id: 5,
},
{
    nombre: "Son como niños",
    categoria: "Comedia",
    plataforma: "../img/netflix.png",
    descripcion:"Después de 30 años, cinco amigos se reúnen en una casa del lago para llorar la pérdida de su antiguo entrenador de básquet y vuelven a descubrir la alegría de la niñez.",
    imagen:"../img/monday.jpg",
    id: 6,
},
]

const contenedorPeliculas = document.getElementById("peliculas")

for (const Cards of peliculas) {
    contenedorPeliculas.innerHTML += 

    `<div class="peli1"><img src${Cards.imagen} alt="pel1" class="img1">
<b><h3 class="h3">${Cards.nombre}</h3></b>
<p>${Cards.descripcion}</p>
<div class="plataformas">
<h3> Plataforma:${Cards.plataforma}</h3>
<input type="button" value="Ver" id="${Cards.id}">
</div>`


document.getElementById(Cards.id).addEventListener('click', () => {
    
    if (Cards.plataforma === "../img/netflix.png"){
        location.href = "https://www.netflix.com/"
    }
    
    localStorage.setItem("ultima peli vista", JSON.stringify(Cards.nombre))
    
})
}
const filtrado = document.getElementById("peliculas")

const div = document.createElement('div')

const filter = document.getElementById("filtrado")
const queVer = document.getElementById("queVer").addEventListener("click", () => {
    
    const peliculaRandom = peliculas[Math.floor(Math.random() * peliculas.length)]
    
    for (const peliRandom of peliculaRandom) {
        div.innerHTML += `<div class="peli1"><img src${peliRandom.imagen} alt="pel1" class="img1">
        <b><h3 class="h3">${peliRandom.nombre}</h3></b>
        <p>${peliRandom.descripcion}</p>
        <div class="plataformas">
        <h3> Plataforma:${peliRandom.plataforma}</h3>
        <input type="button" value="Ver" id="${peliRandom.id}">
        </div>`
        
        filtrado.appendChild(div)
        
    }
})

const filtrarTerror = document.getElementById("terror").addEventListener('click', () => {

    const encontrar = peliculas.filter((pelicula) => pelicula.categoria === "Terror")

    
    for (const encontrarTerror of encontrar) {
        
        div.innerHTML = `<div class="peli1"><img src${encontrarTerror.imagen} alt="pel1" class="img1">
        <b><h3 class="h3">${encontrarTerror.nombre}</h3></b>
        <p>${encontrarTerror.descripcion}</p>
        <div class="plataformas">
        <h3> Plataforma:${encontrarTerror.plataforma}</h3>
        <input type="button" value="Ver" id="${encontrarTerror.id}">
        </div>`
        
        filtrado.appendChild(div)
    }
    
})


const filtrarDrama = document.getElementById("drama").addEventListener('click', () => {

    const encontrar = peliculas.filter((pelicula) => pelicula.categoria === "Drama")

    for (const encontrarDrama of encontrar) {
        
        div.innerHTML = `<div class="peli1"><img src${encontrarDrama.imagen} alt="pel1" class="img1">
        <b><h3 class="h3">${encontrarDrama.nombre}</h3></b>
        <p>${encontrarDrama.descripcion}</p>
        <div class="plataformas">
        <h3> Plataforma:${encontrarDrama.plataforma}</h3>
        <input type="button" value="Ver" id="${encontrarDrama.id}">
        </div>`
    
        filtrado.appendChild(div)
    }
    
    
})
const filtrarInfantil = document.getElementById("infantil").addEventListener('click', () => {

    const encontrar = peliculas.filter((pelicula) => pelicula.categoria === "Infantil")
    for (const encontrarInfantil of encontrar) {
        
        const filtrado = document.getElementById("peliculas")
        
        div.innerHTML = `<div class="peli1"><img src${encontrarInfantil.imagen} alt="pel1" class="img1">
        <b><h3 class="h3">${encontrarInfantil.nombre}</h3></b>
        <p>${encontrarInfantil.descripcion}</p>
        <div class="plataformas">
        <h3> Plataforma:${encontrarInfantil.plataforma}</h3>
        <input type="button" value="Ver" id="${encontrarInfantil.id}">
        </div>`
    
        filtrado.appendChild(div)
    }
    
})
const filtrarSuspenso = document.getElementById("suspenso").addEventListener('click', () => {

    const encontrar = peliculas.filter((pelicula) => pelicula.categoria === "Suspenso")
    for (const encontrarSuspenso of encontrar) {
        
        const filtrado = document.getElementById("peliculas")
        
        div.innerHTML = `<div class="peli1"><img src${encontrarSuspenso.imagen} alt="pel1" class="img1">
        <b><h3 class="h3">${encontrarSuspenso.nombre}</h3></b>
        <p>${encontrarSuspenso.descripcion}</p>
        <div class="plataformas">
        <h3> Plataforma:${encontrarSuspenso.plataforma}</h3>
        <input type="button" value="Ver" id="${encontrarSuspenso.id}">
        </div>`
    
        filtrado.appendChild(div)
    }

})
const filtrarComedia = document.getElementById("comedia").addEventListener('click', () => {

    const encontrar = peliculas.filter((pelicula) => pelicula.categoria === "Comedia")
    for (const encontrarComedia of encontrar) {
        
        const filtrado = document.getElementById("peliculas")
        
        div.innerHTML = `<div class="peli1"><img src${encontrarComedia.imagen} alt="pel1" class="img1">
        <b><h3 class="h3">${encontrarComedia.nombre}</h3></b>
        <p>${encontrarComedia.descripcion}</p>
        <div class="plataformas">
        <h3> Plataforma:${encontrarComedia.plataforma}</h3>
        <input type="button" value="Ver" id="${encontrarComedia.id}">
        </div>`
    
        filtrado.appendChild(div)
    }
    
})

// const filtrarPlataforma = document.getElementById("netflix").addEventListener('click', () => {

//     const encontrar = peliculas.filter((pelicula) => pelicula.plataforma === "../img/netflix.png")

//     for (const encontrarDrama of encontrar) {
        
//         div.innerHTML = `<div class="peli1"><img src${encontrarDrama.imagen} alt="pel1" class="img1">
//         <b><h3 class="h3">${encontrarDrama.nombre}</h3></b>
//         <p>${encontrarDrama.descripcion}</p>
//         <div class="plataformas">
//         <h3> Plataforma:${encontrarDrama.plataforma}</h3>
//         <input type="button" value="Ver" id="${encontrarDrama.id}">
//         </div>`
    
//         filtrado.appendChild(div)
//     }
    
    
// })


Swal.fire({
    title: 'Ingresa tu edad',
    icon: 'warning',
    input: 'number',
    inputLabel: 'Tienes que ser mayor de 13 para poder acceder a todas las peliculas',
    inputAttributes: {
      min: 8,
      max: 120,
      step: 1
    },
    inputValidator: (value) => {
        if (!value) {
          return 'Ingresa tu edad!'
        }
      }
})    








