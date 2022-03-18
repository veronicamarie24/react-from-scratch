import './App.css';
import ComboBox from './components/ComboBox/ComboBox';
import Calculator from './components/Calculator/Calculator';

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
      <div className='calc-container'>
        <h1>Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
