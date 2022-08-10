import React from "react"
import Reac from "react"
import { Link } from "react-router-dom"

export default class Delete_user extends React.Component{
    state = {
        user:[]
    }
    componentDidMount(){
         //fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/products/'+this.props.location.state.id,{headers: {
           fetch('http://localhost:8000/api/v1/user/users/'+this.props.location.state.id,{headers: { 
            'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem("token")??""
    }})
        .then(response => response.json())
        .then(userJson => this.setState({user: userJson}))
        //fetch('https://fyc.store-line.stormonlinegroup.com/api/v1/user/products/'+this.props.location.state.id,{headers: {
        fetch('http://localhost:8000/api/v1/user/users/'+this.props.location.state.id,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+localStorage.getItem("token")??""
            }})
    }
    render(){
        //const imageBaseURL = "https://fyc.store-line.stormonlinegroup.com/storage/";
        const imageBaseURL = "http://localhost:8000/storage/";
        const { user } = this.state
        var today = new Date();
        var date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();
        var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        return(
            <>
            {user.id ?
            <center>
                <br/>
                <h1>Usuario eliminado.</h1>
                <br/>
                <div className="card-mb-3" style={{maxWidth:"540px",color:"#000000", backgroundColor:"#FAFA00"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={`${imageBaseURL}${user.avatar_url}`} className="card-img img_crud" alt={user.name}/>                  
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">
                            <b>Email:</b>: {user.email}<br/>

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
                <div className="alert alert-success" role="alert" style={{maxWidth: "750px"}}>
                    <h4 className="alert-heading">Bien Hecho!!!!</h4>
                    <p>El usuario se ha borrado del registro exitosamente !!!!
                    </p>
                    <p className="mb-0">{ date + ' || ' + time } </p>
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