//364

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globalStyle.ts'
import { AppThemeProvider } from './context/AppThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AppThemeProvider>
         <GlobalStyle />
         <App />
      </AppThemeProvider>
  </React.StrictMode>
)

/*

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App.tsx'
import { GlobalStyle, lightTheme } from './styles'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StrictMode>
  )
}
*/
