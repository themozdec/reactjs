import React from "react"
import { Link } from "react-router-dom"
import  { Redirect } from 'react-router-dom' 

export default class Address extends React.Component {
    //const Cart=()=>{  
       
    state = {
        addresses:[]
    }
    componentDidMount(){
        fetch('https://z.store-line.stormonlinegroup.com/api/v1/user/addresses',{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
        }})
        .then(response => response.json())
        .then(addressesJson => this.setState({addresses: addressesJson}))
        
    }
    
    render(){
         
    if(localStorage.getItem("token") == null){
        return <Redirect to='/'  />
        } 

        const{addresses} = this.state
        const imageBaseURL = "https://z.store-line.stormonlinegroup.com/storage/";
        return(
            
            <div className="container">
            <br/>
            <h2>Favoritos ({addresses.length})</h2>
            <p style={{textAlign:'right'}}>
            <Link to='/register_address'>
                                 <button type="button" className="btn btn-outline-success btn-sm">
                                    Nueva dirección
                                 </button>
                            
                            </Link>    
            </p>
            <table className="table table-hover table-dark">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Latitud</th>
                    <th scope="col">Longitud</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Código Postal</th>
                    <th scope="col">Acciones</th>
                </thead>
                <tbody>
                    {addresses.map((address,i) =>
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{address.address}</td>
                        <td>{address.latitude}</td>
                        <td>{address.longitude}</td>
                        <td>{address.city}</td>
                        <td>{address.pincode}</td>
                        <td>
                            <Link to={({ pathname: '/detail_address',state: {address_id:address.id}})}>
                                 <button type="button" className="btn btn-outline-info btn-sm">
                                    Detalle
                                 </button>
                            
                            </Link>
                            { ' ' }
                            <Link to={({ pathname: '/edit_address',state: {address_id:address.id}})}>
                                 <button type="button" className="btn btn-outline-warning btn-sm">
                                    Editar
                                 </button>
                            
                            </Link>
                            <Link to={({ pathname: '/delete_address',state: {address_id:address.id}})}>
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