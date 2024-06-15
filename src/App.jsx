import { Children, useState } from 'react'

import './App.css'
import Button from './Button';
import Pantalla from './Pantalla';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('')

  const inputClick = val => {
    setInput(input + val);

  }

  const clearInput = val => {
    setInput('');
  }

  const calcularRes = () => {
    setInput(evaluate(input).toFixed(2));
  }

  const negativeNum = () => {
    setInput(input * -1);
  }


  return (
    <>
      <div className='container-main'>
        <h1 className='h1'>Calculadora</h1>
        <div
          className='container'>
          <Pantalla pantalla={input} />


          < div className='container-btn'>
            <Button clickBtn={clearInput}>C</Button>
            <Button clickBtn={negativeNum}>+/-</Button>
            <Button clickBtn={inputClick}>%</Button>
            <Button clickBtn={inputClick}>/</Button>


          </div>
          < div className='container-btn'>
            <Button valor='true' clickBtn={inputClick} >1</Button>
            <Button valor='true' clickBtn={inputClick}>2</Button>
            <Button valor='true' clickBtn={inputClick}>3</Button>
            <Button clickBtn={inputClick}>*</Button>


          </div>
          < div className='container-btn'>
            <Button valor='true' clickBtn={inputClick}>4</Button>
            <Button valor='true' clickBtn={inputClick}>5</Button>
            <Button valor='true' clickBtn={inputClick}>6</Button>
            <Button clickBtn={inputClick}>-</Button>

          </div>
          < div className='container-btn'>
            <Button valor='true' clickBtn={inputClick}>7</Button>
            <Button valor='true' clickBtn={inputClick}>8</Button>
            <Button valor='true' clickBtn={inputClick}>9</Button>
            <Button clickBtn={inputClick}>+</Button>

          </div>
          < div className='container-btn'>
            <Button clickBtn={inputClick}>.</Button>
            <Button valor='true' clickBtn={inputClick}>0</Button>
            <Button clickBtn={calcularRes}>=</Button>

          </div>
        </div>
      </div>



    </>
  )
}

export default App
