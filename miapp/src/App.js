import React,{Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      newTask:"Acá va a ir el estado cuando lo cambiemos!",
      numero:0,
      task:["Avisar que vamos a salir"]
    };
    this.cont=1;
    this.handleTaskChange=this.handleTaskChange.bind(this);
  }
  handleTaskChange(e){
    this.cont++;
    this.setState({newTask:e.target.value,numero:this.cont})
  }
  render(){
    return (
    <div className="container bg-dark">
      <div className="row">
        <h1 className="text-center text-white">Hola Mundo!!</h1>
        <span className="text-white" >{this.state.numero}</span>
        <div className="d-flex justify-content-center">
          <input 
          onChange={this.handleTaskChange} 
          type="text" 
          className="w-25" />
        </div>
        <h2 className="text-white text-center">{this.state.newTask}</h2>
        <ul>{
            this.state.task.map((t,i)=><li className="text-white" key={i}>{t}</li>)
          }</ul>
      </div>
    </div>
  );
  }
}

export default App;
