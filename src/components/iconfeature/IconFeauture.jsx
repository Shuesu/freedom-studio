import React from 'react';
import iconFeauture from '../iconfeature/IconFeauture.css';
import week from '../../images/week.png';
import book from '../../images/book.png';
import mentor from '../../images/mentor.png';
const IconFeauture = () => {
    return (
        <section className='iconf container'>
            <ul className='iconList'>
            <li className='iconItem'>members <br /> benefits</li>
            <li className='iconItem'><img src={week} alt="week"/>
            <p>2 weeks <br/><span>internship</span></p></li>
            <li className='iconItem'><img src={mentor} alt="mentor"/>
            <p>24/7 <br /><span>mentorship</span></p></li>
            <li className='iconItem'><img src={book} alt="book"/>
            <p>2 free <br/><span>e-books</span></p></li>
            </ul>
        </section>
    );
}

export default IconFeauture;
