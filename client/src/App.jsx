import {BrowserRouter, Routes,Route} from 'react-router-dom'
import SignUp from './authentication/SignUp'
import Login from './authentication/Login'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <Routes path="/">
      <Route index path="/login" Component={Login}></Route>
      <Route exact path="signup" Component={SignUp}></Route>
    </Routes>
    </BrowserRouter>
    // <Login />
    // <SignUp />
  )
}

export default App
