import React from "react"
import { Link } from "react-router-dom"
import { Redirect } from 'react-router-dom' 

export default class Product extends React.Component {
    //const Cart=()=>{  
       
    state = {
        Products:[]
    }
    componentDidMount(){
        fetch('https://z.store-line.stormonlinegroup.com/api/v1/user/products',{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
        }})
        .then(response => response.json())
        .then(productsJson => this.setState({products: productsJson}))
        
    }
    
    render(){
         
    if(localStorage.getItem("token") == null){
        return <Redirect to='/'  />
        } 

        const{products} = this.state
        const imageBaseURL = "https://z.store-line.stormonlinegroup.com/storage/";
        return(
            <>
            {products ?
            <div className="container">
            <br/>
            <h2>Productos ({products.length})</h2>
            <p style={{textAlign:'right'}}>
            <Link to='/register_product'>
                                 <button type="button" className="btn btn-outline-success btn-sm">
                                    Nuevo producto
                                 </button>
                            
                            </Link>    
            </p>
            <table className="table table-hover table-dark">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Creado</th>
                    <th scope="col">Acciones</th>
                </thead>
                <tbody>
                    {products.map((product,i) =>
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>
                            <img className="img_tb" src={`${imageBaseURL}${product.product_images[0].url}`} width='30px' />
                        </td>
                        <td>{product.created_at}</td>
                        <td>
                            <Link to={({ pathname: '/detail_product',state: {id:product.id}})}>
                                 <button type="button" className="btn btn-outline-info btn-sm">
                                    Detalle
                                 </button>
                            
                            </Link>
                            { ' ' }
                            <Link to={({ pathname: '/edit_product',state: {id:product.id}})}>
                                 <button type="button" className="btn btn-outline-warning btn-sm">
                                    Editar
                                 </button>
                            
                            </Link>
                            <Link to={({ pathname: '/delete_product',state: {id:product.id}})}>
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
             : ''}
             </>

        )
    }
}