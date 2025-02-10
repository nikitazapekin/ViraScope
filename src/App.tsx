import { useState } from 'react'
import AppRoutes from './utils/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
 
  return (
    <>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </>
  )
}

export default App
