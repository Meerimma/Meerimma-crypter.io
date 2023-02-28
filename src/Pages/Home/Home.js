import React from 'react';
import bg from '../../Assets/img/Home.png'
import './main.css'

const Home = () => {
    return (
        <section style={{background: '#4A2B33', paddingBottom:'36px'}}>
            <div className="container">
                <img src={bg} alt="bg"/>
            </div>
        </section>
    );
};

export default Home;