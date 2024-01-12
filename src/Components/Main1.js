import React from 'react';
import './mycss/mainpage.css';

const Main1 = () => {

  return (
    <>
        <div className='main1'>
          <div className="side-by-side">
          Transforming Ideas Into Software 
            <div className="scroller">
              <span>
                Experiences<br/>
                Innovation<br/>
                Creation<br/>
              </span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
          <div className='mainbutton'>
            <button className='button1'>About Us</button>
            <button className='button2'>contact us</button>
          </div>
        </div>
        <div className=''><img src="glob.png"/></div>
      </div>
    </>
  );
};

export default Main1;


