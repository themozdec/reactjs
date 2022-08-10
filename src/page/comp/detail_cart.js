import React from "react"
import { Link } from "react-router-dom"

export default class Detail_cart extends React.Component{
   
    state = {
        product: {},
    }

    componentDidMount() {
        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/products/'+this.props.location.state.id,{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(productJson => this.setState({product: productJson}))
    }
    render(){
        const {product} = this.state
        const imageBaseURL = "https://fyc.store-line.stormonlinegroup.com/storage/";
        //console.log(product.product_images[0]);
        return(
            <>
            {product.product_images ?
                
            <center>
               
               
                <br/>
                <h1>Detalle del Producto</h1>
                <br/>
                
                <div className="card-mb-3" style={{maxWidth:"540px",color:"#000000"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        
                            <img src={`${imageBaseURL}${product.product_images[0].url}`} className="card-img img_crud" alt={product.name}/>                      
                        </div>

                <div className="col-md-8">
                    <div style={{color:"#FFFFFF"}} className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">
                            <b>Descripción:</b> {product.description}<br/>
                            <b>Cantidad:</b> {product.carts[0].quantity}<br/>

                        </p>
                        <p className="card-text">
                            <small className="text-mute">
                                Última actualización hace:<br/> {product.created_at}
                            </small>
                        </p>
                    </div>
                </div>
                </div>
                </div>
                <br/><br/>
                <Link to="/cart">
                    <button type="button" className="btn btn-outline-light btn-sm">
                        Regresar
                    </button>
                </Link>
            </center>
            : ''}
            </>
            
          
        )
        
    }
} 
