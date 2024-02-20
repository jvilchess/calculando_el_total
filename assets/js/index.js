valor = 400000

precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = valor


total = document.querySelector(".valor-total")
cant = document.querySelector(".cantidad")
act = cant.innerHTML
tot = total.innerHTML


const botonSum = document.querySelector("#botonMax")
const botonMin = document.querySelector("#botonMin")

//suma
botonSum.addEventListener('click',function(){
cant.innerHTML = ++act
total.innerHTML = valor * + act
})

//resta
botonMin.addEventListener('click',function(){
    cant.innerHTML = --act
    total.innerHTML = valor * + act
})