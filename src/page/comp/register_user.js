import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
//import { useNavigate } from 'react-router-dom'

export default function CreateUser() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState()
  const [validationError,setValidationError] = useState({})

  const changeHandler = (event) => {
        setImage(event.target.files[0]);
    };

  const createUser = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('avatar_image', image)

    await axios.post(`http://localhost:8000/api/v1/user/users`, formData,{headers: {
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
            <h1>Agregar usuario</h1>
            <br/>
            
            <form onSubmit={createUser}>
                
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" className="form-control" name="name" onChange={(event)=>{
                              setName(event.target.value)}}/>
                </div><br/>
                 <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" name="email" onChange={(event)=>{
                              setEmail(event.target.value)}}/>
                </div><br/>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" name="password" onChange={(event)=>{
                              setPassword(event.target.value)}}/>
                </div><br/>
                <div className="form-group">
                    <label>Imagen:</label>
                    <input type="file" className="form-control" name="avatar_image" onChange={changeHandler}/>
                </div><br/>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>  
            <br/><br/>
            <Link to="/users">
                    <button type="button" className="btn btn-outline-light">
                        Regresar
                    </button>
                </Link>  
            </div>
            
        ) 
    }
