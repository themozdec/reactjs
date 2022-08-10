import React from "react"
import { Link } from "react-router-dom"
import  { Redirect } from 'react-router-dom' 

export default class Settings extends React.Component {
    
    render(){
         
    if(localStorage.getItem("token") == null){
        return <Redirect to='/'  />
        } 

        const imageBaseURL = "https://z.store-line.stormonlinegroup.com/storage/";
        return(
            
            <div className="container">
            <br/>
            <h2>Ajustes</h2>
            <table className="table table-hover table-dark">
                <thead>
                    <th scope="col">Nombre</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Email</th>
                    <th scope="col">Acciones</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{localStorage.getItem("name")}</td>
                        <td>
                            <img className="img_tb" src={`${imageBaseURL}${localStorage.getItem("image")}`} width='30px' />
                        </td>
                        <td>{localStorage.getItem("email")}</td>
                        
                        <td>
                            <Link to={({ pathname: '/detail_settings'})}>
                                 <button type="button" className="btn btn-outline-info btn-sm">
                                    Detalle
                                 </button>
                            
                            </Link>
                            { ' ' }
                            <Link to={({ pathname: '/edit_settings'})}>
                                 <button type="button" className="btn btn-outline-warning btn-sm">
                                    Editar
                                 </button>
                            
                            </Link>

                        </td>

                    </tr>
                    
                </tbody>
             </table>  
             <Link to='/home'>
                                 <button type="button" className="btn btn-outline-secondary btn-sm">
                                    Regresar
                                 </button>
                            
                            </Link>   
             </div>

        )
    }
}