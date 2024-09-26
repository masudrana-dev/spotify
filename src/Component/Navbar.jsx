import { assets } from "../assets/assets"

const Navbar = () => {
    return (
        // <>
        //     <div className="flex justify-between items-center font-semibold">
        //         <div className="flex items-center gap-2">
        //             <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
        //             <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
        //         </div>
        //         <div className="flex items-center gap-4">
        //             {/* hidden issue  */}
        //             <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden  md:block"> Explore Premium</p>
        //             <p className=" text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block"> Explore Premium</p>
        //             <p className="bg-purple-500 w-7 h-7 rounded-full text-black flex items-center justify-center">M</p>
        //         </div>
        //     </div>
        //     <div className="flex items-center gap-2 mt-4">
        //         <p className="bg-white text-black  px-4 py-1 rounded-2xl hidden md:block ">All</p>
        //         <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        //         <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
        //     </div>
        // </>
        <>
            <div className="flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                    <img className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
                </div>
                <div className="flex items-center gap-4">
                    {/* Fixed the hidden issue */}
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
                    <p className="text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
                    <p className="bg-purple-500 w-7 h-7 rounded-full text-black flex items-center justify-center">M</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl hidden md:block">All</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
            </div>

        </>

    )
}

export default Navbar
