import { motion } from "framer-motion";

const Conveners = () => {
    return (
        <div className="theme1">
             <motion.h1 className="text-center font-bold text-white text-6xl font-poppins pt-10 pb-3">Our Conveners
            </motion.h1>
            <div className="flex space-x-[10rem] h-[20rem] mt-10 w-full justify-center items-center flex-wrap">
                <div className="h-[20rem] w-[18rem] rounded bg-blue-300 justify-center flex">
                    <img src={"/vydeki.jpg"} className="h-full w-full rounded" alt="" />
                </div>
                <div className="h-[20rem] w-[18rem] rounded bg-blue-300 justify-center flex">
                    <img src={"/bharatiRaja.jpg"} className="h-full w-full rounded" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Conveners
