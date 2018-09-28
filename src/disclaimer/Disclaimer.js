import React, { Component } from 'react';
import './Disclaimer.css';

class Disclaimer extends Component {
    constructor(props) {
        super(props); 
        this.state = { hidden: false };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ hidden: true });
    }

    render(props) {
        var hidden = this.state.hidden ? 'hidden' : '';

        return (
            <div className={`Compatibility ${hidden}`}>
                <button className="close" onClick={this.toggle}>&times;</button>

                <p>Este sitio se hizo con las últimas tecnologías de CSS/HTML/Javascript. No cuenta con fallbacks o polyfills, por lo que es recomendable visitarlo en navegadores como Mozilla Firefox, Microsoft Edge, o Google Chrome.</p>
            </div>
        );
    }
}

export default Disclaimer;