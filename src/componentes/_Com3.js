import React from "react"

export default class Com3 extends React.Component{
    constructor (props){
        super(props)
            this.state = {
                info: [{
                matricula: 0,
                nombre: 0,
                app: 0,
                fn: 0,
                carrera: 0,
                grupo: 0,
                uni: 0,
                img: 0,
                }]
            }
        }
    
    render(){
        return(
            <div className="container">
                <h1>State - Array -Component</h1>
                <br/><br/>
                <div className="row">
                    {this.props.info.map((tarjeta) => {
                        return (
                <div className="col">
                    <div className="tarjeta">
                        <img src={tarjeta.img}/>
                    <div>
                    <h5>{tarjeta.app}, {tarjeta.nombre}</h5>
                    <p>
                        Matricula: {tarjeta.matricula} <br/>
                        Fecha N.: {tarjeta.fn} <br/>
                        Grupo: {tarjeta.grupo} <br/>
                        Carrera: {tarjeta.carrera} <br/>
                        Universidad: {tarjeta.uni} <br/>

                    </p>
                    <a href={tarjeta.img} className="btn btn-primary" target="_blank">Descargar</a>
                </div>
                </div>
                </div>
                )
            })}
                </div>
            </div>
        )
    }
}