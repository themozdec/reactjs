import React from "react"
import { Link } from "react-router-dom"
import  { Redirect } from 'react-router-dom' 

export default class Cart extends React.Component {
    //const Cart=()=>{  
    state = {
        carts:[]
    }
    componentDidMount(){
        fetch('https://z.store-line.stormonlinegroup.com/api/v1/user/carts',{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
        }})
        .then(response => response.json())
        .then(cartsJson => this.setState({carts: cartsJson}))
        
    }
    
    render(){
         
    if(localStorage.getItem("token") == null){
        return <Redirect to='/'  />
        } 

        const{carts} = this.state
        const imageBaseURL = "https://z.store-line.stormonlinegroup.com/storage/";
        return(
            
            <div className="container">
            <br/>
            <h2>Carrito ({carts.length})</h2>
            <p style={{textAlign:'right'}}>
            <Link to='/register_cart'>
                                 <button type="button" className="btn btn-outline-success btn-sm">
                                    Nuevo producto
                                 </button>
                            
                            </Link>    
            </p>
            <table className="table table-hover table-dark">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Acciones</th>
                </thead>
                <tbody>
                    {carts.map((cart,i) =>
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>
                            <img className="img_tb" src={`${imageBaseURL}${cart.product.product_images[0].url}`} width='30px' /> {cart.product.name}
                        </td>
                        <td>${cart.product_item.price}</td>
                        <td>{cart.quantity}</td>
                        <td>
                            <Link to={({ pathname: '/detail_cart',state: {id:cart.product_id}})}>
                                 <button type="button" className="btn btn-outline-info btn-sm">
                                    Detalle
                                 </button>
                            
                            </Link>
                            { ' ' }
                            <Link to={({ pathname: '/edit_cart',state: {id:cart.product_id,cart_id:cart.id}})}>
                                 <button type="button" className="btn btn-outline-warning btn-sm">
                                    Editar
                                 </button>
                            
                            </Link>
                            <Link to={({ pathname: '/delete_cart',state: {id:cart.product_id,cart_id:cart.id}})}>
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