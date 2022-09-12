import { motion } from "framer-motion"
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import Link from "next/link"

const outerVariant = {
  hidden: {
    x: 0
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      stiffness: 50,
      when: "beforeChildren",
      staggerChildren: 0.5
    }
  }

}

const bannerVariant = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible1: {
    opacity: 1,
    scale: 1.5,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  visible2: {
    opacity: 1,
    scale: 1.01,
    transition: {
      type: "spring",
      delay: 1.5,
    },
  },

  hover: { scale: 1.1, transition: { duration: 0.2 } }
}

const iconsVariant = {
  hidden: {
    x: '200vw',
  },
  visible: {
    x: 0,
    transition: {
      delay: 2,
      when: 'beforeChildren',
      staggerChildren: 1,
    }
  }
}

const listVariant = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  hover: {
    scale: 1.2,
  }
}

const navbarVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 2
    }
  },
}



const Banner = () => {
  return (
    <>
      <motion.div variants={outerVariant} initial={"hidden"} visible={"visible"} className="bg-natureBg -z-40 bg-cover bg-no-repeat font-spaceMono w-full h-[100vh] space-y-[3.4rem]">

        {/*  */}
        <motion.div className="flex items-center w-screen md:px-24 md:py-10 py-6 px-8 justify-between">
          <motion.img variants={navbarVariant} initial={"hidden"} animate={"visible"} src={`/vitLogo2.svg`} className="h-18 w-[13rem]" alt="" />
          <motion.ul variants={navbarVariant} initial={"hidden"} animate={"visible"} className="hidden md:flex space-x-8 items-center text-white text-xl font-space-grotesk font-bold">
            <Link href={`/#home`}><motion.li className="hover:text-neonBlue cursor-pointer">Home</motion.li></Link>
            <Link href={`/#about`}><motion.li className="hover:text-neonBlue cursor-pointer">About</motion.li></Link>
            <Link href={`/#events`}><motion.li className="hover:text-neonBlue cursor-pointer">Events</motion.li></Link>
            <Link href={`/sponsers`}><motion.li className="hover:text-neonBlue cursor-pointer">Sponsers</motion.li></Link>
            <motion.li className="hover:text-neonBlue cursor-pointer">Contact US</motion.li>
          </motion.ul>
        </motion.div>
        {/*  */}

        {/*  */}
        <motion.div variants={bannerVariant} initial={"hidden"} animate={"visible1"} className="block h-[15rem] m-auto w-[45rem]">
          <motion.div className="m-auto w-[43rem] h-[15rem]">
            <motion.img src={`/tvlogoMain.png`} whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} className='h-full w-full' alt="" />
          </motion.div>
        </motion.div>
        {/*  */}

        {/*  */}
        <motion.div variants={bannerVariant} initial={"hidden"} animate={"visible2"} className="font-spaceMono text-center text-white font-bold text-3xl">
          <p>September 23 to September 25</p>
        </motion.div>
        {/*  */}

        {/*  */}
        <motion.div className="flex" variants={iconsVariant} initial={"hidden"} animate={"visible"}>
          <div className="w-[50vw] "></div>
          <motion.div variants={listVariant} className="flex space-x-10 justify-end w-[50vw] p-6">
            <motion.div variants={listVariant} whileHover={"hover"}><BsInstagram className="text-white text-3xl" /></motion.div>
            <motion.div variants={listVariant} whileHover={"hover"}><BsLinkedin className="text-white text-3xl" /></motion.div>
            <motion.div variants={listVariant} whileHover={"hover"}><BsFacebook className="text-white text-3xl" /></motion.div>
          </motion.div>
        </motion.div>
        {/*  */}
      </motion.div>
    </>
  )
}

export default Banner
