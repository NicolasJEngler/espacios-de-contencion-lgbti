import React, { Component } from 'react';
import './App.css';
import List from './list/List';
import Disclaimer from './disclaimer/Disclaimer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Espacios LGBTI+ en Argentina</h1>
            <p className="App-subtitle">Espacios de contención y acompañamiento para el colectivo LGBTI+ en la República Argentina</p>
        </header>

        <List></List>

        <footer className="App-footer">
            <p><strong>¿Por qué se realiza este proyecto y bajo qué condiciones?</strong> Es necesario contener al colectivo LGBTI+ no sólo dentro de organismos estatales, sino también a través de organizaciones autogestivas que no respondan a procesos burocráticos que pueden no corresponder con los tiempos que necesita o tiene una persona sexodivergente en situación de peligro o que requiere ayuda.</p>

            <p>¿Conocés o administrás una organización autogestiva que no figura en el listado? Podés dejarla rellenando el <a href="https://docs.google.com/forms/d/1UYH4eO7B4F7LkpRLbu6k1VG9-fdGlX_EfymZQWfs2Uk/edit" title="Formulario de submisión de organización" target="_blank" rel="noopener noreferrer">siguiente formulario</a>.</p>

            <p>Este proyecto es open source y puede verse en <a href="https://github.com/NicolasJEngler/espacios-de-contencion-lgbti" title="Repositorio del proyecto" target="_blank" rel="noopener noreferrer">GitHub</a>. Fue realizado con 💖 y 🌈 por <a href="https://nicolasjengler.com.ar" title="Nicolás J. Engler" target="_blank" rel="noopener noreferrer">Nicolás J. Engler</a>.</p>
        </footer>

        <Disclaimer></Disclaimer>
      </div>
    );
  }
}

export default App;
