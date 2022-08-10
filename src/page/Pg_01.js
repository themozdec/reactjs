import React from "react";
import Com3 from '../componentes/_Com3.js'
import '../style/tarjeta.css';
import img_a from '../img/img_a.jpg';
import img_b from '../img/img_b.jpg';
import img_c from '../img/img_c.jpg';

const info = [{
    matricula: 221810672,
    nombre: "Juan Antonio",
    app: "Beltran Garcia",
    fn: "18/01/1995",
    carrera: "IDGS",
    grupo: "IDGS-91",
    uni:"UTVT",
    img: img_a
    },{
        matricula: 221810672,
        nombre: "Juan Antonio",
        app: "Beltran Garcia",
        fn: "18/01/1995",
        carrera: "IDGS",
        grupo: "IDGS-91",
        uni:"UTVT",
        img: img_b    
    },{
        matricula: 221810672,
        nombre: "Juan Antonio",
        app: "Beltran Garcia",
        fn: "18/01/1995",
        carrera: "IDGS",
        grupo: "IDGS-91",
        uni:"UTVT",
        img: img_c
    }]

export default class Pg_01 extends React.Component{
    render(){
        return(
            <div>
                <Com3 info={info}/>
            </div>
        )
    }
        
    }
