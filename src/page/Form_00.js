import React from "react";

export default class Form_00 extends React.Component {
    state = {
        titulo: 'Botón: Enviar'
    }
    envioValor = () => { console.log(this) };
    render(){
        return(
            <button className="btn btn-info" onClick={this.envioValor}>
                {this.state.titulo}
            </button>
        )
    }
}