import Screen from './Screen.js'

import './Wrapper.css'

const Wrapper = ({ children }) => {
  return (
    <div className='wrapper'>
      {children}

      <Screen />
    </div>
  )
}

export default Wrapper
