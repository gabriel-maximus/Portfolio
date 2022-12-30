import React from 'react'
import './styles.css'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-black">
    <div className="container-fluid">
      <a className="navbar-brand" href="#Inicio">{'<'}PORTFOLIO{'/>'}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse conteudo" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#Inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projetos">Projetos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#Skills'>Skills</a>
          </li>
          <li className="nav-item">
            <a className='nav-link' href='#Contatos'>Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
