import React from 'react';
import start from '../Start/Start.css'
import right from '../../images/right-mark.png';


const Start = () => {
    return (
        <section className='start container'>
            <div className='start-info'>
                <p className='info1'>first semester</p>
                <h2 className='info2'>freedom studios academy</h2>
                <p className='info3'>Taking the message of freedom to the end of the earth through media and representing christ in every way.</p>
                <a className='link-button'href="#">Select a membership plan
                <img src={right}/>
                </a>           
            </div>
        </section>
    );
}

export default Start;
