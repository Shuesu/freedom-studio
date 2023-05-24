import React from 'react';
import Homeclasses from '../Home/Home.css'
import logo from '../../images/logo.png';
import right from '../../images/right-mark.png';


const Home = () => {
    return (
        <div className='home container'>
            <div className='logo logo-home'>
                <a href="#">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className='home-info'>
                <p className='info1'>first semester</p>
                <h2 className='info2'>freedom studios academy</h2>
                <p className='info3'>Taking the message of freedom to the end of the earth through media and representing christ in every way.</p>
                <a className='link-button'href="#">Select a membership plan
                <img src={right}/>
                </a>           
            </div>
        </div>
    );
}

export default Home;
