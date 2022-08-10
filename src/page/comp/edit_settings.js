import React from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2';

export default class Edit_settings extends React.Component{
    state = {
        settings:[],
        editar: '',
        e: '',
        image:'',
    }
     changeHandler = (event) => {
      this.setState({ 
        ...this.state, 
         [event.target.name]: event.target.files[0] })
  }
    changeField = (event) => {
        this.setState({
            settings:{
                ...this.state.settings,
                [event.target.name]: event.target.value
            }
        })
    }
    //subForm = (event) =>{
        editUser = async (event) => {
        event.preventDefault();
        
        const formData = new FormData()
        formData.append('name', this.state.settings.name)
        formData.append('email', this.state.settings.email)
        formData.append('password', this.state.settings.password)
        formData.append('avatar_image', this.state.avatar_image)
        await axios.post(`http://localhost:8000/api/v1/user/update_profile/`, formData,{headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
        }}).then(({data}) => {
        //console.log(data);
        localStorage.setItem("name",data.user.name);
        localStorage.setItem("email",data.user.email);
        localStorage.setItem("image",data.user.avatar_url);
              
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
        const imageBaseURL = "http://localhost:8000/storage/";
        const{settings,editar,e} = this.state
        return(
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
            <form onSubmit={this.editUser}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" className="form-control" name="name" defaultValue={localStorage.getItem("name")} onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" name="email" defaultValue={localStorage.getItem("email")} onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Contraseña:</label>
                    <input type="password" className="form-control" name="password" onChange={this.changeField}/>
                </div>
                <br/>
                <div className="form-group">
                    <label>Imagen:</label>
                    <img className="img_tb" style={{marginLeft: "50px"}} src={`${imageBaseURL}${localStorage.getItem("image")}`} width='30px' />
                    <input type="file" className="form-control" name="avatar_image" onChange={this.changeHandler}/>
                    
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>  
            <br/>
            <Link to="/settings">
                    <button type="button" className="btn btn-outline-light">
                        Regresar
                    </button>
                </Link>  
            </div>
            
        ) 
    }
}