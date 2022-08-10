import React, { useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2';

export default class Edit_user extends React.Component{
    state = {
        product: [],
        editar: '',
        e: '',
        image:'',
    }
    //const [image, setImage] = useState()

    componentDidMount(){
       
        fetch('https://z.store-line.stormonlinegroup.com/api/v1/user/products/'+this.props.location.state.id,{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(productJson => this.setState({product:productJson}))
    }
     changeHandler = (event) => {
      this.setState({ 
        ...this.state, 
         [event.target.name]: event.target.files[0] })
  }

    changeField = (event) => {
        this.setState({
            product:{
                ...this.state.product,
                [event.target.name]: event.target.value
            }
        })
    }
    //subForm = (event) =>{
       editProduct = async (event) => {
        event.preventDefault();
        //const [validationError,setValidationError] = useState({})
        const formData = new FormData()
        formData.append('name', this.state.product.name)
        formData.append('description', this.state.product.description)
        //console.log(this.state.product.category);
        formData.append('category', this.state.product.category_id)
        formData.append('quantity', this.state.product.quantity)
        formData.append('price', this.state.product.price)
        formData.append('image', this.state.image)
        await axios.post(`https://z.store-line.stormonlinegroup.com/api/v1/user/products/`+this.props.location.state.id, formData,{headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
        }}).then(({data}) => {
      Swal.fire({
        icon:"success",
        text:data.message
      })
      //navigate("/")
    }).catch(({response})=>{
      //console.log(response);
        Swal.fire({
          text:response.data.errors,
          icon:"error"
        })
      
    })
  } 
    render(){
        const imageBaseURL = "https://z.store-line.stormonlinegroup.com/storage/";
        const{product,editar,e} = this.state
        return(
            <>
            {product.product_images ?
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Editar Producto</h1>
            <br/>
          
            <form onSubmit={this.editProduct}>
               
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" className="form-control" defaultValue={product.name} name="name" onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Descripción:</label>
                    <input type="text" className="form-control" defaultValue={product.description} name="description" onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label htmlFor="sCategory">Categorías:</label>
                    <select className="form-control" id="sCategory" name="category_id" onChange={this.changeField}>
                    <option selected={product.category_id === 1} value="1">Ropa</option> 
                    <option selected={product.category_id === 2} value="2">Abarrotes</option>
                    <option selected={product.category_id === 3} value="3">Comida</option>
                    <option selected={product.category_id === 4} value="4">Cosméticos</option> 
                    <option selected={product.category_id === 5} value="5">Electrónica</option> 
                    </select>
                </div><br/>
                 <div className="form-group">
                    <label>Cantidad disponible:</label>
                    <input type="number" className="form-control" defaultValue={product.product_items[0].quantity} name="quantity" onChange={this.changeField}/>
                </div><br/>
                 <div className="form-group">
                    <label>Precio:</label>
                    <input type="number" className="form-control" defaultValue={product.product_items[0].price} name="price" onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Imagen:</label>
                    <input type="file" className="form-control" name="image" onChange={this.changeHandler}/>
                </div><br/>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>   
            <br/><br/>
            <Link to="/products">
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
