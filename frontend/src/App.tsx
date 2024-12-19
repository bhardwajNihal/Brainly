import { Button } from "./Components/ui/Button"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon";
function App() {

function handleClick(){
  console.log("clicked");
}

  return (
   <div className="p-8 m-8">
    <Button size={"sm"} variant={"primary"} text={"Add"} startIcon={<PlusIcon size={"sm"} />} onclick={handleClick} endIcon={<ShareIcon size={"sm"}/>}/>
    <Button size={"md"} variant={"secondary"} text={"Add"} startIcon={<PlusIcon size={"md"} />}  onclick={handleClick} endIcon={<ShareIcon size={"md"}/>}/>
    <Button size={"lg"} variant={"secondary"} text={"Add"} startIcon={<PlusIcon size={"lg"} />} onclick={handleClick} endIcon={<ShareIcon size={"md"}/>} />
    <Button size={"xl"} variant={"primary"} text={"Add"}  startIcon={<PlusIcon size={"lg"}/>}  onclick={handleClick} endIcon={<ShareIcon size={"lg"}/>}/>
   </div>
  )
}

export default App
