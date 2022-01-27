import React, { useState } from 'react'
// import React from 'react'
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

// take a number, format it into string format and create the space separators
// const toLocaleString = (num) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ')
const toLocaleString = (num) => String(num)
// remove the spaces, convert it to number.
const removeSpaces = (num) => num.toString().replace(/\s/g, '')

// Limit decimals BUT also drops the trailing zeros.
// const fixDecimals = (num) => +num.toFixed(8)
const fixDecimalsAndNum = (num) => {
  if (num > 9999999999) {
    return 'num to large'
  } else {
    return +num.toFixed(6)
  }
}
// if number is > 11 digits = "to large", else toFixed

function App() {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  })
  console.log(calc)

  // Click handlers:

  const numClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML

    if (removeSpaces(calc.num).length < 8) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === '0'
            ? '0'
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      })
    }
  }

  const commaClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    })
  }

  const signClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) => (sign === '+' ? a + b : sign === '-' ? a - b : sign === 'X' ? a * b : a / b)
      setCalc({
        ...calc,
        res: fixDecimalsAndNum(
          calc.num === '0' && calc.sign === '/' ? 'Error / 0' : math(Number(calc.res), Number(calc.num), calc.sign)
        ),
        sign: '',
        num: 0,
      })
    }
  }

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: '',
    })
  }

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(calc.num) : 0
    let res = calc.res ? parseFloat(calc.res) : 0

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: '',
    })
  }

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: '',
      num: 0,
      res: 0,
    })
  }

  return (
    <>
      <Wrapper>
        <p style={{ color: 'rgb(169, 169, 169)', fontSize: '14px' }}>8-digits Dual Power Calculator</p>
        <Screen value={calc.num ? calc.num : calc.res} />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === '=' ? 'equalBtn' : ''}
                value={btn}
                onClick={
                  btn === 'C'
                    ? resetClickHandler
                    : btn === '+-'
                    ? invertClickHandler
                    : btn === '%'
                    ? percentClickHandler
                    : btn === '='
                    ? equalsClickHandler
                    : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
                    ? signClickHandler
                    : btn === '.'
                    ? commaClickHandler
                    : numClickHandler
                }
              />
            )
          })}
        </ButtonBox>
      </Wrapper>
    </>
  )
}

export default App
