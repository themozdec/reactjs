import React from "react"
import Reac from "react"
import { Link } from "react-router-dom"

export default class Delete extends React.Component{
    state = {
        product:[]
    }
    componentDidMount(){
        let data = {
            product_id: this.props.location.state.product_id

        };
        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/products/'+this.props.location.state.product_id,{headers: {
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(productJson => this.setState({product: productJson}))

        fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/favorites',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token")??""
            },mode: "cors",
            body: JSON.stringify(data)})
    }
    render(){
        const imageBaseURL = "https://fyc.store-line.stormonlinegroup.com/storage/";
        const { product } = this.state
        var today = new Date();
        var date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        return(
            <>
            {product.product_images ?
            <center>
                <br/>
                <h1>Producto eliminado de favoritos.</h1>
                <br/>
                <div className="card-mb-3" style={{maxWidth:"540px",color:"#000000", backgroundColor:"#FAFA00"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`${imageBaseURL}${product.product_images[0].url}`} className="card-img img_crud" alt={product.name}/>                  
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">
                            <b>Descripci??n</b>: {product.description}<br/>

                        </p>
                        <p className="card-text">
                            <small className="text-mute">
                                ??ltima actualizaci??n hace:<br/> {product.created_at}
                            </small>
                        </p>
                    </div>
                </div>
                </div>
                </div>
                <div className="alert alert-success" role="alert" style={{maxWidth: "750px"}}>
                    <h4 className="alert-heading">Bien Hecho!!!!</h4>
                    <p>El producto se ha borrado del registro exitosamente !!!!
                    </p>
                    <p className="mb-0">{ date + ' || ' + time } </p>
                </div>
                <br/><br/>
                <Link to="/favorites">
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