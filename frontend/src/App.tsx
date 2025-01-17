import { Routes,Route, useNavigate } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { Homepage } from "./Pages/Homepage"
import { SignIn } from "./Pages/signin"
import { Signup } from "./Pages/signup"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home")
  },[])

  return (
    <div>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    <ToastContainer/>
    </div>

    )
}

export default App
