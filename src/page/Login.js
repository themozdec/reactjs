import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import $ from 'jquery';
import { Link, NavLink } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
 
const Login=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
     
    const [msg,setMsg] = useState('');
 
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
 
    const [user, setUser] = useState({
        email: "",
        password:""
      });
 
      let history = useHistory(); 
 
      const {email,password} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
 
    const signIn = () =>
    {
 
      const users = { username };  // To Store Email in Localstore and send to Home Page 
 
       if(user.email === '')
       {
         alert('Campo email está vacío')
       }
       else if(user.password === '')
       {
         alert('Campo contraseña está vacío')
       }
 
       axios.post("https://z.store-line.stormonlinegroup.com/api/v1/user/login",user)
       .then(response => {
        //setMsg('');
        localStorage.setItem("name",response.data.user.name);
        localStorage.setItem("email",response.data.user.email);
        localStorage.setItem("image",response.data.user.avatar_url);
        localStorage.setItem("created_at",response.data.user.created_at);
        localStorage.setItem("type", response.data.user.type);
        localStorage.setItem("token", response.data.token);
        //alert('Bienvenido '+response.data.user.name);
        history.push("/home");
      })
      .catch(err => {
          
        $.each(err.response.data.errors, function(key, value) {
          if(key == 'email'){
            setMsg(err.response.data.errors.email[0]); 
           }
           else if(key == 'password'){
            setMsg(err.response.data.errors.password[0]); 
           }  
           else {
            setMsg(err.response.data.errors[0]);
           }   
       });
       
       
         
        
      });
    }
 
    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Iniciar Sesión</h2>
                   
                </Grid>
                <TextField label='Email'  name="email" value={email}  onChange={e => onInputChange(e)} placeholder='Enter Email' type='text' fullWidth required/>
                <TextField label='Password'  name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>
              
                <Button type='submit' onClick={signIn} color='primary' variant="contained" style={btnstyle} fullWidth>Entrar</Button>
              
                <h4 style={{color:"red"}}>{msg}</h4>
            </Paper>
        </Grid>
    )
}
 
export default Login