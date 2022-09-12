import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="flex p-10 font-poppins theme6 border-t-4">
            <motion.div className="w-[20rem] rounded h-full z-10 flex space-x-3 text-2xl items-center justify-center text-white font-semibold font-spaceMono cursor-pointer">
                <img src={`/tvlogoMain.png`} className="" alt="" />
            </motion.div>
            <div className="w-5/6 h-[4rem] z-10">
                <motion.p className="text-white h-full w-full flex justify-end items-center text-3xl space-x-8 font-bold">
                    <BsInstagram />
                    <BsFacebook />
                    <BsLinkedin />
                </motion.p>
            </div>
        </div>
    )
}

export default Footer
