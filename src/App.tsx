import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UserContextProvider } from './components/contexts/UserContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import defaultTheme from './styles/themes/default'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
