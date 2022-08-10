import React, { useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2';

export default class Edit_user extends React.Component{
    state = {
        user: [],
        editar: '',
        e: '',
        image:'',
    }
    //const [image, setImage] = useState()

    componentDidMount(){
       
        fetch('https://z.store-line.stormonlinegroup.com/api/v1/user/users/'+this.props.location.state.id,{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(userJson => this.setState({user:userJson}))
    }
     changeHandler = (event) => {
      this.setState({ 
        ...this.state, 
         [event.target.name]: event.target.files[0] })
  }

    changeField = (event) => {
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        })
    }
    //subForm = (event) =>{
       editUser = async (event) => {
        event.preventDefault();
        //const [validationError,setValidationError] = useState({})
        const formData = new FormData()
        formData.append('name', this.state.user.name)
        formData.append('email', this.state.user.email)
        formData.append('password', this.state.user.password)
        formData.append('avatar_image', this.state.avatar_image)
        await axios.post(`https://z.store-line.stormonlinegroup.com/api/v1/user/users/`+this.props.location.state.id, formData,{headers: {
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
        const{user,editar,e} = this.state
        return(
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Editar Usuario</h1>
            <br/>
          
            <form onSubmit={this.editUser}>
               
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" className="form-control" name="name" defaultValue={user.name} onChange={this.changeField}/>
                </div>
                <br/>
                 <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" name="email" defaultValue={user.email} onChange={this.changeField}/>
                </div>
                <br/>
                 <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" name="password" onChange={this.changeField}/>
                </div>
                <br/>
                <div className="form-group">
                    <label>Imagen:</label>
                     <img className="img_tb" style={{marginLeft: "50px"}} src={`${imageBaseURL}${user.avatar_url}`} width='30px' />
                    <input type="file" className="form-control" name="avatar_image" onChange={this.changeHandler}/>
                </div>
                <br/>
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
}
