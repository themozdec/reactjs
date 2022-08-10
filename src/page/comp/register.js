import React from "react"
import { Link } from "react-router-dom"

export default class Register extends React.Component{
    state = {
        nombre: '',
        app: '',
        fn: '',
        genero: 0,
        img: '',
        id_grupo: '1',
        grupos: [],
        alta: '',
    }
    componentDidMount(){
        fetch('http://localhost:8000/api/get01g')
        .then(response => response.json())
        .then(gruposJson => this.setState({grupos:gruposJson}))
    }
    changeField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    subForm = (event) =>{
        event.preventDefault();
        let data = {
            nombre: this.state.nombre,
            app: this.state.app,
            fn: this.state.fn,
            genero: this.state.genero,
            img: this.state.img,
            id_grupo: this.state.id_grupo,

        };
        fetch('http://localhost:8000/api/post01',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
        .then(response => response.json())
        .then(data => this.setState({alta: "Registro Exitoso !!!!!"}))
    }
    render(){
        const{grupos, alta} = this.state
        return(
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Alta Alumno</h1>
            <br/>
            { alta?
                        <div className="alert alert-success" role="alert">
                           {alta}
                        </div>
                    :
                        <div></div>           
         }
            <form onSubmit={this.subForm}>
                <div className="form-group">
                    <label>Nombre(s):</label>
                    <input type="text" className="form-control" name="nombre" onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Apellido Paterno:</label>
                    <input type="text" className="form-control" name="app" onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Fecha N.</label>
                    <input type="date" className="form-control" name="fn" onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Género</label>
                    <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="rgenero01" name="genero" value="0" onChange={this.changeField}/>
                    <label className="custom-control-label" htmlFor="rgenero01">Femenino</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" className="custom-control-input" id="rgenero02" name="genero" value="1" onChange={this.changeField}/>
                    <label className="custom-control-label" htmlFor="rgenero02">Masculino</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="sGroup">Grupos:</label>
                    <select className="form-control" id="sGroup" name="id_grupo" onChange={this.changeField}>
                        { grupos.map((grupo,i) =>
                            <option value={ grupo.id_grupo} key={i}>
                                {grupo.id_grupo + "||" + grupo.clave + "-" + grupo.nombre}
                            </option>
                        ) }
                    </select>
                </div>
                <div className="form-group">
                    <label>Foto(url)</label>
                    <input type="text" className="form-control" name="img" onChange={this.changeField}/>
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