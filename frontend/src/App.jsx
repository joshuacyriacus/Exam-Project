
import LandingPage from './pages/landingPage'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    
        <Routes>
           <Route path='/' element={<LandingPage/>}/>
        </Routes>

    
  )
}

export default App
