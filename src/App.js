import './App.css';
import ComboBox from './components/ComboBox/ComboBox';
import Calculator from './components/Calculator/Calculator';
import TicTacToe from './components/TicTacToe/TicTacToe'

const fruits = [
  '🍎 Apple',
  '🍌 Banana',
  '🫐 Blueberry',
  '🥭 Mango'
];

function App() {
  return (
    <div className='container'>
      <div className='combo-box-container'>
        <h1>ComboBox</h1>
        <ComboBox fruits={fruits} />
      </div>
      <div className='tictactoe-container'>
        <h1>Tic-Tac-Toe</h1>
        <TicTacToe />
      </div>
      <div className='calc-container'>
        <h1>Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
