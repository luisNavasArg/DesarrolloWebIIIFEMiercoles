let miDiv = document.getElementById("principal");
let pokemones=[];
const cargarListado=()=>{
    let url="https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((objetoJson)=>{
        const pokemons = objetoJson.results;
        console.log(pokemons)
        pokemones=pokemons
        pokemons.forEach((p)=> {
            miDiv.innerHTML+=`
            <button class='btn btn-primary' onclick="crearImagen('${p.url}')"> ${p.name}</button>`;
        //    `<button class="btn btn-primary"> ${p.name} </button>`

        });
    })
}
cargarListado();
const crearImagen=(url)=>{
    let contenedor = document.getElementById("contenedor");
    console.log(url);

}

