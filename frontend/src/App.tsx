import { Routes,Route } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { Homepage } from "./Pages/Homepage"
import { SignIn } from "./Pages/signin"
import { Signup } from "./Pages/signup"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div>
      <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    <ToastContainer/>
    </div>

    )
}

export default App
