import { Route, Routes } from 'react-router-dom'
import StakePage from './components/Stake/Stake'

import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StakePage />} />
    </Routes>
  )
}

export default App
