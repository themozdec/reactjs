import React from "react"
import { Link } from "react-router-dom"

export default class Edit_address extends React.Component{
    state = {
        address: [],
        editar: '',
        e: '',
    }
    componentDidMount(){

        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/addresses/'+this.props.location.state.address_id,{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(addressJson => this.setState({address:addressJson}))
    }
    changeField = (event) => {
        this.setState({
            address:{
                ...this.state.address,
                [event.target.name]: event.target.value
            }
        })
    }
    subForm = (event) =>{
        event.preventDefault();
        let data = {
            address : this.state.address.address,

        };
        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/addresses/'+this.props.location.state.address_id,{
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
        .then(data => this.setState({editar: data.message ? data.message : data.errors,e: data.message ? "success" : "danger"}))
    }
    render(){
        const{address,editar,e} = this.state
        return(
            <>
            {address.address ?
            <div className="container" style={{maxWidth:"750px"}}>
            <br/>
            <h1>Editar Dirección</h1>
            <br/>
            { editar?
                        <div className={"alert alert-"+e} role="alert">
                           {editar}
                        </div>
                    :
                        <div></div>           
         }
            <form onSubmit={this.subForm}>
                <div className="form-group">
                    <label>Dirección:</label>
                    <input type="text" className="form-control" name="address" defaultValue={address.address} onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Latitud:</label>
                    <input type="number" className="form-control" name="latitude" defaultValue={address.latitude} onChange={this.changeField}/>
                </div>
                <div className="form-group">
                    <label>Longitud:</label>
                    <input type="number" className="form-control" name="longitude" defaultValue={address.longitude} onChange={this.changeField}/>
                </div>
                
                <div className="form-group">
                    <label>Ciudad:</label>
                    <input type="text" className="form-control" name="city" defaultValue={address.city} onChange={this.changeField}/>
                </div><br/>
                <div className="form-group">
                    <label>Código Postal:</label>
                    <input type="number" className="form-control" name="pincode" defaultValue={address.pincode} onChange={this.changeField}/>
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
             : ''}
             </>
        ) 
    }
}