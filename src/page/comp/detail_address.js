import React from "react"
import { Link } from "react-router-dom"

export default class Detail_address extends React.Component{
   
    state = {
        address: {},
    }

    componentDidMount() {
        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/addresses/'+this.props.location.state.address_id,{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(addressJson => this.setState({address: addressJson}))
    }
    render(){
        const {address} = this.state
        const imageBaseURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlrtljpoL2Rr5ILtf8awwKSGTWTATagXD8Q&usqp=CAU";
        //console.log(product.product_images[0]);
        return(
            <>
            {address.address ?
                
            <center>
               
               
                <br/>
                <h1>Detalle de la dirección</h1>
                <br/>
                
                <div className="card-mb-3" style={{maxWidth:"540px",color:"#000000"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        
                            <img src={imageBaseURL} className="card-img img_crud" alt=""/>                      
                        </div>

                <div className="col-md-8">
                    <div style={{color:"#FFFFFF"}} className="card-body">
                        {/*<h5 className="card-title">{address.address}</h5>*/}
                        <p className="card-text">
                            <b>Dirección:</b> {address.address}<br/>
                            <b>Latitud:</b> {address.latitude}<br/>
                            <b>Longitud:</b> {address.longitude}<br/>
                            <b>Ciudad:</b> {address.city}<br/>
                            <b>Código Postal:</b> {address.pincode}<br/>

                        </p>
                        <p className="card-text">
                            <small className="text-mute">
                                Última actualización hace:<br/> {address.created_at}
                            </small>
                        </p>
                    </div>
                </div>
                </div>
                </div>
                <br/><br/>
                <Link to="/addresses">
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
