import { motion } from "framer-motion";
import { useRouter } from "next/router";
import bandvit from "../../data/schoolData/bandvit";
import qubit from "../../data/schoolData/qubit";
import connectivitieee from "../../data/schoolData/connectivitieee";
import diseno from "../../data/schoolData/diseno";
import glitz from "../../data/schoolData/glitz";
import vitlilacs from "../../data/schoolData/lilacs";
import srishti from "../../data/schoolData/srishti";
import taikuun from "../../data/schoolData/taikuun";
import vitness from "../../data/schoolData/vitness";
import vsplash from "../../data/schoolData/vsplash";
import Head from "next/head";
import Link from "next/link";

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

const arrowVariant = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: 0,
        transition: {
            delay: 2,
            // damping: 200,
        }
    }
}

const headVariant = {
    hidden: {
        y: -100,
    },
    visible: {
        y: 0,
        transition: {
            delay: 0.5,
        }
    }
}


const School = () => {
    const router = useRouter();

    const { id } = router.query;
    const data = id == "bandvit" ? bandvit :
        id == "connectivitieee" ? connectivitieee :
            id == "diseno" ? diseno :
                id == "glitz" ? glitz :
                    id == "qubit" ? qubit :
                        id == "srishti" ? srishti :
                            id == "taikuun" ? taikuun :
                                id == "lilacs" ? vitlilacs :
                                    id == "vitness" ? vitness :
                                        id == "vsplash" ? vsplash : [];

    const slug = ["bandvit", "connectivitieee", "diseno", "glitz", "qubit", "srishti", "taikuun", "lilacs", "vitness", "vsplash"];

    // console.log(data);
    return (
        <>
            <Head>
                <title>{id}</title>
            </Head>

            <div className="bg-[#9EC996] h-full w-[100vw] bg-no-repeat bg-cover -z-30">
            <div className="flex p-10 font-poppins">
                <Link href={`/`}><motion.div variants={arrowVariant} initial={"hidden"} animate={"visible"} className="w-[10rem] rounded h-[3rem] z-10 flex space-x-3 text-2xl items-center justify-center text-white font-semibold font-spaceMono cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <p>Back</p>
                </motion.div></Link>
                <div className="w-5/6 h-[4rem] z-10">
                    <motion.p variants={headVariant} initial={"hidden"} animate={"visible"} className="text-white flex justify-center items-center text-5xl font-bold"><span className="first-letter:uppercase">{id}</span>&nbsp;Events</motion.p>
                </div>
            </div>
            <motion.div variants={cardBoxVariant} initial={"hidden"} animate={"visible"} className="flex justify-center items-center flex-wrap rounded">
                {data.map((items, i) => {
                    return (
                        <motion.div variants={cardVariant} key={i} className="flex flex-col space-y-7 justify-start items-center shadow-xl bg-[#86a5806b] h-[25rem] w-[20rem] m-10 p-10 rounded">
                            <img src={items.image} className="h-[15rem] w-full" alt="" />
                            <p className="font-bold text-xl text-center font-spaceMono text-white">{items.name}</p>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>

        </>
    )
}

export default School
