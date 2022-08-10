import React from "react"
import { Link } from "react-router-dom"

export default class Edit_cart extends React.Component{
    state = {
        product: [],
        editar: '',
        e: '',
    }
    componentDidMount(){

        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/products/'+this.props.location.state.id,{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(productJson => this.setState({product:productJson}))
    }
    changeField = (event) => {
        this.setState({
            product:{
                ...this.state.product,
                [event.target.name]: event.target.value
            }
        })
    }
    subForm = (event) =>{
        event.preventDefault();
        let data = {
            quantity : this.state.product.quantity,

        };
        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/carts/'+this.props.location.state.cart_id,{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")??""
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
        .then(response => response.json())
        .then(data => this.setState({editar: data.message ? data.message : data.errors,e: data.message ? "success" : "danger"}))
    }
    render(){
        const{product,editar,e} = this.state
        return(
            <>
            {product.product_images ?
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Editar Carrito</h1>
            <br/>
            { editar?
                        <div className={"alert alert-"+e} role="alert">
                           {editar}
                        </div>
                    :
                        <div></div>           
         }
            <form onSubmit={this.subForm}>
                <div className="form-group">
                    <label>Producto:</label>
                    <input  disabled="true" type="text" className="form-control" name="name" defaultValue={product.name} onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Descripción:</label>
                    <input disabled="true" type="text" className="form-control" name="description" defaultValue={product.description} onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Cantidad</label>
                    <input type="number" className="form-control" name="quantity" defaultValue={product.carts[0].quantity} onChange={this.changeField}/>
                </div>
                
                <div className="form-group">
                    <label>Foto(url):</label>
                    <input disabled="true" type="text" className="form-control" name="img" defaultValue={product.product_images[0].url} onChange={this.changeField}/>
                </div><br/>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>  
            <br/><br/>
            <Link to="/cart">
                    <button type="button" className="btn btn-outline-light">
                        Regresar
                    </button>
                </Link>  
            </div>
             : ''}
             </>
        ) 
    }
}