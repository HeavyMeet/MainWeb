import React, {useState, useEffect, useContext} from 'react'
import { ThemeContext }  from '../context/ThemeProvider'

const Presentation = () => {
 
  const { theme } = useContext(ThemeContext)
  const userAgent = navigator.userAgent;
useEffect(() => {
 function back(){
   let div = document.querySelector('#in');
   const di = document.querySelector('.yo');
   let anim = document.createElement('div');
   anim.setAttribute('id','anim');
   let drop = '';
   if(di !== null){
    for(let k = 0; k<4; k++)
    div.removeChild(div.lastChild);    
   }
   for(let i = 0; i < 4; i++){
     drop = document.createElement('div');
     drop.setAttribute('class','yo');
     drop.style.margin = '0 50px 35px 0';
     drop.style.display = "flex";

     for (let j = 0; j < 7; j++) {
       let dr = document.createElement('div');
       dr.setAttribute('id','my');
       let posX = Math.floor(Math.random() * window.innerWidth);
       let size = Math.random() * 5;
       dr.style.width = 0.2 + size +'px'; 
       dr.style.right = posX + 'px';
       let delay = Math.random() * -100;
       let duration = Math.random() * 5; 
       dr.style.animationDelay = delay + 's';
       dr.style.animationDuration = 72 + duration + 's';
       if(theme === "dark"){
        dr.style.background = 'conic-gradient(from 180deg at 50% 50%, #00FFC2 0deg, #00F0FF 120.07deg, #0077FF 179.52deg, #FF0099 241.65deg, #0470E5 299.6deg, #00FFC2 360deg)'; 
       }else{ dr.style.background = 'conic-gradient(from 180deg at 50% 50%, #c32e2e, rgb(203, 42, 42), rgb(219, 122, 37), rgb(201, 42, 42), rgb(212, 137, 137) 360deg)';
        }
       drop.appendChild(dr);
     }
     drop.append(anim);
     div.append(drop);
   }
 }
 if (!(/Mobi/.test(userAgent))) 
   back(); 
},[theme]);

  return (
    <>
    {/Mobi/.test(userAgent) === false ?   
      <>
      <div>
          <h1 className="span1" style={{ color: theme === "dark" ? '#9abddf' : '#1f1919', textShadow: theme ? '12px 12px 3px rgb(63, 84, 105)' : '12px 12px 3px rgba(89, 72, 72, 0.6)' }} data-scroll>
            <span data-scroll data-scroll-delay='0.15' data-scroll-speed='5'>E</span>
            <span data-scroll data-scroll-delay='0.095' data-scroll-speed='5'>r</span>
            <span data-scroll data-scroll-delay='0.085' data-scroll-speed='5'>i</span>
            <span data-scroll data-scroll-delay='0.075' data-scroll-speed='5'>c</span>
            <span data-scroll data-scroll-delay='0.065' data-scroll-speed='5'>k</span>
          </h1>
          <h1 className="span2" style={{ color: theme === "dark" ? '#9abddf' : '#1f1919', textShadow: theme ? '12px 12px 3px rgb(63, 84, 105)' : '12px 12px 3px rgba(89, 72, 72, 0.6)' }} data-scroll>
            <span data-scroll data-scroll-delay='0.15' data-scroll-speed='5'></span>
            <span data-scroll data-scroll-delay='0.095' data-scroll-speed='5'>R</span>
            <span data-scroll data-scroll-delay='0.085' data-scroll-speed='5'>e</span>
            <span data-scroll data-scroll-delay='0.075' data-scroll-speed='5'>a</span>
            <span data-scroll data-scroll-delay='0.065' data-scroll-speed='5'>l</span>
          </h1>
        </div><div>
            <h1 style={{ padding: '0', margin: '0' }}>
              <span className='span3' data-scroll data-scroll-direction="vertical" data-scroll-delay="0.05" data-scroll-speed="5">
                Web & Mobile Developer
              </span>
            </h1>
          </div><div>
            <h1 style={{ padding: '0', margin: '70px 0px 0 10px' }}>
              <span className='span4' data-scroll data-scroll-direction="vertical" data-scroll-delay="0.05" data-scroll-speed="5">
                <a href='https://drive.google.com/file/d/1Cf5qhqpARw1aSEIDHoImYzh5iGTScv4Q/view?usp=sharing' target="_blank">My CV</a>
              </span>
            </h1>
          </div></>
        : <>
        <h1 style={{ color: theme === "dark" ? '#9abddf' : '#1f1919', textShadow: theme ? '12px 12px 3px rgb(63, 84, 105)' : '12px 12px 3px rgba(89, 72, 72, 0.6)'}}>
          <span style={{fontSize:'45px'}}>Erick Real</span>
        </h1>
        <h3>
            <span style={{fontSize:'35px'}}>Web & Mobile Developer</span>
          </h3>
          <h4 style={{ padding: '0', margin: '0px 0px 0 10px' }}>
              <span style={{fontSize:'25px'}}>
                <a href='https://drive.google.com/file/d/1Cf5qhqpARw1aSEIDHoImYzh5iGTScv4Q/view?usp=sharing' target="_blank">My CV</a>
              </span>
            </h4>
          </> 
       }  
      </>
      )
}

export default Presentation

