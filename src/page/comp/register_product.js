import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
//import { useNavigate } from 'react-router-dom'

export default function CreateProduct() {

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("1")
  const [category, setCategory] = useState("1")
  const [image, setImage] = useState()
  const [validationError,setValidationError] = useState({})

  const changeHandler = (event) => {
        setImage(event.target.files[0]);
    };

  const createUser = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('description', description)
    formData.append('category', category)
    formData.append('quantity', quantity)
    formData.append('price', price)
    formData.append('image', image)

    await axios.post(`https://z.store-line.stormonlinegroup.com/api/v1/user/products`, formData,{headers: {
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
        Swal.fire({
          text:response.data.errors,
          icon:"error"
        })
      
    })
  } 
        return(
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Agregar producto</h1>
            <br/>
            
            <form onSubmit={createUser}>
                
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" className="form-control" name="name" onChange={(event)=>{
                              setName(event.target.value)}}/>
                </div><br/>
                <div className="form-group">
                    <label>Descripción:</label>
                    <input type="text" className="form-control" name="description" onChange={(event)=>{
                              setDescription(event.target.value)}}/>
                </div><br/>
                <div className="form-group">
                    <label htmlFor="sCategory">Categorías:</label>
                    <select className="form-control" id="sCategory" name="category" onChange={(event)=>{
                              setCategory(event.target.value)}}>
                    <option value="1">Ropa</option> 
                    <option value="2">Abarrotes</option>
                    <option value="3">Comida</option>
                    <option value="4">Cosméticos</option> 
                    <option value="5">Electrónica</option> 
                    </select>
                </div><br/>
                 <div className="form-group">
                    <label>Cantidad:</label>
                    <input type="number" className="form-control" name="quantity" onChange={(event)=>{
                              setQuantity(event.target.value)}}/>
                </div><br/>
                 <div className="form-group">
                    <label>Precio:</label>
                    <input type="number" className="form-control" name="price" onChange={(event)=>{
                              setPrice(event.target.value)}}/>
                </div><br/>
                <div className="form-group">
                    <label>Imagen:</label>
                    <input type="file" className="form-control" name="image" onChange={changeHandler}/>
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
            
        ) 
    }
