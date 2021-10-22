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
    fetch(url).then((res)=>{
        return res.json();
    }).then((obj)=>{
        console.log(obj)
        cargarCarta(obj)
    });

}

const cargarCarta=(pk)=>{
    let contenedor = document.getElementById("cont");
    let mov = pk.moves;
    let dance = "";
    mov.forEach((p)=>{
        dance+=`
            <option>${p.move.name}</option>
        `;
    });
    let plantilla =`
    <div class="card" style="width: 18rem;">
    <img src="${pk.sprites.front_default}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pk.name}</h5>
      <p class="card-text"></p>
      <select class="form-select">
        ${dance}
      </select>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
    contenedor.innerHTML=plantilla;
}

