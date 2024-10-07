import { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const { seekBg, seekBar, palyerStatus, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext)
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-whie px-4'>
            {/* hidden attribute will also use here  */}
            <div className=" hidden lg:flex items-center gap-4 text-white">
                <img className='w-12' src={track.image} alt="" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            {/* music player controller  */}
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                    {
                        palyerStatus
                            ?
                            <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                            :
                            <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                    }

                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
                </div>
                <div className='flex items-center gap-5 text-white'>
                    <p>{time.currentTime.minute} : {time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0  bg-green-800 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute} : {time.totalTime.second}</p>
                </div>
            </div>
            {/* hidden issue */}
            <div className=' hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={assets.play_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='w-20 bg-slate-50 h-1 rounded'></div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>

        </div>
    )
}

export default Player


