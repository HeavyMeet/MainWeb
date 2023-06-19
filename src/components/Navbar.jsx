import React, {useState, useEffect, useContext, useCallback} from 'react'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../context/ThemeProvider';
import sun from '../assets/sunx.png'
import moon from '../assets/moon.png'

const Navbar = () => {
    
    const [isShown, setisShown] = useState(false);
    const [showDiv, setshowDiv] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [top, setTop] = useState('0');
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
      function init(){
        const nodeList = document.querySelectorAll("a:not(.whats_float)");
        if(theme === "dark"){
          for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.color = "#9ABDDF";
            nodeList[i].addEventListener("mouseenter", function( event ) {   
              event.target.style.textShadow = "0 0 20px #4d5fff, 0 0 15px #1e406d, 0 0 15px #276bc4";
            }, false);
            nodeList[i].addEventListener("mouseleave", function( event ) {   
              event.target.style.textShadow = "";
            }, false);  
          }
          }else{
            for (let i = 0; i < nodeList.length; i++) {
              nodeList[i].style.color = "rgba(31, 25, 25, 0.7)";
              nodeList[i].addEventListener("mouseenter", function( event ) {   
                event.target.style.textShadow = "0 0 20px #9a9777, 0 0 15px #49332d, 0 0 15px #aa885e";
              }, false);
              nodeList[i].addEventListener("mouseleave", function( event ) {   
                event.target.style.textShadow = "";
              }, false);  
            }
          }
      }
      init();
    });

    const handleWindowResize = useCallback(() => {
      setWindowSize(window.innerWidth);
  });
  

    useEffect(() => {
      if(windowSize >= 723){setshowDiv(false)}else{setshowDiv(true)};
        
      window.addEventListener('resize', handleWindowResize);
    return () => {
        window.removeEventListener('resize', handleWindowResize);
    };
    }, [windowSize]);
      
      const checked= (
        <svg
        height="190%"
        width="190%"
        viewBox="35 -1 33 90"
    >
          <image href={moon} />
        </svg>
      );
    
      const unchecked= (
        <svg
            height="100%"
            width="100%"
            viewBox="35 -4 10 90"
        >
          <image href={sun} />
        </svg>
      );

  const backg = (v,op) =>{
    if(window.innerWidth <723){
      if(v===true){
        setisShown(true)
      }else{
        setisShown(false)
      }
      switch(op){
      case 1:
      setTop('0')
      break;
      case 2:
      setTop('46px')
      break;
      case 3:
      setTop('92px')
      break;
      }
    }
  }

  return (
    <div className='topnav'> 
    <div id={showDiv?'mobile_ver':'original'} style={{backgroundColor:isShown?'#7e7a7a':'', top:isShown?top:''}}></div>
          <div className='menu'>
          <a onMouseEnter={()=>backg(true,1)} onMouseLeave={()=>backg(false)} href="#stick" data-scroll-to>Portfolio</a>
          <a onMouseEnter={()=>backg(true,2)} onMouseLeave={()=>backg(false)} href="#contact" role="button" data-scroll-to>Contact</a>
          <a onMouseEnter={()=>backg(true,3)} onMouseLeave={()=>backg(false)} href="#contact" role="button" data-scroll-to>About</a>
        </div>
        <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <>
          <div className='switch'>
          <ReactSwitch
          onChange={toggleTheme}
          checked={theme === 'dark'}
          checkedIcon={checked}
          uncheckedIcon={unchecked}
          offColor="#fffee0"
          onColor="#546bab"
          offHandleColor="#FFA500"
          onHandleColor="#131862"
          handleDiameter={38}
          height={40}
          width={82}
          />
          </div>
          <div className='switch1'>
          <ReactSwitch
          onChange={toggleTheme}
          checked={theme === 'dark'}
          checkedIcon={checked}
          uncheckedIcon={unchecked}
          handleDiameter={24}
          height={29}
          width={62}
          offColor="#fffee0"
          onColor="#546bab"
          offHandleColor="#FFA500"
          onHandleColor="#131862"
          />
          </div>
          </>)}
      </ThemeContext.Consumer>
     </div>
  )
}

export default Navbar