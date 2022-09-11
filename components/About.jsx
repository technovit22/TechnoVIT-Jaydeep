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
            when: "beforeChildren",
            staggerChildren: 1
        },
    },
    visible1: {
        x: 0,
        transition: {
            type: "spring",
            delay: 1.2,
        }
    }
}

const gateVariant = {
    hidden: {
       scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            type: "tween",
            delay: 1,
        },
    },
}

const contentVariant = {
    hidden: {
        x: '100vw',
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            delay: 1.2,
        },
    },
}

const listVariant = {
    hidden: {
        x: -10,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    }
}

const About = () => {
    return (
        <div className="theme1">
            <AnimatePresence>
                <motion.div variants={eventVariant} whileInView={"visible"} initial={"hidden"} className="h-screen w-screen">
                    <motion.h1 initial={"hidden"} animate={"visible1"} className="font-bold text-white text-6xl text-center font-poppins p-10 pb-3">About TechnoVIT
                    </motion.h1>

                    <motion.div variants={contentVariant} initial={"initial"} animate={"visible"} className="flex space-x-10 p-16">
                        <motion.div variants={gateVariant} initial={"hidden"} whileInView={"visible"} className="w-[50vw] h-[25rem]">
                            <img src={`/vitgate.png`} alt="" />
                        </motion.div>
                        <motion.div variants={listVariant} initial={"initial"} whileInView={"visible1"} className="w-[50vw] h-[25rem] font-nanum text-white font-semibold tracking-wide text-xl">
                            This is the 6th Edition of technoVIT, an international level technical festival of VIT Chennai.It gives us immense pride and pleasure in presenting technoVIT' 22. This technical extravaganza will be filled with numerous activities such as workshops and technical events organised by the various schools of the University with the primary objective being, " nurture professional skills and impart fine qualities to the students". It also has gaming events to thrill and create an environment with fun and frolic. Additionally, technical exhibitions from various organisations are being hosted. We, at VIT Chennai promise the audience an atmosphere of immense joy leaving them the thirst for more.
                        </motion.div>
                    </motion.div>

                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default About
