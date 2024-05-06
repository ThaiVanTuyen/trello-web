import Board from './pages/Boards/Board'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
