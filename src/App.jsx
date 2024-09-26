import Display from "./Component/Display"
import Player from "./Component/Player"
import Sidebar from "./Component/Sidebar"

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display></Display>
      </div>
      <Player />
    </div>
  )
}

export default App