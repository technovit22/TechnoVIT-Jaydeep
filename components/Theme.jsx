import { AnimatePresence, motion } from "framer-motion"

const themeVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            delay: 0.3,
        },
    },
}

const Theme = () => {
    return (
        <div className="h-[40rem] bg-black">
            <AnimatePresence>
                <motion.div variants={themeVariant} whileInView={"visible"} initial={"hidden"} className="h-screen w-screen font-poppins text-6xl text-center p-[7rem]">
                    <motion.h1 className="font-bold text-white">Our theme</motion.h1>
                    <motion.img src={`/envsus.png`} className="z-50 h-[12rem] m-auto mt-10" alt="" />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Theme
