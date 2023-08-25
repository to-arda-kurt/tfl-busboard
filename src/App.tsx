import Home from '@root/pages/Home';
import BusBoard from '@root/pages/BusBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '@root/views/Header'
import JourneyPlanner from './pages/JourneyPlanner';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/busboard" element={<BusBoard />} />
            <Route path="/journey-planner" element={<JourneyPlanner />} />
          </Routes>
        </main>
      </BrowserRouter>


    </>
  )
}

export default App
