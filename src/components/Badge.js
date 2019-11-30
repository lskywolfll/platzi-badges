import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        // Por convenciones para agregar los estilos deseados para el html que tengamos en nuestros componentes debemos usar classname en vez de class
        // Esto es por que ya js tiene una palabra clave llamada class por eso nos recomienda que mejor usemos otro que es el classname
        return <div className="Badge">
            <div className="Badge__header">
                {/* propierti={value} => prop(caracteristica)*/}
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://i.imgur.com/lp2L0A7.jpg" alt="Avatar" />
                <h1>Rene <br/> Sanchez</h1>
            </div>

            <div className="Badge__section-info">
                <h3>Desarrollador Full Stack</h3>
                <div>@lReneNk</div>
            </div>

            <div className="Badge__footer">#PlatziConf</div>
        </div>
    }
}
// Exportacion del componente
export default Badge;