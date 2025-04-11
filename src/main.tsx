import { StrictMode } from 'react'
import { ThemeProvider} from 'styled-components'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { darkTheme, GlobalStyle, lightTheme } from './styles/';

//import { darkTheme, GlobalStyle, lightTheme } from './styles/';




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      < GlobalStyle />
      <App />
    </ThemeProvider>

  </StrictMode>
)
