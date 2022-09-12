import { motion } from "framer-motion";
import schoolData from "../data/Schools";

const headVariant = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            delay: 0.5,
        }
    }
}

const cardBoxVariant = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: 1,
        transition: {
            delay: 0.8,
            when: 'beforeChildren',
            staggerChildren: 0.2,
        }
    }
}

const cardVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
    }
}

const Schoolevent = () => {
    return (
        <div className="theme4">
            <motion.h1 variants={headVariant} initial={"hidden"} whileInView={"visible"} className="text-center font-bold text-white text-6xl font-poppins pt-10 pb-3">School Fests
            </motion.h1>
            <motion.div variants={cardBoxVariant} initial={"hidden"} whileInView={"visible"} className="flex justify-center items-center flex-wrap rounded">
            {schoolData.map((items, i) => {
                return (
                    <motion.div variants={cardVariant} key={i} className="flex flex-col space-y-7 justify-start items-center bg-blue-300 h-[15rem] w-[20rem] m-10 p-10 rounded">
                        <img src={items.image} className="h-32 w-40" alt="" />
                        <p className="font-bold text-xl text-center font-spaceMono text-white">{items.name}</p>
                    </motion.div>
                )
            })}
            </motion.div>
        </div>
    )
}

export default Schoolevent
