import React from 'react';
import './mycss/mainpage.css';

const Main2 = () => {

  return (
    <>

    <div className='titlemain2'>Our Vison & Our Goal</div>
      
      <div className='main2'>
     
      <div className='main2-1'><img src="main2.png"/></div>
      <div className='main2-2'> 
      <div className="container">
            <div className="box">
                <img className="image" src="1.png" alt="Image 1" />
                <div className="text">mobile app development</div>
                <div className="arrow">&#8594;</div>
            </div>

            <div className="box">
                <img className="image" src="2.png" alt="Image 2" />
                <div className="text">Website development</div>
                <div className="arrow">&#8594;</div>
            </div>

            <div className="box">
                <img className="image" src="3.png" alt="Image 3" />
                <div className="text">E-Commerce development</div>
                <div className="arrow">&#8594;</div>
            </div>

            <div className="box">
                <img className="image" src="4.png" alt="Image 4" />
                <div className="text">UI UX</div>
                <div className="arrow">&#8594;</div>
            </div>

            <div className="box">
                <img className="image" src="5.png" alt="Image 5" />
                <div className="text">Game development</div>
                <div className="arrow">&#8594;</div>
            </div>

            <div className="box">
                <img className="image" src="6.png" alt="Image 6" />
                <div className="text">IPTV development</div>
                <div className="arrow">&#8594;</div>
            </div>
        </div></div>
      </div>

      </>
  );
};

export default Main2;