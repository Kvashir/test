let div = document.querySelector(".contenedor");

window.addEventListener("load",()=>{
    //
    fetch("./contenido/objeto.json")
        .then(e=> e.json())
        .then(e=> console.log(e.titulo))
});



//crear Item
function crearItem(value){
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    

    div.appendChild(h1);
    div.appendChild(p);

}