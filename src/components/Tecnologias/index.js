import React from 'react'
import './styles.css'

function Index({link, title}) {
    return (
        <main className='Tecnologias'>
            <img src={link} alt={title}/>
            <h2>{title}</h2>
        </main>
    )
}

export default Index
