import React from "react"
import { Link } from "react-router-dom"

export default class Register_address extends React.Component{
    state = {
        alta: '',
        e:'',
        type:'2'
    }
    
    changeField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    subForm = (event) =>{
        event.preventDefault();
        let data = {
            longitude: this.state.longitude,
            latitude: this.state.latitude,
            address: this.state.address,
            city: this.state.city,
            pincode: this.state.pincode,
            type: this.state.type

        };
        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/addresses',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer '+localStorage.getItem("token")??""
                },
                mode: "cors",
                body: JSON.stringify(data)
            })
        .then(response => response.json())
        .then(data => this.setState({alta: data.message ? data.message : data.errors,e: data.message ? "success" : "danger"}))
    }
    render(){
        const{alta,e} = this.state
        return(
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Agregar dirección</h1>
            <br/>
            { alta?
                        <div className={"alert alert-"+e} role="alert">
                           {alta}
                        </div>
                    :
                        <div></div>           
         }
            <form onSubmit={this.subForm}>
                
                <div className="form-group">
                    <label>Dirección:</label>
                    <input type="text" className="form-control" name="address" onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Latitud:</label>
                    <input type="number" className="form-control" name="latitude" onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Longitud:</label>
                    <input type="number" className="form-control" name="longitude" onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Ciudad:</label>
                    <input type="text" className="form-control" name="city" onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Código Postal:</label>
                    <input type="number" className="form-control" name="pincode" onChange={this.changeField}/>
                    <input type="hidden" className="form-control" name="type" value="2"/>
                </div><br/>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>  
            <br/><br/>
            <Link to="/addresses">
                    <button type="button" className="btn btn-outline-light">
                        Regresar
                    </button>
                </Link>  
            </div>
            
        ) 
    }
}