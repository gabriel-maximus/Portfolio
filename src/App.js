import './App.css';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';

function App() {
  ScrollReveal({ reset: true });

  return (
    <div className="App">
      <Header />
      <div className='Content'>
        
      </div>
    </div>
  );
}

export default App;
