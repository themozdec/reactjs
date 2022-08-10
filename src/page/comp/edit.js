import React from "react"
import { Link } from "react-router-dom"

export default class Edir extends React.Component{
    state = {
        alumno: [],
        grupos: [],
        editar: '',
    }
    componentDidMount(){
        fetch('http://localhost:8000/api/get01g')
        .then(response => response.json())
        .then(gruposJson => this.setState({grupos:gruposJson}))

        fetch('http://localhost:8000/api/get04/'+this.props.location.state.id)
        .then(response => response.json())
        .then(alumnoJson => this.setState({alumno:alumnoJson}))
    }
    changeField = (event) => {
        this.setState({
            alumno:{
                ...this.state.alumno,
                [event.target.name]: event.target.value
            }
        })
    }
    subForm = (event) =>{
        event.preventDefault();
        let data = {
            id_alumno : this.state.alumno.id_alumno,
            nombre: this.state.alumno.nombre,
            app: this.state.alumno.app,
            fn: this.state.alumno.fn,
            genero: this.state.alumno.genero,
            img: this.state.alumno.img,
            id_grupo: this.state.alumno.id_grupo,

        };
        fetch('http://localhost:8000/api/put01/'+this.state.alumno.id_alumno,{
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
        .then(response => response.json())
        .then(data => this.setState({editar: "Edición del Alumno Exitosa !!!!!"}))
    }
    render(){
        const{grupos, alumno,editar} = this.state
        return(
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Editar Alumno</h1>
            <br/>
            { editar?
                        <div className="alert alert-success" role="alert">
                           {editar}
                        </div>
                    :
                        <div></div>           
         }
            <form onSubmit={this.subForm}>
                <div className="form-group">
                    <label>Nombre(s):</label>
                    <input type="text" className="form-control" name="nombre" defaultValue={alumno.nombre} onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Apellido Paterno:</label>
                    <input type="text" className="form-control" name="app" defaultValue={alumno.app} onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Fecha N.</label>
                    <input type="date" className="form-control" name="fn" defaultValue={alumno.fn} onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Género</label><br/>
                   
                    <div>
                    <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="rgenero01" name="genero" value="0"  checked={alumno.genero === 0} onClick={this.changeField}/>
                    <label className="custom-control-label" htmlFor="rgenero01">Femenino</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="rgenero02" name="genero" value="1" checked={alumno.genero !== 0} onClick={this.changeField}/>
                    <label className="custom-control-label" htmlFor="rgenero02">Masculino</label>
                    </div>
                </div>
            
            
                </div>
                <div className="form-group">
                    <label htmlFor="sGroup">Grupos:</label>
                    <select className="form-control" id="sGroup" name="id_grupo" onChange={this.changeField}>
                        { grupos.map((grupo,i) =>
                            <option value={ grupo.id_grupo} key={i} selected={grupo.id_grupo === alumno.id_grupo}>
                                {(grupo.id_grupo === alumno.id_grupo)?
                                 "-- --" + grupo.clave + " - " + grupo.nombre + "-- --"
                                :
                                grupo.clave + " - " + grupo.nombre
                                }
                            </option>
                        ) }
                    </select>
                </div>
                <div className="form-group">
                    <label>Foto(url):</label>
                    <input type="text" className="form-control" name="img" defaultValue={alumno.img} onChange={this.changeField}/>
                </div><br/>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>  
            <br/><br/>
            <Link to="/crud">
                    <button type="button" className="btn btn-outline-light">
                        Regresar
                    </button>
                </Link>  
            </div>
            
        ) 
    }
}