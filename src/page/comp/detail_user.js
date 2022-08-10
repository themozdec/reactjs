import React from "react"
import { Link } from "react-router-dom"

export default class Detail_cart extends React.Component{
   
    state = {
        user: {},
    }

    componentDidMount() {
        //fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/products/'+this.props.location.state.id,{headers: {
          fetch('http://localhost:8000/api/v1/user/users/'+this.props.location.state.id,{headers: {  
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(userJson => this.setState({user: userJson}))
    }
    render(){
        const {user} = this.state
        //const imageBaseURL = "https://fyc.store-line.stormonlinegroup.com/storage/";
        const imageBaseURL = "http://localhost:8000/storage/";
        //console.log(product.product_images[0]);
        return(
            <>
            {user.id ?
                
            <center>
               
               
                <br/>
                <h1>Detalle del usuario</h1>
                <br/>
                
                <div className="card-mb-3" style={{maxWidth:"540px",color:"#000000"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        
                            <img src={`${imageBaseURL}${user.avatar_url}`} className="card-img img_crud" alt={user.name}/>                      
                        </div>

                <div className="col-md-8">
                    <div style={{color:"#000"}} className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">
                            <b>Email:</b> {user.email}<br/>

                        </p>
                        <p className="card-text">
                            <small className="text-mute">
                                Última actualización hace:<br/> {user.created_at}
                            </small>
                        </p>
                    </div>
                </div>
                </div>
                </div>
                <br/><br/>
                <Link to="/users">
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
