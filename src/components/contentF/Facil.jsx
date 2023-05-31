import React from 'react';
import facil from './../contentF/facil.css';
import frame1 from '../../images/Frame1.png';
import checkmark from '../../images/check-mark.png';

const Facil = () => {
    return (
        <section className='facility container'>
            <img className='image'src={frame1} alt="news studio" />
            <div className='contentf'>
                <h1>facilities</h1>
                <h2>world class <br /> training</h2>
                <ul className='facilyList'>
                    <li className='facilyItem'><img src={checkmark} alt="checkmark" />acces to Wifi</li>
                    <li className='facilyItem'><img src={checkmark} alt="checkmark" />fully airconditioned</li>
                    <li className='facilyItem'><img src={checkmark} alt="checkmark" />over 100 classes monthly</li>
                </ul>
            </div>
        </section>
    );
}

export default Facil;