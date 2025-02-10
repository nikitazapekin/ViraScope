import { useState } from 'react'
import AppRoutes from './utils/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </>
  )
}

export default App
