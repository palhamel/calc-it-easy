import React, { useState } from 'react'

import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'

// import './App.css';

// array for creating buttons:
const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
]

function App() {
  let [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  })
  console.log(calc)
  return (
    <>
      <p>Your pocket calculator</p>
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {/* Render x buttons based on nr of objects in array btnValues */}
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                onClick={() => {
                  console.log(`${btn} was clicked`)
                }}
              />
            )
          })}
        </ButtonBox>
      </Wrapper>
    </>
  )
}

export default App
