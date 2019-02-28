import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCistas from './componentes/ListaCitas';
class App extends Component {

  state = {
    citas: []
  }

  componentDidMount() {
    const CitasLS = localStorage.getItem('citas');
    if(CitasLS) {
      this.setState({
        citas: JSON.parse(CitasLS)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas', 
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) => {
    // console.log(cita);
    const citas = [...this.state.citas, nuevaCita];
    // obtenemos una copia del state y agregamos la nuevaCita en una sola linea!


    console.log(citas);
    this.setState({
      citas
    });
  }

  borrarCita = id => {
    console.log(id);
    // obtener estado del state
    const citasActuales = [...this.state.citas];
    
    // borrar el elemento del state 
    const citas = citasActuales.filter(cita => cita.id !== id);

    // actualizar el state
    this.setState({
      citas
    });
  }

  render() {
    return (
      <div className="container">
        <Header 
          titulo={'Administrador de Pacientes de Veterinaria'}
        />  

        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              crearCita = {this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCistas 
              citas={ this.state.citas }
              borrarCita={this.borrarCita}
            />
          </div>
        </div>     
      </div>
    );
  }
}

export default App;
