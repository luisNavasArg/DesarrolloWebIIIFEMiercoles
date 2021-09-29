let alumnos = {
    nombre:"Lorena",
    edad:18,
    mostrar:()=>{
        return `Soy ${alumnos.nombre} y tengo ${alumnos.edad}`;
    }
};
let saludo=`Hola, ${alumnos.nombre} cómo están?`;

ReactDOM.render(
    <div className="row"> 
        <div className="col-6 bg-primary text-white text-center p-4">
            Aquí estamos dentro de react {alumnos.mostrar()}
        </div>
    </div>,
    document.getElementById('root')
);