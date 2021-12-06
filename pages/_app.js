import Navbar from '../components/layout/Navbar'

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