import React from 'react'

class Componente2 extends React.Component{
constructor (props){
  super(props)
  this.state = {
    nombre:'UTVT',
    app:'Universidad',
    n1: 0,
    n2: 0,
    img: 'https://i.pinimg.com/564x/f2/41/15/f24115abe4951c4d826c53e6edd4ee65.jpg'
  }
}
componentDidMount(){
  setTimeout(() => {
    this.setState({
    nombre: this.props.nombre,
    app: this.props.app,
    n1: this.props.n1,
    n2: this.props.n2,
    img: this.props.img 
      })
  }, 5000)
} 

  render(){
    const {nombre, app, n1, n2, img} = this.state
    return <div>
      
      <img src={img} width="200" />
    <h1>{nombre}, {app}</h1><br/>
    {n1} + {n2} = {n1+n2}<br/>
    </div>
}}

export default Componente2













