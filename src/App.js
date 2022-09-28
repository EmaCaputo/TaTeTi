import './App.css';
import { useState } from 'react';
import dataMatrix from "./matrix";
import Turno from './Components/turno';
import Ganador from './Components/Ganador';


function App() {

  const [matrix, setMatrix] = useState(dataMatrix)
  const [turn, setTurn] = useState('X')
  const [chequeo, setChequeo] = useState(' ')
  
  const arrayX = []
  const arrayO = []
  
  const originalMatrix = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]


  
  const chequearGanador= (matrix, turn) =>{
    switch (true) {
      case (matrix[0][0] === turn && matrix[0][1] === turn && matrix[0][2] === turn):
        console.log("valido el 1");
        return true;
        break;
      case (matrix[1][0] === turn && matrix[1][1] === turn && matrix[1][2] === turn):
        console.log("valido el 2");
        return true
        break;
      case (matrix[2][0] === turn && matrix[2][1] === turn && matrix[2][1] === turn):
        console.log("valido el 3");
        return true
        break;
      case (matrix[0][0] === turn && matrix[1][0] === turn && matrix[2][0] === turn):
        console.log("valido el 4");
        return true
        break;
      case (matrix[0][1] === turn && matrix[1][1] === turn && matrix[2][1] === turn):
        console.log("valido el 5");
        return true
        break;
      case (matrix[0][2] === turn && matrix[1][2] === turn && matrix[2][2] === turn):
        console.log("valido el 6");
        return true
        break;
      case (matrix[0][0] === turn && matrix[1][1] === turn && matrix[2][2] === turn):
        console.log("valido el 7");
        return true
        break;
      case (matrix[0][2] === turn && matrix[1][1] === turn && matrix[2][0] === turn):
        console.log("valido el 8");
        return true
      default: console.log("no valdo");
      return false
        break;
    }

  }
    
    

  const setBoxValue = (valor1, valor2) => {
    if (matrix[valor1][valor2] === ' ') {
      const prevMatrix = matrix
      prevMatrix[valor1][valor2] = turn
      setMatrix(prevMatrix)
      const chequeado = chequearGanador(prevMatrix, turn)
      if (!chequeado){
        clickCambiarTurno()
      } else{
        setChequeo(turn)
      }
    }
  }

  const ResetMatrix = () => {
    setMatrix(originalMatrix)
    setChequeo(' ')
  }

  const clickCambiarTurno = () => {
    setTurn(turn === 'X' ? '0' : 'X')
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className='game-info status'>
          <Ganador chequeo={chequeo} />
        </div>
        <div className='game-info status'>
          <Turno turno={turn} />
        </div>
        <div className='board-row'>
          <ol>
            <ul className='square' onClick={() => setBoxValue(0, 0)}>{matrix[0][0]}</ul>
            <ul className='square' onClick={() => setBoxValue(0, 1)}>{matrix[0][1]}</ul>
            <ul className='square' onClick={() => setBoxValue(0, 2)}>{matrix[0][2]}</ul>
          </ol>
          <ol>
            <ul className='square' onClick={() => setBoxValue(1, 0)}>{matrix[1][0]}</ul>
            <ul className='square' onClick={() => setBoxValue(1, 1)}>{matrix[1][1]}</ul>
            <ul className='square' onClick={() => setBoxValue(1, 2)}>{matrix[1][2]}</ul>
          </ol>
          <ol>
            <ul className='square' onClick={() => setBoxValue(2, 0)}>{matrix[2][0]}</ul>
            <ul className='square' onClick={() => setBoxValue(2, 1)}>{matrix[2][1]}</ul>
            <ul className='square' onClick={() => setBoxValue(2, 2)}>{matrix[2][2]}</ul>
          </ol>
        </div>
        <br></br>
        <button title='Press me' onClick={() => ResetMatrix()}>
          Resetear Juego
        </button>
      </header>
    </div>
  );
}

export default App;
