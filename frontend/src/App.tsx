import { Routes,Route, useNavigate } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { Homepage } from "./Pages/Homepage"
import { SignIn } from "./Pages/signin"
import { Signup } from "./Pages/signup"
import { useEffect } from "react"

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home")
  },[])

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>

    )
}

export default App
