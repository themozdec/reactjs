import React from "react"
import { Link } from "react-router-dom"

export default class Register extends React.Component{
    state = {
        product_id: '1',
        quantity: '',
        product_item_id: '1',
        productos: [],
        alta: '',
        e:''
    }
    componentDidMount(){
        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/products',{headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
        }})
        .then(response => response.json())
        .then(productosJson => this.setState({productos:productosJson}))
    }
    changeField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    subForm = (event) =>{
        event.preventDefault();
        let data = {
            product_id: this.state.product_id,
            quantity: this.state.qty,
            product_item_id: this.state.product_id,

        };
        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/carts',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")??""
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
        .then(response => response.json())
        .then(data => this.setState({alta: data.message ? data.message : data.errors,e: data.message ? "success" : "danger"}))
    }
    render(){
        const{productos, alta,e} = this.state
        return(
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Agregar producto al carrito</h1>
            <br/>
            { alta?
                        <div className={"alert alert-"+e} role="alert">
                           {alta}
                        </div>
                    :
                        <div></div>           
         }
            <form onSubmit={this.subForm}>
                
                <div className="form-group">
                    <label htmlFor="sProduct">Productos:</label>
                    <select className="form-control" id="sProduct" name="product_id" onChange={this.changeField}>
                        { productos.map((product,i) =>
                            <option value={ product.id} key={i}>
                                {product.name}
                            </option>
                        ) }
                    </select>
                </div>
                <div className="form-group">
                    <label>Cantidad:</label>
                    <input type="number" className="form-control" name="qty" onChange={this.changeField}/>
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
            
        ) 
    }
}