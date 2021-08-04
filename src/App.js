import './App.css';
import Intervalo from './component/Intervalo';
import Media from './component/Media';
import Soma from './component/Soma';
import Sorteio from './component/Sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo>X</Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
