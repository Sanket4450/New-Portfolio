import { GlobalStyle } from './styles/global'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Main } from './components/Main/Main'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
