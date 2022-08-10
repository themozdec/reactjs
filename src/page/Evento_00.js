import React from 'react'

export default class Evento_00 extends React.Component {
    constructor(props){
        super(props);
        this.state = { nombre: ''};
        this.envioValor = this.envioValor.bind(this);
        this.envioForm = this.envioForm.bind(this);
    }
    envioValor(event){
        this.setState({nombre: event.target.value});
    }
    envioForm(event){
        alert('Nombre enviado: ' + this.state.nombre);
        console.log('Nombre enviado: ' + this.state.nombre);
        event.preventDefault();
    }
    render(){
        return(
            <div className='container' style={{width:"30%"}}>
                <br/>
                <h1>Formulario No.1</h1><br/>
                <form onSubmit={this.envioForm}>
                    <div className='form-group'>
                        <label>Nombre:</label>
                        <input type="text" className="form-control" name="nombre" value={this.state.nombre}
                        onChange={this.envioValor} />
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Enviar" className='btn btn-info'/>
                    </div>
                </form>
            </div>
        )
    }
}