import React from 'react'
import './styles.css'

export default function Header() {
  return (
    <nav className='Container'>
    
        <div className='Titulo'>
            <strong>{'<'} Portfólio /{'>'}</strong>
        </div>
    
        <div className='Links'>
            <a href='#Inicio'>Inicio</a>
            <a href='#Sobre'>Sobre</a>                
            <a href='#Experiencias'>Experiências</a>
            <a href='#Projetos'>Projetos</a>
            <a href='#Skills'>Skills</a>
        </div>
    
    </nav>
  )
}
