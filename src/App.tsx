import Home from './pages/Home';
import BusBoard from './pages/BusBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './views/Header'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/busboard" element={<BusBoard />} />
          </Routes>
        </main>
      </BrowserRouter>


    </>
  )
}

export default App
