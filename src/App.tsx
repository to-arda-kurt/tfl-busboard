import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />


        </Routes>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
