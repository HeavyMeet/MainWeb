import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import Presentation from './components/Presentation';
import GoToTop from './components/GoToTop';
import ThemeProvider from './context/ThemeProvider';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const heig = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      tablet: { smooth: true },
      smartphone: { smooth: true }
    });
    const meth = () => {
      const val = document.querySelector('.above');
      const c = document.createElement('a');
      const ii = document.createElement('i');
      const e = document.createElement('div');
      ii.setAttribute('class','fa fa-whatsapp fa-2x whatsapp-icon');
      c.setAttribute('class','whats_float');
      e.setAttribute('class','whats');
      c.setAttribute('href','https://wa.me/7223711576')
      c.style.position='absolute'; 
       scroll.on("scroll", () => {
        heig.current = (window.innerHeight-100).toString();
        c.style.top = heig.current + 'px';
        c.append(ii);
        c.append(e)
        val.append(c);
       });
    }
    meth();
  }, []);


  return (
    <>
      <ThemeProvider>
        <div data-scroll-container>
          <section id="intro" data-scroll-section>
          <Navbar />
          </section>
          <div className='content'>
          <section id="in" data-scroll-section>
            <Presentation />
          </section>
        <section id="stick" data-scroll-section>
          <GoToTop/>
          <div data-scroll 
          data-scroll-speed="4">
          <Portfolio />
          </div>
          <div data-scroll data-scroll-speed="3">
          <Contact />
          </div>
        </section>
        <div className='above'></div>
        </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App
