import React from 'react';
import HeroHomeImage from '../../images/purple-door4.jpg';

const HeroHome = () => {
  return (
    <div style={{ position: 'relative', backgroundColor: '#c97fbc', overflow: 'hidden' }}>
      <img src={HeroHomeImage} alt="HeroHome Image" style={{ width: '100%', height: '20%', objectFit: 'cover',backgroundColor:'#160F29' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor:'',opacity:'50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 style={{backgroundColor:'', color: 'black', fontSize: '4rem', marginBottom: '2rem' }}>AMMYETH</h1>
        {[...Array(3)].map((_, i) => (
          <p key={i} style={{ color: '#FBAF00', fontSize: '2rem', marginBottom: '3rem' }}></p>
        ))}
        <a href="#tiles" style={{ textDecoration: 'underline' }}>
          <button style={{ padding: '1rem 2rem', borderRadius: '50px', background:'purple', color: '#fff', fontSize: '20px' }}>Our Services</button>
        </a>
      </div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#160F29" fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,69.3C960,43,1200,53,1320,58.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </div>
  );
}

export default HeroHome;
