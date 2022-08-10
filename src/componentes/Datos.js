import React from 'react'
import ReactDOM from 'react-dom'
import img_b from '../img/img_b.jpg'


class Datos extends React.Component {
  render(){
    return <div>
    <h2> Componente 1 </h2><br/>
    <img src={img_b} width="200" />
    </div>
  }
}
export default Datos
 