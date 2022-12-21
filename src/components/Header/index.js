import React from 'react'
import './styles.css'

export default function Header() {
  return (
    <nav className='Container'>
    
        <div className='Titulo'>
            <strong>{'<'} Portfólio /{'>'}</strong>
        </div>
    
        <div className='Links'>
            <a href='#'>Inicio</a>
            <a href='#'>Sobre</a>                
            <a href='#'>Experiências</a>
            <a href='#'>Projetos</a>
            <a href='#'>Skills</a>
        </div>
    
    </nav>
  )
}
