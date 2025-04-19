import React from "react";
import testimonialCSS from './../Testimonials/Testimonials.module.css'
import testimonial_img_1 from './../../assets/user-01.jpg'
import testimonial_img_2 from './../../assets/user-02.jpg'
import testimonial_img_3 from './../../assets/user-03.jpg'

import { Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Testimonials () {
    return (
        <div className={`${testimonialCSS.testimonial_wrapper} section`}>
            <div className={testimonialCSS.Swiper_content}>
                <Swiper 
                    className={testimonialCSS.swiper}
                    autoplay={{
                        delay: 2500,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className={testimonialCSS.testimonial}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat iste sapiente ullam repudiandae quas.</p>
                            <div className={testimonialCSS.testimonial_info}>
                                <img src={testimonial_img_1} alt="user-01"/>
                                <h3>John Mark <span>Marketer</span></h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={testimonialCSS.testimonial}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat iste sapiente ullam repudiandae quas.</p>
                            <div className={testimonialCSS.testimonial_info}>
                                <img src={testimonial_img_2} alt="user-01"/>
                                <h3>Alpex Mark <span>SEO Specilist</span></h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={testimonialCSS.testimonial}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat iste sapiente ullam repudiandae quas.</p>
                            <div className={testimonialCSS.testimonial_info}>
                                <img src={testimonial_img_3} alt="user-01"/>
                                <h3>Nishi Mark<span>HR Dept</span></h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={testimonialCSS.testimonial_details}>
                <small className="section_title">(Testimonials)</small>
                <h2>WE are Trusted Over  <span>40+ Countries</span></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, earum!</p>
            </div>
        </div>
    )
}

export default Testimonials