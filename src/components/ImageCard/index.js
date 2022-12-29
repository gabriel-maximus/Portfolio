import React from 'react'
import './styles.css'

function ImageCard ({title, text, image, tecnologias, redirect}) {
    return (
        <div className="card">
            <img src={image} class="card-img-top" alt="Imagem do Projeto" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <hr />
                <strong>Tecnologias Utilizadas: </strong>
                <p className='tecnologias'>{tecnologias}</p>
                <div className='botao-card'>
                    <a href={redirect} target={'blank'} className="btn btn-primary">Visitar Projeto</a>
                </div>    
            </div>
        </div>
    )
}

export default ImageCard 