import React from "react";
import "../styles/Header.css"
import Bg from '../assets/background.jpg';

function Header(){
    return(
        <div className="App" style={{ backgroundImage: `url(${Bg})`}}>
        <div className='overlay'>
         <div className='cont'>
           <div className='section'>
             <h1>Welcome To Weather Forecast</h1>
           </div>
           <div className='mid-cont'>
           <div className='section_temp'>
             <div className='icon'>
               
               <img src='/Images/cloud-sun.png' alt='' className='image1' />
               <h3>Sunny</h3>
             </div>
             
           </div> 
           <div className='section_temp'>
             <div className='icon'>
               
               <img src='/Images/cloud-thunder.png' alt='' className='image2' />
               <h3>Rainy</h3>
             </div>
             
           </div> 
           <div className='section_temp'>
             <div className='icon'>
               
               <img src='/Images/cloud.png' alt='' className='image3' />
               <h3>Cloudy</h3>
             </div>
             
           </div> 
           </div> 
           <div className='button'>
             <button className='button'>
               <a href='/Weather'>Click Here</a>
             </button>
           </div>
           <h1 className="description">Click here for more information</h1>
         </div>
        </div>
       </div>
    )
}

export default Header;