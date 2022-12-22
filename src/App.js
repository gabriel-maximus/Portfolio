import './App.css';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Button from './components/Button';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import Foto from './assets/Foto.png'

function App() {
  ScrollReveal({ reset: true });

  return (
    <div className="App">
      <Header />
      <div className='Content'>
        <section className='Inicio' id='Inicio'>
          <div className='Column'>
            <span className='Text'>Olá, eu sou</span>
            <strong className='Title'>Gabriel Maximus</strong>
            <h1 className='SubTitle'>Desenvolvedor Front-End.</h1>
            <div className='Row'>
              <Button Conteudo={<IoLogoLinkedin size={50} color={'#fff'}/>} Ref={'https://www.linkedin.com/in/gabriel-maximus/'}/>
              <Button Conteudo={<IoLogoGithub size={50} color={'#fff'}/>} Ref={'https://github.com/gabriel-maximus'}/>          
            </div>
          </div>
          <div className='Imagem'>
            <img src={Foto} alt='#'></img>
          </div>
        </section>
      </div>
      <section className='Sobre' id='Sobre'>
      </section>
    </div>
  );
}

export default App;
