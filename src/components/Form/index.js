import React from 'react'
import './styles.css'

function Form() {
    return (
        <div className='Formulario'>
            <form action="https://formsubmit.co/gabrielmaximus80@gmail.com" method="POST">
                <h2>Contato:</h2>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Nome" name='Nome' required/>
                    <label className='Label-Form' for="floatingInput">Nome:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="seu@email.com" name='Email' required/>
                    <label className='Label-Form' for="floatingInput">Email:</label>
                </div>
                <textarea placeholder='Mensagem:' name='Mensagem'></textarea>
                <input type="hidden" name="_autoresponse" value="Sua mensagem foi enviada com sucesso! Em breve irei retornar, obrigado."></input>
                <input type="hidden" name="_next" value="https://gabriel-maximus.github.io/Portfolio/"></input>
                <button type="submit" onSubmit={()=>{alert("Mensagem Enviada")}}>Enviar!</button>
            </form>
        </div>
    )
}

export default Form
