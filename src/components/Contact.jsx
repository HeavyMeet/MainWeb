import React, { useState, useEffect, useRef, useContext} from 'react'
import emailjs from '@emailjs/browser';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';
import { ThemeContext } from '../context/ThemeProvider'

const Contact = () => {
  const form = useRef();

  const { theme } = useContext(ThemeContext)
  const [color, setColor] = useState('');
  const [filter, setFilter] = useState('');
  const social_net = [{ id: 1, link:'//www.linkedin.com/in/erick-d-573560212/', logo: linkedin }, { id: 2, link:'https://github.com/HeavyMeet',logo: github }, { id: 3, link:'https://twitter.com/____DanyBoy', logo: twitter }]
  const userAgent = navigator.userAgent;
  useEffect(() => {
    if (theme === 'dark') {
      setColor('white')
      setFilter('invert(90%)')
    } else {
      setColor('#403d3d')
      setFilter('invert(15%)')
    }
  }, [theme]);

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_6k1fu8h', 'template_14e2dww', form.current, 'ANPsZcaqeMECILMgT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div style={{ color }}>
      <h3 className='titles'>Contact</h3>
      <div id='contact' className='flex-container' style={{marginBottom: /Mobi/.test(userAgent) === false ? '200px': '600px'}}>
        <form ref={form} className='form' onSubmit={handleSubmit}>
          <div className='center'>
            <p>Contact Form</p>
          </div>
          <div className='grid-container1'>
            <div className='grid_label'>
              <label htmlFor='name'>Name:</label>
            </div>
            <div className='grid-item1'>
              <input type="text" name="user_name" />
            </div>
            <div className='grid_label'>
              <label htmlFor='email'>Email:</label>
            </div>
            <div className='grid-item1'>
              <input type="email" name="user_email" />
            </div>
            <div className='grid_label'>
              <label htmlFor='message'>Message:</label>
            </div>
            <div className="textarea-container">
              <textarea id="textArea"></textarea>
              <div id="textCopy"></div>
            </div>
          </div>
          <div className='center'>
            <input
              type="submit"
              value='Send Me a Message' />
          </div>
        </form>
        <div className='con'>
          <div style={{ marginLeft: '70px' }}>
            <svg className='svg' viewBox="0 11 190 10">

              <text style={{ stroke: color }} y='50'>Social</text>
            </svg>
            <svg className='svg1' viewBox="0 15 190 50">
              <text style={{ animation: '8s pulsat infinite', stroke: color }} y='50'>Networks</text>
            </svg>
          </div>
          <div className='sn'>
            {social_net.map(i =>
              <div className='snww' style={{ filter }} key={i.id}>
                <a href={i.link} target="_blank"><img style={{ width: '4em' }} src={i.logo} alt='linkedin' /></a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact