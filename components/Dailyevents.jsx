import { AnimatePresence, motion } from "framer-motion"
import Card from "./Card"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const eventVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 0.8,
        transition: {
            delay: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.2,
        }
    },
}

const listVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
    }
}

const Dailyevents = () => {
    return (
        <div>
            <div className="theme3">
                <AnimatePresence>
                    <motion.div variants={eventVariant} whileInView={"visible"} initial={"hidden"} className="h-screen w-screen font-poppins text-6xl text-center p-10">
                        <motion.h1 variants={listVariant} className="font-bold text-white mb-10">Daily Events</motion.h1>
                        {/* <div className="p-10 flex space-x-7"> */}
                        <motion.div variants={listVariant} className="p-16 swiper-class">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                slidesPerGroup={3}
                                loop={true}
                                loopFillGroupWithBlank={false}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper p-10 flex space-x-7"
                            >
                                <SwiperSlide><Card /></SwiperSlide>
                                <SwiperSlide><Card /></SwiperSlide>
                                <SwiperSlide><Card /></SwiperSlide>
                                <SwiperSlide><Card /></SwiperSlide>
                                <SwiperSlide><Card /></SwiperSlide>
                            </Swiper>
                        </motion.div>
                        {/* </div> */}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Dailyevents
