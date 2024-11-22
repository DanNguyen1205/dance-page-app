import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer.tsx"

function App() {

  return (
    <>
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/dance-page-app' element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
    </>
  )
}

export default App
