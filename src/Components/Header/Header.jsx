import React from "react";
import headerCSS from './../Header/Header.module.css'
import client1 from './../../assets/user-01.jpg'
import client2 from './../../assets/user-02.jpg'
import client3 from './../../assets/user-03.jpg'

function Header () {
    return (
        <div className={`${headerCSS.Header_Wrapper} section`}>
            <div className={headerCSS.content}>
                <small>for Eneryone , every Business , Every Vehicle</small>
                <h1>Unique Solutions for <span>Charging Stations</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ex neque perspiciatis sint amet nobis odio exercitationem alias fugiat vero ut, aliquid tenetur iusto qui.</p>
                <div className={headerCSS.header_btns}>
                    <button>Test Drive <i className="ri-roadster-line"></i></button>
                    <div className={headerCSS.clients_wrapper}>
                        <img src={client1} alt="client-images" />
                        <img src={client2} alt="client-images" />
                        <img src={client3} alt="client-images" />

                        <span>Let's Join Us.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header