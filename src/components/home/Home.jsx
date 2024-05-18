import React from 'react';
import illustration from '../../images/illustration.png';
import {dot, logo1, logo2, logo3, logo4, logo5, logo6, logo7} from '../imex'
import './home.css';
import { icon1, icon2, icon3 } from '../imex';

const Home = () => {
  return (
    <div className='home'>
      <div className="heroSection">
        <div className="frame">
          <div className="text">
            <h1>Lessions and insights<br/><span className='text-decor'>from 8 years</span></h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
          </div>
          <div className="button">
            <button>Register</button>
          </div>
        </div>
        <div className="illustration">
          <img src={illustration} alt="Illustration logo" />
        </div>
      </div>
      <div className="dot">
        <img src={dot} alt="" />
      </div>
      <div className="clients">
        <div className="client">
          <h1>Our Clients</h1>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="logoAlign">
          <div className="clientLogo">
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
            <img src={logo5} alt="logo" />
            <img src={logo6} alt="logo" />
            <img src={logo7} alt="logo" />
          </div>
        </div>
      </div>
      <div className="community">
        <div className="communityText">
          <h2>Manage your entire community<br /> in a Single system</h2>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div className="communityCard">
          <div className="card">
            <div className="member">
              <img src={icon1} alt="" />
              <h1>Membership Organisations</h1>
            </div>
            <div className="text">
              <p>Our membership management software provides full automation of memberhip renewals and payments</p>
            </div>
          </div>
          <div className="card">
          <div className="member">
              <img src={icon2} alt="" />
              <h1>National Associations</h1>
            </div>
            <div className="text">
              <p>Our membership management software provides full automation of memberhip renewals and payments</p>
            </div>
          </div>
          <div className="card">
          <div className="member">
              <img src={icon3} alt="" />
              <h1>Clubs and<br /> Groups</h1>
            </div>
            <div className="text">
              <p>Our membership management software provides full automation of memberhip renewals and payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
