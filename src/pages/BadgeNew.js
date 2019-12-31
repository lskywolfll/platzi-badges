import React from 'react';
// Componentes
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
// Estilos de la pagina
import './styles/BadgeNew.css'

class BadgeNew extends React.Component{
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
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;