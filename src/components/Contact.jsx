import React, { useState, useEffect, useRef, useContext} from 'react'
import emailjs from '@emailjs/browser';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import { ThemeContext } from '../context/ThemeProvider';

const Contact = () => {
  const form = useRef();
  const { theme } = useContext(ThemeContext)
  const [color, setColor] = useState('');
  const [filter, setFilter] = useState('');
  const [flag, setFlag] = useState(true);
  const [msg, setMsg] = useState('');
  const social_net = [{ id: 1, link:'//www.linkedin.com/in/erick-real-573560212/', logo: linkedin }, { id: 2, link:'https://github.com/HeavyMeet',logo: github }, { id: 3, link:'https://twitter.com/____DanyBoy', logo: twitter }]
  const userAgent = navigator.userAgent;
  
  useEffect(() => {
    const btnForm = document.querySelector(".border-with-grad");
    // const msgForm = document.querySelector("#msg");
    if (theme === 'dark') {
      setColor('white')
      setFilter('invert(90%)')
      btnForm.style.color = "#9ABDDF";
      btnForm.addEventListener("mouseenter", function( event ) {   
        event.target.style.textShadow = "0 0 20px #4d5fff, 0 0 15px #1e406d, 0 0 15px #276bc4";
      }, false);
      btnForm.addEventListener("mouseleave", function( event ) {   
        event.target.style.textShadow = "";
      }, false);  
      // msgForm.style.color='#9ABDDF'
    } else {
      setColor('#403d3d')
      setFilter('invert(15%)')
      btnForm.style.color = "rgba(31, 25, 25, 0.7)";
      btnForm.addEventListener("mouseenter", function( event ) {   
        event.target.style.textShadow = "0 0 20px #9a9777, 0 0 15px #49332d, 0 0 15px #aa885e";
      }, false);
      btnForm.addEventListener("mouseleave", function( event ) {   
        event.target.style.textShadow = "";
      }, false);
      // msgForm.style.color='#403d3d'
    }
  }, [theme]);


  const handleSubmit = e => {
    e.preventDefault();
    setFlag(false)
    const input = document.querySelector('.input');
    const textA = document.querySelector('textarea[name="message"]');
    console.log(import.meta.env.VITE_USER_ID, import.meta.env.VITE_TEMPLATE, import.meta.env.VITE_SERVICE," jj2j2j2 ")
    if(input.value !== '' && textA.value !== ''){
      emailjs.sendForm('service_t1zbqe8', 'template_exy7kpr', form.current, 'hawUhGaBT4syUMLPn')
      .then((result) => {

        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      form.current.reset();

      setMsg('You havehhh sent your message. Thanks!')    
    setTimeout(()=>
    setFlag(true)
    ,3000)  
    }else{
      setMsg('Don´t let any field empty.')    
      setTimeout(()=>
      setFlag(true)
      ,800)  
    }
  }

  return (
    <div style={{ color }}>
      <h3 className='titles'>Contact</h3>
      <div id='contact' className='flex-container' style={{marginBottom: /Mobi/.test(userAgent) === false ? '200px': '600px'}}>
        <form ref={form} className='form' onSubmit={handleSubmit}>
          <div className='grid-container1'>
            <div className='grid_label'>
              <label htmlFor='name'>Name:</label>
            </div>
            <div className='grid-item1'>
              <input className='input' type="text" name="user_name"/>
            </div>
            <div className='grid_label'>
              <label htmlFor='email'>Email:</label>
            </div>
            <div className='grid-item1'>
              <input className='input' type="email" name="user_email"/>
            </div>
            <div className='grid_label'>
              <label htmlFor='message'>Message:</label>
            </div>
            <div className="textarea-container">
              <textarea style={{height:'140px'}} name="message"></textarea>
            </div>
          </div>
          {flag ?
          <div className='center'>
            <input className='border-with-grad'
              type="submit"
              value='Send Me a Message'
              />
          </div>
           :
           <div id='msg' className='center'>{msg}</div>
           }
        </form>
        <div className='con'>
          <div className='sn_div'>
            <svg className='svg' viewBox="0 11 190 12">
              <text style={{ stroke: color }} y='50'>Social</text>
            </svg>
            <svg className='svg1' viewBox="0 15 190 1">
              <text className='text_sn' style={{ stroke:color}}>Networks</text>
            </svg>
          </div>
          <div className='sn'>
            {social_net.map(i =>
              <div className='snww' style={{ filter }} key={i.id}>
                <a href={i.link} target="_blank"><img className='img_social_net' src={i.logo} alt='linkedin' /></a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact