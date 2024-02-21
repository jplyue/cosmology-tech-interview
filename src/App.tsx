import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './themes'
import { Deposit } from './Deposit'

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div
        style={{
          backgroundColor: '#C0BFBE',
          paddingBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button onClick={toggleTheme} style={{ marginBottom: '40px' }}>
          Toggle Theme
        </button>
        <Deposit />
      </div>
    </ThemeProvider>
  )
}

export default App
