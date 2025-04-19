import React from "react";
import servicesCSS from './../Services/Services.module.css'
import service_card_img_1 from './../../assets/service_card_img_1.png'
import service_card_img_2 from './../../assets/service_card_img_2.png'
import service_card_img_3 from './../../assets/service_card_img_3.png'
import service_card_img_4 from './../../assets/service_card_img_4.png'

import Img_service from './../../assets/Service_img.png'

function Services () {
    return (
        <div className={`${servicesCSS.Service_wrapper} section`}>
            <small className="section_title">(Our Services)</small>
            <h2>Excellent & Best Service</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptas qui blanditiis sit accusamus maiores.</p>

            <div className={servicesCSS.service_Container}>
                <div className={servicesCSS.service_cards}>
                    <div className={servicesCSS.service_card}>
                        <img src={service_card_img_1} alt="image-service" />
                        <h3>Building Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, est.</p>
                    </div>
                    <div className={servicesCSS.service_card}>
                        <img src={service_card_img_2} alt="image-service" />
                        <h3>Home Charging</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, est.</p>
                    </div>
                </div>
                <img src={Img_service} alt="service-image" id={servicesCSS.serviceImg}/>

                <div className={servicesCSS.service_cards}>
                    <div className={servicesCSS.service_card}>
                        <img src={service_card_img_3} alt="image-service" />
                        <h3>AC Charging Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, est.</p>
                    </div>
                    <div className={servicesCSS.service_card}>
                        <img src={service_card_img_4} alt="image-service" />
                        <h3>DC Charging Services</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, est.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services