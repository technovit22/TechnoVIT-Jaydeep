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
        x: '-100vw',
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.1,
            when: 'beforeChildren',
            staggerChildren: 0.4,
        }
    }
}

const listVariant = {
    hidden: {
        x: '100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            damping: '30'
        }
    }

}

const About = () => {
    return (
        <div className="theme1">
            <AnimatePresence>
                <div className="h-screen w-screen">
                    <div className="flex space-x-10 p-16 items-center">

                        <motion.div variants={gateVariant} initial={"hidden"} whileInView={"visible"} className="w-[50vw] h-[25rem] flex justify-center items-center">
                            <img src={`/vitgate.png`} alt="" />
                        </motion.div>


                        <motion.div variants={contentVariant} initial={"hidden"}
                        animate={"visible"} className="flex flex-col space-y-6">
                            <motion.h1 variants={listVariant} className="font-bold text-white text-6xl font-poppins pt-10 pb-3">About TechnoVIT
                            </motion.h1>
                            <motion.div variants={listVariant} className="w-[50vw] font-nanum text-white font-semibold tracking-wide text-xl">
                                This is the 6th Edition of technoVIT, an international level technical festival of VIT Chennai.It gives us immense pride and pleasure in presenting technoVIT' 22. This technical extravaganza will be filled with numerous activities such as workshops and technical events organised by the various schools of the University with the primary objective being, " nurture professional skills and impart fine qualities to the students". It also has gaming events to thrill and create an environment with fun and frolic.
                            </motion.div>
                            <motion.div variants={listVariant} className="w-[50vw] font-nanum text-white font-semibold tracking-wide text-xl">
                                Additionally, technical exhibitions from various organisations are being hosted. We, at VIT Chennai promise the audience an atmosphere of immense joy leaving them the thirst for more.
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
        </div>
    )
}

export default About
