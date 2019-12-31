import React from 'react';
// Componentes
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
// Estilos de la pagina
import './styles/BadgeNew.css'

class BadgeNew extends React.Component{

    state = {
        form: {}
    };

    handleChange = e => {
        this.setState({
            // 1- Primera Solucion para el no sobreescribimiento de los estados y eliminando los anteriores
            // ...this.state.form,
            // [e.target.name]: e.target.value,
            // 2- Forma mejor ya que este copia y lo deja dentro del objeto del estado y no como el otro del primero que efectivamente se tiene el form pero vacio literalmente pero con las demas propieades a usar
            form : {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
            // 3- forma
            // const nextForm = this.state.form;
            // nextForm[e.target.name] = e.target.value;
        });
    };

    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName="René"
                            lastName="Sanchez"
                            avatarUrl="https://i.imgur.com/lp2L0A7.jpg"
                            jobTitle="Programador"
                            twitter="lReneNk" 
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;