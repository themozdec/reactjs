import React from "react"
import { Grid,Paper, Avatar,Box, TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
 
const Home=()=>{


const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
const avatarStyle={backgroundColor:'#3370bd'}
const btnstyle={margin:'8px 0',}

const {users} = useParams();  
let history = useHistory(); 

const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const image = localStorage.getItem('image');
const created_at = localStorage.getItem('created_at');
const type = localStorage.getItem('type');
const token = localStorage.getItem('token');
if(token == null){
history.push("/");
}  
  
const logout = () => 
{
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("image");
    localStorage.removeItem("created_at");
    localStorage.removeItem("type");
    localStorage.removeItem("token");
    history.push("/");
}
   
    return(
        <>
        <h4 style={{textAlign:"left",marginLeft:"10px"}}>Bienvenido : <span style={{color:"white"}}>{name}</span></h4> <br/> <br/>
                             {/*{type==0 ?*/}
                             {1==1 ?
                            <><Link to={({ pathname: '/users'})}>
                                 <button type="button" style={{width:"100%"}} className="btn btn-outline-success btn-sm">
                                    Usuarios
                                 </button>
                            
                            </Link>
                            <br/>
                            <Link to={({ pathname: '/products'})}>
                                 <button type="button" style={{width:"100%"}} className="btn btn-outline-secondary btn-sm">
                                    Productos
                                 </button>
                            
                            </Link>
                            <br/>
                            </> : ''}
                            <Link to={({ pathname: '/cart'})}>
                                 <button type="button" style={{width:"100%"}} className="btn btn-outline-info btn-sm">
                                    Carrito
                                 </button>
                            
                            </Link>
                            <br/>
                            
                            <Link to={({ pathname: '/favorites'})}>
                                 <button type="button" style={{width:"100%"}} className="btn btn-outline-danger btn-sm">
                                    Favoritos
                                 </button>
                            
                            </Link>
                            <br/>
                            
                            <Link to={({ pathname: '/addresses'})}>
                                 <button type="button" style={{width:"100%"}} className="btn btn-outline-warning btn-sm">
                                    Direcciones
                                 </button>
                            
                            </Link>
                            <br/>
                            
                            <Link to={({ pathname: '/settings'})}>
                                 <button type="button" style={{width:"100%"}} className="btn btn-outline-primary btn-sm">
                                    Ajustes
                                 </button>
                            
                            </Link>
                            <br/><br/>

                            <div style={{  float:"right",marginRight:"50px"}}>
                           
                           <Button type='submit' onClick={logout} color='primary' justifyContent="flex-end" variant="contained" style={btnstyle} fullWidth>Salir</Button>
                         
                        </div>

                            </>
                            
    )
}
   


    export default Home