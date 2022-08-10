import React from "react"
import img_a from '../img/img_a.jpg'
import img_c from '../img/img_c.jpg'
import arc_1 from '../archivos/arc_1.docx'
import Datos from '../componentes/Datos'
import Componente2  from '../componentes/Componente2'

const infcomponente2 = {
  nombre: "Sergio ",
  app:"Medina Pérez",
  n1: 10,
  n2: 8,
}


export default class Pg_00 extends React.Component {
    render(){
        return(
            <div class="container">
  <div class="row">
    <div class="col">
    <h1>Componentes</h1><br/>
    <img src={img_a} width="200"/><br/>
    <a href={arc_1} target="_black">Archivo 1</a><br/>
    </div>
    <div class="col">
        <Datos />
    </div>
    <div class="col">
      <h2>Componente 2</h2><br/>
      <Componente2 
      nombre={infcomponente2.nombre} 
      app={infcomponente2.app} 
      n1={infcomponente2.n1} 
      n2={infcomponente2.n2} 
      img={img_c}/> 
    </div>
  </div>
</div>

        )
    }
}