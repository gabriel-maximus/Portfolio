import React from 'react'
import './styles.css'
import Button from '../Button' 

export default function Card() {
  return (
    <div className='Card-Content'>
        <article className='Sobre-Mim'>
            <strong>Sobre:</strong>
            <p>Cursando Engenharia Elétrica com Ênfase em Sistemas e Computação na UERJ, faço parte do Grupo de Foguetes do Rio de Janeiro, projeto de extensão que possui o objetivo de desenvolver tecnologia e conteúdo científico na área de foguetemodelismo.</p>
            <p>Sou apaixonado por tecnologia e programação, é uma profissão incrível que consegue unir criatividade com a solução de problemas. Aprendi muito sobre a área trabalhando com códigos para microcontroladores utilizando C++ com Arduinos/Esp32 e gerenciando a plataforma de versionamento de códigos da equipe através do Git/GitHub. Atualmente estudo sobre desenvolvimento web e mobile utlizando JavaScript e suas bibliotecas e frameworks. Assim como meus códigos, estou em constante evolução e pretendo me aperfeiçoar cada vez mais na área.</p>
            <Button Conteudo={'Ver Currículo'} Ref={'https://github.com/gabriel-maximus/gabriel-maximus/blob/main/CV_Gabriel_Maximus.pdf'}/>
        </article>
    </div>
  )
}
