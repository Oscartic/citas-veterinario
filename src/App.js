import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';

class App extends Component {

  state = {
    citas: []
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
        </div>     
      </div>
    );
  }
}

export default App;
