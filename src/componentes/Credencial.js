import React from 'react'
import { Table } from 'react-bootstrap'
import '../style/credencial.css'

export default class Credencial extends React.Component {
    render(){
        const { matricula, nombre,gen,fec,grupo } = this.props
        return(
            <div className='dvcont01'>
                <div className='dvcont02'>
                    <img src='https://utvtblog.files.wordpress.com/2017/04/cropped-logo-utvt.png' alt='UTVT' className='imgtitulo'/>
                    <table className='tb'>
                        <tbody>
                            <tr>
                                <td rowSpan="6" className='tdfoto'>
                                    <img src='https://i.pinimg.com/564x/c6/fa/cc/c6facc8eb0f1f164853fd86eb19d1ac3.jpg' className='imgfoto'/>
                                </td>
                                <td><b>Matrícula</b></td>
                                <td>{ matricula }</td>
                            </tr>
                            <tr>
                                <td>Nombre:</td>
                                <td>{nombre}</td>
                            </tr>
                            <tr>
                                <td>Género:</td>
                                <td>{gen}</td>
                            </tr>
                            <tr>
                                <td>Fecha N.</td>
                                <td>{fec}</td>
                            </tr>
                            <tr>
                                <td>Grupo:</td>
                                <td>{grupo}</td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <i>Certifica que la persona mencionada anteriormente es estudiante de 
                                        esta institución.</i>
                                    </td>
                            </tr>
                            <tr>
                                <td colSpan='2'>
                                    <i>Inscrito en Septiembre 9,2000</i>
                                    </td>
                                <td className='tbfondo'>UTVT</td>    
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}