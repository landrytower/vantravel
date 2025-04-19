import React from "react";
import aboutCSS from './../About/About.module.css'

import aboutImg1 from './../../assets/about-img-.jpg'
import aboutImg2 from './../../assets/about-img-1.jpg'

import about_card_img1 from './../../assets/about-card01.png'
import about_card_img2 from './../../assets/about-card02.png'

function About () {
    return(    
        <div className={`${aboutCSS.About_wrapper} section`}>
            <div className={aboutCSS.counters}>
                 <p>7.5M+ <span>Charging Station Initiated</span></p>   
                 <p>12k+ <span>Charging Station In Network</span></p>   
                 <p>80%+<span>Eco Friendly Charging Stations</span></p>   
                 <p>123+<span>Charging Stations In This Region</span></p>   
            </div>    

            <div className={aboutCSS.about}>
                <div className={aboutCSS.about_img}>
                    <img src={aboutImg1} alt="about-img-1" />
                    <img src={aboutImg2} alt="about-img-1" />
                </div>
                <div className={aboutCSS.about_content}>
                    <small className="section_title">(About Us)</small>
                    <h2>Solutions of All EC <br /> <span>Charging Solutions</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit, voluptates distinctio corporis quasi consequuntur.</p>
                    <div className={aboutCSS.about_Cards}>
                        <div className={aboutCSS.card}>
                            <img src={about_card_img1} alt="about-card-li" />
                            <h3>Warrenty <br /> Extensions</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, veritatis?</p>
                        </div>
                        <div className={aboutCSS.card}>
                            <img src={about_card_img2} alt="about-card-li" />
                            <h3>Spare Parts <br /> Management</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, veritatis?</p>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    ) 
    
}

export default About