import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import MainLayout from "./layouts/MainLayout"
import Home from "./components/pages/Home"
import Medicos from "./components/pages/Medicos"
import Pacientes from "./components/pages/Pacientes"

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Definindo layout de páginas dentro do componente */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/medicos" element={<Medicos />} />
            <Route path="/pacientes" element={<Pacientes />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
