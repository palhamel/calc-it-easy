// import logo from './logo.svg';
// import './App.css';
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'

// array for creating buttons:
const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
]

function App() {
  return (
    <>
      <p>Your pocket calculator</p>
      <Wrapper>
        <Screen value='10' />
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
