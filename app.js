// El principal objetivo de este desafío es 
// fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === ""){
        alert ("Por favor ingrese un nombre")
    }
    else{
        amigos.push(nombreAmigo);
        document.querySelector("#amigo").value ="";
        mostrarListaAmigos();
    }
}
function mostrarListaAmigos(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    for(let index = 0; index < amigos.length;index++)
    {
        const element = amigos[index];
        let listaHTML =document.createElement("li");
        listaHTML.textContent =element;
        listaAmigos.appendChild(listaHTML);
    }
}
function sortearAmigo(){
    if (amigos === 0){
        alert("Por favor , ingrese un nombre");
    }
    else{
        let indiceAleatorio = Math.floor(Math.random()* amigos.length);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAleatorio];
    }
}
