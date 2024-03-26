import { Outlet } from 'react-router-dom'
import '../styles/App.css'
import NavBar from './navBar';

function App() {
  return (
    <>
      <NavBar/>
      <h1>Bellow is app outlet</h1>
      <Outlet />
    </>
  )
}

export default App