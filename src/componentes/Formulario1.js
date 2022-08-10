import React from "react";

export default class Formulario1 extends React.Component{
    state = { 
        nombre: '',
        fec: '',
        gen: '',
        grupo: '',
        may: false
    };
    
envioValor = (event) => {
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
    const {camForm, info} = this.props
    return(
        <div className='container' style={{width:"50%"}}>
            <br/>
            <h1>Formulario Alumno</h1><br/>
            <form onSubmit={this.envioForm}>
                <div className='form-group'>
                    <label>Matrícula:</label>
                    <input type="text" className="form-control" name="matricula" 
                    onChange={camForm} value={info.matricula} />
                </div>
                <div className='form-group'>
                    <label>Nombre:</label>
                    <input type="text" className="form-control" name="nombre" 
                    onChange={camForm} value={info.nombre} />
                </div>
                <div className='form-group'>
                    <label>Fecha de Nacimiento:</label>
                    <input type="text" className="form-control" name="fec"
                    onChange={camForm} value={info.fec} />
                </div>
                <div className='form-group'>
                    <label>Género:</label>
                    <div className='form-check'>
                    <input type="radio" className="form-check-input" name="gen" value='Femenino'
                    onChange={camForm} />
                    </div>
                    <div className='form-check'>
                    <input type="radio" className="form-check-input" name="gen" value='Masculino'
                    onChange={camForm} />
                    </div>
                </div>
                <div className='form-group'>
                    <label>Grupo:</label>
                    <select className="form-control" name="grupo"
                    onChange={camForm} >
                    <option value="ITIC-91">ITIC-91</option>
                    <option value="ITIC-92">ITIC-92</option>
                    </select>
                </div>
                
                <div className='form-group'>
                    <input type="submit" value="Enviar" className='btn btn-info'/>
                </div>
            </form>
        </div>
    )
}
}