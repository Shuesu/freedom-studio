import React from 'react';
import logo from '../../images/logo.png';
import footr from '../Footr/Footr.css'
import twitter from '../../images/Twitter.png';
import facebook from '../../images/Facebook.png';
import instagram from '../../images/Instagram.png';
const Footr = () => {
    return (
        <section className='footr container'>
            <div className='logo logo-footr'>
                <a href="#">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className='social'>
                <ul className='socialList'>
                    <li className='socialItem'><a href="#"><img src={twitter} alt="twitter"/></a></li>
                    <li className='socialItem'><a href="#"><img src={facebook} alt="facebook"/></a></li>
                    <li className='socialItem'><a href="#"><img src={instagram} alt="instagram"/></a></li>
                </ul>      
            </div>
        </section>
    );
}

export default Footr;
