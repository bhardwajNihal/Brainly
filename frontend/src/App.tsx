import { MainArea } from "./Components/ui/MainArea"
import { Navbar } from "./Components/ui/Navbar"
import { Sidebar } from "./Components/ui/Sidebar"

function App() {


  return (
   <div className="flex flex-col" >

      <Navbar/>

      <div className="flex">
        <Sidebar/>
        <MainArea/>
      </div>

   </div>

  )
}

export default App
