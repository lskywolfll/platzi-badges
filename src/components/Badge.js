import React from 'react';
// import ReactDOM from 'react-dom';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return <div>
            <div>
                {/* propierti={value} => prop(caracteristica)*/}
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div>
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50
" alt="Avatar" />
                <h1>Rene <br/> Sanchez</h1>
            </div>

            <div>
                <p>Desarrollador Full Stack</p>
                <p>@lReneNk</p>
            </div>

            <div>
                <footer>#Platzi</footer>
            </div>
        </div>
    }
}
// Exportacion del componente
export default Badge;