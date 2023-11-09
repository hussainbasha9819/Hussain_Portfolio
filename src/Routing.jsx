import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Main from './Components/Main/Main'
import Portfolio from './Components/Portfolio/Portfolio'
const Routing = () => {
  return (
<BrowserRouter>
<Routes>

<Route path='/' element={<Main/>} />
<Route path='/Portfolio' element={<Portfolio/>} />

</Routes>

</BrowserRouter>
  )
}

export default Routing