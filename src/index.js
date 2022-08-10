import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './style/main.css'

import Router from './router/router'

import Pg_00 from './page/Pg_00'
import Pg_01 from './page/Pg_01'
import Pg_0X from './page/Pg_0X'

const info = <Router/>


/* ----JavaScript Nativo
const objeto = document.createElement('h2')
  objeto.innerText = ''

const objeto2 = document.createElement('b')
  objeto2.innerText = 'React app'

const informacion = document.getElementById('root')
  informacion.appendChild(objeto)

const informacion2 = document.getElementById('info')
    informacion2.appendChild(objeto2)*/


//objeto -> elemento =apple
//-------------------ReactDOM--------

// ------------------react jsx------------------

/*const nombre = 'UTVT'
const year = 2022

const escuela ={
  nombre: 'UTVT',
  year: 2022,
}

//-----------------------------------
const objeto = <h2> {escuela.nombre}, {escuela.year}</h2>
const informacion = document.getElementById('root')

ReactDOM.render(objeto, informacion)
//---------------------------------------------------------
const objeto2 = <b> React app</b>
const informacion2 = document.getElementById('info')

ReactDOM.render(objeto2, informacion2)
//--------------------------------------------------------
//-----OPERACIONES MATEMATICAS------
const num1 = 2;
const num2 = 6;

const armat ={
  n1: 2,
  n2: 5,
  n3: 7,
  n4: 9
}

const objeto3 = <div>
  <br/>
  <h2>OP-Matematicas</h2>
  {num1} + {num2} = {num1+num2}<br/>
  {num1} / {num2} = {num1/num2}<br/>
  <br/>
  {armat.n1} * {armat.n3} = {armat.n1*armat.n3}<br/>
  {(armat.n2 > armat.n1)? 'Mayor':'Menor'}<br/>
</div>
const informacion3 = document.getElementById('mate')

ReactDOM.render(objeto3, informacion3)
//-------------------------------------------------------
//----funciones en react------------------------------
function datos1 (){
  return <div>
    <b>Funcion N°1</b>
    <br/>
  </div>
}

function datos2 (numeros, txto){
  const rest = numeros.n2 * numeros.n4;
  return txto + " = " + numeros.n1 + " != " + numeros.n2 + "//" + rest
}

function datos3 (numero){
  if(numero > 5){
    return <h1>numero es mayor que 5</h1>
  }
  else {
    return <h1>numero es menor que 5</h1>
  }
}
const numero = 10;

let listaNumerica = [];

const listanum = () => {
  for(var x = 0; x<10; x++){
    listaNumerica.push(<li>{x}</li>);
  }
  return listaNumerica;
}

const txtv = "nUmErOs";

const objeto4 = <div>
  <h2>Funciones</h2><br/>
  {datos1()}
  {datos2(armat, txtv)}
  {datos3(numero)}
<ul>{listanum()}</ul>
</div>

const informacion4 = document.getElementById('funciones')

ReactDOM.render(objeto4, informacion4)*/

///----------------------------------------------------------------------
/*const dtimg ={
  sr: "https://i0.wp.com/asisucede.com.mx/wp-content/uploads/2017/08/logo-universidad-tecnologica-del-valle-de-toluca.png?fit=300%2C150&ssl=1",
  al: "foto UTVT"
}


const info  = <div>
<h2> Etiquetas html / Tags / Elementos</h2><br/>
<br></br>
<img src="" alt="UTVT"></img>
<br/>
<img src="" alt="UTVT" />
</div>
//-----------------------------------------------------
/*const informacion = document.getElementById('root')
ReactDOM.render(objeto, informacion)*/

//////////////////////////////////////////////////////////////
//ReactDOM.render (objeto, document.getElementById('root'))
//--------------------------------------------------------------------

ReactDOM.render(
  info,
  document.getElementById('root')
);
