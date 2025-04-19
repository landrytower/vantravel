import React, { useRef } from "react";
import navCSS from './../Nav/Nav.module.css'

function Nav ()  {

    const menu = useRef();

    const MenuHandler = () =>{
        menu.current.classList.toggle(navCSS.showMenu);
    }


    return (
        <div className={navCSS.nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#"><span>Ev</span>Hub</a>
            </div>
            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className={navCSS.Nav_btns}>
            <button onClick={() => window.location.href = './../Pages/login/login.jsx'}>
  Get Started <i className="ri-instance-line"></i>
</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={MenuHandler}></i>
            </div>
        </div>
    )
}

export default Nav