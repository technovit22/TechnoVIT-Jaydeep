import { AnimatePresence, motion } from "framer-motion"

const eventVariant = {
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

const Dailyevents = () => {
    return (
        <div>
            <div className="theme">
                <AnimatePresence>
                    <motion.div variants={eventVariant} whileInView={"visible"} initial={"hidden"} className="h-screen w-screen font-poppins text-6xl text-center p-10">
                        <motion.h1 className="font-bold text-white">Daily Events</motion.h1>
                        {/* <motion.img src={`/envsus.png`} className="z-50 h-[12rem] m-auto mt-10" alt="" /> */}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Dailyevents
