import React from 'react'

export default class Evento_00 extends React.Component {
    /*constructor(props){
        super(props);
        this.state = { 
            nombre: '',
            fec: '',
            gen: '',
            grupo: '',
            may: false
        };
        this.envioValor = this.envioValor.bind(this);
    }*/
    envioValor(event){
        let name = event.target.name;
        let variable = event.target.value;
        let checked = event.target.checked;
        let type = event.target.type;  
        this.setState({[name]: type!="checkbox"? variable:checked});
    }
    evioValor2 = ({name,value,checked,type}) => {
        this.setState({[name]:type==="checkbox"? checked:value})
    }
    evioForm = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className='container' style={{width:"30%"}}>
                <br/>
                <h1>Formulario No.2</h1><br/>
                <form onSubmit={this.envioForm}>
                    <div className='form-group'>
                        <label>Nombre:</label>
                        <input type="text" className="form-control" name="nombre" 
                        onChange={this.envioValor} />
                    </div>
                    <div className='form-group'>
                        <label>Fecha de Nacimiento:</label>
                        <input type="text" className="form-control" name="fec"
                        onChange={this.envioValor} />
                    </div>
                    <div className='form-group'>
                        <label>Género:</label>
                        <div className='form-check'>
                        <input type="radio" className="form-check-input" name="gen" value='F'
                        onChange={this.envioValor} />
                        </div>
                        <div className='form-check'>
                        <input type="radio" className="form-check-input" name="gen" value='M'
                        onChange={this.envioValor} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Grupo:</label>
                        <select className="form-control" name="grupo"
                        onChange={this.envioValor} >
                        <option value="ITIC-91">ITIC-91</option>
                        <option value="ITIC-92">ITIC-92</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className='form-check-input' name="May" onChange={this.envioValor}/>
                        <label className='form-check-label'>Es mayor de edad?</label>
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Enviar" className='btn btn-info'/>
                    </div>
                </form>
            </div>
        )
    }
}