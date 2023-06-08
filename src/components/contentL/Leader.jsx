import React from 'react';
import leader from './../contentL/Leader.css';
import frame2 from '../../images/Frame2.png';

const Leader = () => {
    return (
        <section className='lordjosh container'>
            <div className='contentL'>
                <h1>meet our leader</h1>
                <h2>lord josh</h2>
                <p>He is an  oscar award scriptwritter, director of a movie titles sons of sceva. He is a farher of a beautiful daughter and the huband of Mrs olan.</p>
            </div>
            <img className='image'src={frame2} alt="cameraman" />
        </section>
    );
}

export default Leader;