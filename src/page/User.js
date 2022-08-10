import React from "react"
import { Link } from "react-router-dom"
import  { Redirect } from 'react-router-dom' 

export default class User extends React.Component {
    //const Cart=()=>{  
       
    state = {
        users:[]
    }
    componentDidMount(){
        fetch('https://z.store-line.stormonlinegroup.com/api/v1/user/users',{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
        }})
        .then(response => response.json())
        .then(usersJson => this.setState({users: usersJson}))
        
    }
    
    render(){
         
    if(localStorage.getItem("token") == null){
        return <Redirect to='/'  />
        } 

        const{users} = this.state
        const imageBaseURL = "https://z.store-line.stormonlinegroup.com/storage/";
        return(
            
            <div className="container">
            <br/>
            <h2>Usuarios ({users.length})</h2>
            <p style={{textAlign:'right'}}>
            <Link to='/register_user'>
                                 <button type="button" className="btn btn-outline-success btn-sm">
                                    Nuevo usuario
                                 </button>
                            
                            </Link>    
            </p>
            <table className="table table-hover table-dark">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Creado</th>
                    <th scope="col">Acciones</th>
                </thead>
                <tbody>
                    {users.map((user,i) =>
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>
                            <img className="img_tb" src={`${imageBaseURL}${user.avatar_url}`} width='30px' /> {user.name}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.created_at}</td>
                        <td>
                            <Link to={({ pathname: '/detail_user',state: {id:user.id}})}>
                                 <button type="button" className="btn btn-outline-info btn-sm">
                                    Detalle
                                 </button>
                            
                            </Link>
                            { ' ' }
                            <Link to={({ pathname: '/edit_user',state: {id:user.id}})}>
                                 <button type="button" className="btn btn-outline-warning btn-sm">
                                    Editar
                                 </button>
                            
                            </Link>
                            <Link to={({ pathname: '/delete_user',state: {id:user.id}})}>
                                 <button type="button" className="btn btn-outline-danger btn-sm">
                                    Borrar
                                 </button>
                            
                            </Link>

                        </td>

                    </tr>
                    )}
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