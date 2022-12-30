import './App.css';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Button from './components/Button';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import {DiJavascript1, DiReact, DiHtml5, DiCss3} from 'react-icons/di';
import {SiArduino, SiCplusplus, SiBootstrap} from 'react-icons/si'
import {TbApi} from 'react-icons/tb';
import Foto from './assets/Foto.png'
import Card from './components/Card';
import ImageCard from './components/ImageCard';
import MaxFlix from './assets/MaxFlix.png';
import Telemetria from './assets/Telemetria.jpeg'
import LandingPage from './assets/LandingPage.png'

function App() {
  ScrollReveal({ reset: true });

  return (
    <div className="App">
      <Header />
      <div className='Content'>
        <section className='Inicio' id='Inicio'>
          <div className='Column slide-in-left'>
            <span className='Text'>Olá, eu sou</span>
            <strong className='Title'>Gabriel Maximus</strong>
            <h1 className='SubTitle'>Desenvolvedor Front-End.</h1>
            <div className='Row'>
              <Button Conteudo={<IoLogoLinkedin size={50} color={'#fff'}/>} Ref={'https://www.linkedin.com/in/gabriel-maximus/'}/>
              <Button Conteudo={<IoLogoGithub size={50} color={'#fff'}/>} Ref={'https://github.com/gabriel-maximus'}/>          
            </div>
          </div>
          <div className='Imagem tilt-in-fwd-tr'>
            <img src={Foto} alt='#'></img>
          </div>
        </section>
      </div>
      <section className='Sobre' id='Sobre'>
          <Card />
      </section>
      <section className='Experiencias' id='Experiencias'>
          Experiencias
      </section>
      <section className='Projetos' id='Projetos'>
        <strong className='Projetos-Title'>Projetos: </strong>
        <p>Esses são meus projetos desenvolvidos durante minha trajetória de estudos.</p>
        <div className='Projetos-Corpo'>
          <ImageCard title={'MaxFlix'} text={'Projeto feito em React utilizando uma requisição de api externa para mostrar os filmes em cartaz e informações sobre cada um deles. '}
          tecnologias={<><DiJavascript1 size={20}/><DiReact size={20}/><TbApi size={20} /></>} image={MaxFlix}/>
          <ImageCard title={'Telemetria'} text={'Projeto utilizado para transmissão de dados em tempo real via rádio, com dados de temperatura, pressão e coordenadas geográficas.'}
          tecnologias={<><SiCplusplus size={20}/><SiArduino size={20} /></>} image={Telemetria} redirect={'https://github.com/gabriel-maximus/Avionica'}/>
          <ImageCard title={'Landing Page de Seguros'} text={'Landing page fictícia de um site de seguros. Desafio do site Front-End mentor, e que aborda conceitos de responsividade.'}
          tecnologias={<><DiHtml5 size={20}/><DiCss3 size={20}/><SiBootstrap size={20} /></>} image={LandingPage} redirect={'https://gabriel-maximus.github.io/Landing-Page-Seguros/'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
