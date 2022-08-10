import React from "react"
import { Link } from "react-router-dom"

export default class Detail_settings extends React.Component{

    render(){
        //const imageBaseURL = "https://fyc.store-line.stormonlinegroup.com/storage/";
        const imageBaseURL = "http://localhost:8000/storage/";
        //console.log(product.product_images[0]);
        return(
                
            <center>  
               
                <br/>
                <h1>Ajustes</h1>
                <br/>
                
                <div className="card-mb-3" style={{maxWidth:"540px",color:"#000000"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        
                            <img style={{width:"100%",height:"14rem"}} src={`${imageBaseURL}${localStorage.getItem("image")}`} width='30px' />                     
                        </div>

                <div className="col-md-8">
                    <div style={{color:"#000000"}} className="card-body">
                        <h5 className="card-title">{localStorage.getItem("name")}</h5>
                        <p className="card-text">
                            <b>Email:</b> {localStorage.getItem("email")}<br/>

                        </p>
                        <p className="card-text">
                            <small className="text-mute">
                                Última actualización hace:<br/> {localStorage.getItem("created_at")}
                            </small>
                        </p>
                    </div>
                </div>
                </div>
                </div>
                <br/><br/>
                <Link to="/settings">
                    <button type="button" className="btn btn-outline-light btn-sm">
                        Regresar
                    </button>
                </Link>
            </center>   
          
        )
        
    }
} 
