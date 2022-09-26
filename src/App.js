import './App.css';
import { useState } from 'react';
import dataMatrix from "./matrix";
import Turno from './Components/turno';


function App() {

  const [matrix, setMatrix] = useState(dataMatrix)

  const originalMatrix = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]

  const [turn, setTurn] = useState('X')

  const clickCambiarTurno = ()=> {
    setTurn(turn === 'X' ? '0' : 'X')
  }

  const setBoxValue = (valor1,valor2) => {
    if (matrix[valor1][valor2] === ' '){
      console.log(matrix, turn);
      const prevMatrix = matrix
      prevMatrix[valor1][valor2] = turn
     setMatrix(prevMatrix)
     clickCambiarTurno()
     console.log(turn);
     console.log(dataMatrix);
    }
    
  }

  const ResetMatrix = () => {
    setMatrix(originalMatrix)
    console.log(originalMatrix);
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className='game-info status'>
          <Turno turno={turn}/>
        </div>
        <div className='board-row'>
            <ol>
              <ul className='square' onClick={() => setBoxValue(0,0)}>{matrix[0][0]}</ul>
              <ul className='square' onClick={() => setBoxValue(0,1)}>{matrix[0][1]}</ul>
              <ul className='square' onClick={() => setBoxValue(0,2)}>{matrix[0][2]}</ul>
            </ol>
            <ol>
              <ul className='square' onClick={() => setBoxValue(1,0)}>{matrix[1][0]}</ul>
              <ul className='square' onClick={() => setBoxValue(1,1)}>{matrix[1][1]}</ul>
              <ul className='square' onClick={() => setBoxValue(1,2)}>{matrix[1][2]}</ul>
            </ol>
            <ol>
              <ul className='square' onClick={() => setBoxValue(2,0)}>{matrix[2][0]}</ul>
              <ul className='square' onClick={() => setBoxValue(2,1)}>{matrix[2][1]}</ul>
              <ul className='square' onClick={() => setBoxValue(2,2)}>{matrix[2][2]}</ul>
            </ol>
        </div>
        <br></br>
        <button onClick={() => ResetMatrix()}>
          Resetear Juego
        </button>
      </header>
    </div>
  );
}

export default App;
