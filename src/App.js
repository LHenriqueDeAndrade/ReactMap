import React, { Component } from 'react';

class App extends Component {
  state={
    carros:[
      {tipo:'Hatch'},
      {tipo:'Sedan'},
      {tipo:'SUV'},
      {tipo:'Crossover'},
      {tipo:'Minivan'},
      {tipo:'Picape'}
    ]

  }

  render() {
    return (
      <section>
        {this.state.carros.map((rastreador) => (
        <div>
          <p>Procuro por um carro tipo {rastreador.tipo}</p>
        </div>
        ))}
      </section>
      
    );
  }
}

export default App;