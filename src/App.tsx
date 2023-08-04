import Home from '@root/pages/Home';
import BusBoard from '@root/pages/BusBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '@root/views/Header'
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
