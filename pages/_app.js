import Navbar from '../components/layout/Navbar'
import '../styles/globals.css';

const App = ({Component}) => {
  return(
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <Component />
    </main>
    </>
  )
}

export default App