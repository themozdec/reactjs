import React from "react"
import { Link } from "react-router-dom"
import  { Redirect } from 'react-router-dom' 

export default class Favorite extends React.Component {
    //const Cart=()=>{  
       
    state = {
        favorites:[]
    }
    componentDidMount(){
        fetch('https://z.store-line.stormonlinegroup.com/api/v1/user/favorites',{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
        }})
        .then(response => response.json())
        .then(favoritesJson => this.setState({favorites: favoritesJson}))
        
    }
    
    render(){
         
    if(localStorage.getItem("token") == null){
        return <Redirect to='/'  />
        } 

        const{favorites} = this.state
        const imageBaseURL = "https://z.store-line.stormonlinegroup.com/storage/";
        return(
            
            <div className="container">
            <br/>
            <h2>Favoritos ({favorites.length})</h2>
            <p style={{textAlign:'right'}}>
            <Link to='/register_favorite'>
                                 <button type="button" className="btn btn-outline-success btn-sm">
                                    Nuevo producto
                                 </button>
                            
                            </Link>    
            </p>
            <table className="table table-hover table-dark">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Acciones</th>
                </thead>
                <tbody>
                    {favorites.map((favorite,i) =>
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{favorite.product.name}</td>
                        <td>
                            <img className="img_tb" src={`${imageBaseURL}${favorite.product.product_images[0].url}`} width='30px' />
                        </td>
                        <td>
                            {/*<Link to={({ pathname: '/detail_favorite',state: {product_id:favorite.id}})}>
                                 <button type="button" className="btn btn-outline-info btn-sm">
                                    Detalle
                                 </button>
                            
                            </Link>*/}
                            { ' ' }
                            {/*<Link to={({ pathname: '/edit_favorite',state: {product_id:favorite.id}})}>
                                 <button type="button" className="btn btn-outline-warning btn-sm">
                                    Editar
                                 </button>
                            
                            </Link>*/}
                            <Link to={({ pathname: '/delete_favorite',state: {product_id:favorite.product.id}})}>
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