"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >

            {serviceData.map(({ icon: Icon, title, description }, index) => (
                <SwiperSlide key={index}>
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-gradient-to-br from-purple-500/10 to-purple-500/5 sm:flex-col gap-x-6 sm:gap-x-0 group hover:from-purple-500/20 hover:to-purple-500/15 transition-all duration-300 hover:border-secondary border-2 border-white/10 hover:shadow-lg hover:shadow-purple-500/20">
                        <div className="mb-4 text-4xl text-secondary group-hover:scale-110 transition-transform duration-300"><Icon /></div>
                        <div>
                            <h3 className="mb-4 text-lg group-hover:text-secondary transition-colors duration-300">{title}</h3>
                            <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;