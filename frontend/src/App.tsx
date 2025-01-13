import { AddModalPopup } from "./Components/ui/Add-modal-popup"
import { MainArea } from "./Components/ui/MainArea"
import { Navbar } from "./Components/ui/Navbar"
import { Overlay } from "./Components/ui/Overlay"
import { Sidebar } from "./Components/ui/Sidebar"

function App() {


  return (
    <div className="parent">
        
        <Overlay/>
        <AddModalPopup/>

      <div className="flex flex-col" >

        <Navbar />

        <div className="flex">
          <Sidebar />
          <MainArea />
        </div>

      </div>

    </div>

  )
}

export default App
