import { useContext } from "react"
import Display from "./Component/Display"
import Player from "./Component/Player"
import Sidebar from "./Component/Sidebar"
import { PlayerContext } from "./context/PlayerContext"

const App = () => {
  const { audioRef, track } = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display></Display>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  )
}

export default App