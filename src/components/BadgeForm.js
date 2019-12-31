import React from 'react';

class BadgeForm extends React.Component{
    // Capturador del evento de un cambio en el input
    handleChange = e => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });
    };
    // Capturador del evento click
    handleClick = e => {
        console.log('El boton ha sido clickeado');
    };
    // Capturar el evento del envio de datos
    handleSubmit = e => {
       e.preventDefault();
       console.log('El submit se ha activado!');
    };

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                {/* 2 Forma
                
                Capturando el evento del form para enviar su data hacia otro lugar, a la api respectivamente.

                Validando a nuestro gusto si se enviara o no se enviara validando nosotros los datos de los demas propiedades
                */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"></input>
                    </div>
                    {/*1- Forma 
                    
                    Para sacar el problema del submit que pasa recurrentemente al tener un boton dentro de un form
                    
                    Debemos de asignarle un tipo boton para que ya no se lance de manera instantanea al clickearlo

                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                    */}
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;