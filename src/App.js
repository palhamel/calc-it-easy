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
      <header>
        <p>Calc it easy:</p>
      </header>
      <Wrapper>
        <Screen value='10' />
        <ButtonBox>
          <Button
            className=''
            value='8'
            onClick={(value) => {
              console.log('btn clicked', value)
            }}
          />
        </ButtonBox>
      </Wrapper>
    </>
  )
}

export default App
