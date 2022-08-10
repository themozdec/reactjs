import React from "react"
import { Link } from "react-router-dom"

export default class Pg_0X extends React.Component {
    state = {
        alumnos:[]
    }
    componentDidMount(){
        fetch('http://localhost:8000/api/get07')
        .then(response => response.json())
        .then(alumnosJson => this.setState({alumnos: alumnosJson}))
    }
    render(){
        const{alumnos} = this.state
        return(
            <div className="container">
            <br/>
            <h2>Alumnos ({alumnos.length})</h2>
            <p style={{textAlign:'right'}}>
            <Link to='/register'>
                                 <button type="button" className="btn btn-outline-success btn-sm">
                                    Nuevo Alumno
                                 </button>
                            
                            </Link>    
            </p>
            <table className="table table-hover table-dark">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Alumno</th>
                    <th scope="col">Fecha N.</th>
                    <th scope="col">Género</th>
                    <th scope="col">Grupo</th>
                    <th scope="col">Otros</th>
                </thead>
                <tbody>
                    {alumnos.map((alumno,i) =>
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>
                            <img src={alumno.img} alt={alumno.nombre} width='30px' />
                        </td>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.fn}</td>
                        <td>{alumno.genero}</td>
                        <td>{alumno.grupo}</td>
                        <td>
                            <Link to={({ pathname: '/detail',state: {id:alumno.id_alumno}})}>
                                 <button type="button" className="btn btn-outline-info btn-sm">
                                    Detalle
                                 </button>
                            
                            </Link>
                            { ' ' }
                            <Link to={({ pathname: '/edit',state: {id:alumno.id_alumno}})}>
                                 <button type="button" className="btn btn-outline-warning btn-sm">
                                    Editar
                                 </button>
                            
                            </Link>
                            <Link to={({ pathname: '/delete',state: {id:alumno.id_alumno}})}>
                                 <button type="button" className="btn btn-outline-danger btn-sm">
                                    Borrar
                                 </button>
                            
                            </Link>

                        </td>

                    </tr>
                    )}
                </tbody>
             </table>    
             </div>

        )
    }
}