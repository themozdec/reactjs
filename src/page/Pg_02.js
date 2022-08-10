import React from "react";
import Formulario1 from "../componentes/Formulario1";
import Credencial from "../componentes/Credencial";

export default class Pg_02 extends React.Component {
    state = {
        info: {
            matricula: 221811758,
            nombre: 'Beltran Garcia, Juan Antonio',
            fec: '02/08/2000',
            gen: 'Masculino',
            grupo: 'ITIC-91'
        }
    }
    envioValor = (event) =>{
        this.setState({
            info: {
                ...this.state.info,
                [event.target.name]: event.target.value
            }
        })
    }
    render(){
        return(
            <div className="containers">
                <div className="row">
                    <div className="col-sm">
                        <Credencial {...this.state.info} />
                    </div>
                    <div className="col-sm">
                        <h1>Información Alumno</h1><br/>
                        <br/>
                    <Formulario1
                    camForm = {this.envioValor}
                    info = {this.state.info}
                />
                    </div>
                </div>
                
            </div>
        )
    }
}