import './App.css';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Button from './components/Button';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import {DiJavascript1, DiReact, DiHtml5, DiCss3} from 'react-icons/di';
import {SiArduino, SiCplusplus, SiBootstrap} from 'react-icons/si'
import {MdEmail, MdOutlineLocationOn} from 'react-icons/md'
import {TbApi} from 'react-icons/tb';
import Foto from './assets/Foto.png'
import Card from './components/Card';
import ImageCard from './components/ImageCard';
import Tecnologias from './components/Tecnologias';
import Modal from './components/Modal';
import MaxFlix from './assets/MaxFlix.png';
import Telemetria from './assets/Telemetria.jpeg';
import LandingPage from './assets/LandingPage.png';
import Form from './components/Form';

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
      <section className='Skills' id='Skills'>
        <h2>Essas são as principais tecnologias que tenho familiaridade.</h2>
        <p>Dica: Clique em cada tecnologia para mais informações!</p>
        <div className='Tecnologias-Container'>
          <button type="button" data-bs-toggle="modal" data-bs-target="#HTML5"><Tecnologias link={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} title={'HTML 5'}/></button>
          <Modal title={"HTML5"} text={'HTML5 é uma linguagem de marcação, extremamente importante para formar o esqueleto de um projeto. Escrever um HTML de forma semântica é essencial para iniciarmos um projeto de qualidade.'}/>        
          <button type="button" data-bs-toggle="modal" data-bs-target="#CSS3"><Tecnologias link={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} title={'CSS 3'}/></button>
          <Modal title={"CSS3"} text={'O CSS3 possui a função de estilizar seu projeto. Aliado ao HTML, o CSS é capaz de personalizar toda a sua página, trazer responsividade ao projeto e criar seu próprio estilo.'}/>
          <button type="button" data-bs-toggle="modal" data-bs-target="#SASS"><Tecnologias link={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"} title={'SASS'}/></button>
          <Modal title={"SASS"} text={'O SASS é uma linguagem de extensão do CSS, que possui a função de facilitar e simplificar o processo de estilização'}/>
          <button type="button" data-bs-toggle="modal" data-bs-target="#Bootstrap"><Tecnologias link={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"} title={'Bootstrap'}/></button>
          <Modal title={"Bootstrap"} text={'O Bootstrap é um framework web que utiliza HTML, CSS e JavaScript. Ele possui diversos componentes e modelos prontos para serem utilizados, trazendo mais rapidez na produção.'}/>
          <button type="button" data-bs-toggle="modal" data-bs-target="#JavaScript"><Tecnologias link={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} title={'JavaScript'}/></button>
          <Modal title={"JavaScript"} text={'O JavaScript é a linguagem de programação que traz a dinâmica do site. As funções dos botões, requisições http e animações podem ser feitas utilizando o JavaScript'}/>
          <button type="button" data-bs-toggle="modal" data-bs-target="#React"><Tecnologias link={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} title={'React'}/></button>
          <Modal title={"React"} text={'O React é uma biblioteca de JavaScript, utilizada para criação de interfaces de usuário. Essa biblioteca fornece diversos recursos que aceleram a produção e facilitam a manutenção do código.'}/>
          <button type="button" data-bs-toggle="modal" data-bs-target="#TypeScript"><Tecnologias link={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} title={'TypeScript'}/></button>
          <Modal title={"TypeScript"} text={'O TypeScript é um superset do JavaScript. Eles nos fornece um conjunto de formas mais eficientes de escrever o código JavaScript, adicionando recursos que não estão presentes nativamente na linguagem.'}/>
          <button type="button" data-bs-toggle="modal" data-bs-target="#C++"><Tecnologias link={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"} title={'C++'}/></button>
          <Modal title={"C++"} text={'C++ é uma das linguagens mais versáteis que existem, e é muito utilizada principalmente em microcontroladores. Isso porque seus recursos permitem que sistemas desenvolvidos nessa linguagem sejam de alto desempenho, estáveis e seguros.'}/>
        </div>
      </section>
      <section className='Projetos' id='Projetos'>
        <strong className='Projetos-Title'>Projetos: </strong>
        <p>Esses são meus projetos desenvolvidos durante minha trajetória de estudos.</p>
        <div className='Projetos-Corpo'>
          <ImageCard title={'MaxFlix'} text={'Projeto feito em React utilizando uma requisição de api externa para mostrar os filmes em cartaz e informações sobre cada um deles. '}
          tecnologias={<><DiHtml5 size={20} /><DiCss3 size={20}/><DiJavascript1 size={20}/><DiReact size={20}/><TbApi size={20} /></>} image={MaxFlix}/>
          <ImageCard title={'Telemetria'} text={'Projeto utilizado para transmissão de dados em tempo real via rádio, com dados de temperatura, pressão e coordenadas geográficas.'}
          tecnologias={<><SiCplusplus size={20}/><SiArduino size={20} /></>} image={Telemetria} redirect={'https://github.com/gabriel-maximus/Avionica'}/>
          <ImageCard title={'Landing Page de Seguros'} text={'Landing page fictícia de um site de seguros. Desafio do site Front-End mentor, e que aborda conceitos de responsividade.'}
          tecnologias={<><DiHtml5 size={20}/><DiCss3 size={20}/><SiBootstrap size={20} /></>} image={LandingPage} redirect={'https://gabriel-maximus.github.io/Landing-Page-Seguros/'}/>
        </div>
      </section>
      <section className='Contato' id='Contato'>
        <div className='Itens-Contato'>
          <main className='Item-Contato'>
            <h2><IoLogoLinkedin size={20}/> Linkedin</h2>
            <a href='https://www.linkedin.com/in/gabriel-maximus/' target={'blank'}>gabriel-maximus</a>
          </main>
          <main className='Item-Contato'>
            <h2><MdEmail size={20}/> Email</h2>
            <a href='mailto:gabrielmaximus80@gmail.com' target={'blank'}>gabrielmaximus80@gmail.com</a>
          </main>
          <main className='Item-Contato'>
            <h2><MdOutlineLocationOn size={20}/> Localização</h2>
            <p>Niterói - RJ</p>
          </main>
        </div>
        <div className='Item-Formulario'>
          <Form />
        </div>
      </section>
    </div>
  );
}

export default App;
