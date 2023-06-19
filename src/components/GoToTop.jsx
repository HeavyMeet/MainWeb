import arrow from '../assets/arrow_top.png'
const GoToTop = () => {

  return (
       <a href='#intro' className='stic'
                    data-scroll 
                    data-scroll-speed="5"
                    data-scroll-sticky
                    data-scroll-target="#stick" data-scroll-to>
           <button className='arrow' type='button'>
           <img src={arrow} alt='gooTop' />
          </button>
          </a>
  )
}

export default GoToTop
