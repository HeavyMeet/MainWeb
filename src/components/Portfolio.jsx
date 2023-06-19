import React, {useState, useContext, useEffect} from 'react'
import nodeImg from '../assets/node_logo.png'
import reactImg from '../assets/react_logo.png'
import mongoImg from '../assets/mongodb_logo.png'
import apolloImg from '../assets/apollo-graphql.png'
import oracleImg from '../assets/oracle.png'
import cssImg from '../assets/css.png'
import expoImg from '../assets/expo.png'
import SQLiteImg from '../assets/sqlite.png'
import cImg from '../assets/c.png'
import { ThemeContext }  from '../context/ThemeProvider'

const Portfolio = () => {
  
  const { theme } = useContext(ThemeContext)
  const [boxShadow, setBoxShadow] = useState('');
  const [back, setBack] = useState('');
  const [color, setColor] = useState();
  useEffect(() => {
    function init(){
      if(theme === 'dark'){
        setColor('#ffffffb3');
        setBoxShadow('0 1px 1px 0 #FFEEEE');
        setBack('linear-gradient(to right bottom, rgba(37, 37, 59, 0.77), rgba(70, 50, 69, 0.83)), url(../src/assets/back_stack.png)')
      }else{
        setColor('#403d3d');
        setBoxShadow('0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)');
        setBack('linear-gradient(to right bottom, rgba(152, 159, 147, 0.77), rgba(190, 116, 86, 0.83)), url(../src/assets/back-stack.png)')
      }
    }
    init();
  }, [theme]);

    
    const works = [
        {id:"1", nameProy:"Mobile App w/ Full Offline Capabilities", link:'https://github.com/HeavyMeet/Offline_App',
        descrip:"Mobile App which make a QR code Scan, obtain specific data from scan, make the majority CRUD operations, save and upload photos. In case the connection get lost, you can work with the app completely offline mode and sync once the app reconnect it.", stack:['React Native', 'Apollo Client', 'SQLite', 'Expo'], logo:[reactImg, apolloImg, SQLiteImg, expoImg] 
        },
        {id:"2", nameProy:"API w/ MongoDB ", link: 'https://github.com/HeavyMeet/ServerMongo', descrip:"Node API based. Works with Apollo Server and graphQL to connect with a client and moongose ODM to create an schema which connect with a mongoDB Database.", stack:["Node.js", 'Apollo Server', "mongoose"], logo:[nodeImg, apolloImg, mongoImg]  },
        {id:"3", nameProy:"API w/ Oracle12C ", link:'https://github.com/HeavyMeet/API_Oracle12C', descrip:"Node API based. Works with Apollo Server and graphQL to connect with a client and node-oracledb library to create an schema which connect with an Oracle Database.", stack:["Node.js", "Apollo Server", "oracledb"], logo:[nodeImg, apolloImg, oracleImg]  },
        {id:"4", nameProy:"WorkStation Quiz", link:'https://github.com/HeavyMeet/Quiz_Access-Excel', descrip:"70 questions Quiz made it to verify the security level of a car production line work station. Save the data in an Access file. Allows exporting Microsoft Excel files too.", stack:["C#"], logo:[cImg] },
        {id:"5", nameProy:"Mini Project: Excel Downloader", link:'https://github.com/HeavyMeet/excel_handler', descrip:"React website which import, modify and export a Microsoft Excel File. Styled with CSS Modules.", stack:["React", "CSS 3"], logo:[reactImg, cssImg] },
        {id:"6", nameProy:"This website", link:'https://github.com/HeavyMeet/MainWeb', descrip:"The code from this React website based. Styled with CSS Modules.", stack:["React","CSS 3"], logo:[reactImg, cssImg] }
      ]
    
  return (
    <>
    <h2 className='titles' style={{color}}>Portfolio</h2>
    <div className='grid-container'>
        {works.map(i =>
          <div className='grid-item' key={i.id}>
            <div className='stack-div' style={{backgroundImage:back, boxShadow}}>
            <div style={{margin:'0 23px'}}>
            <a style={{color}} href={i.link} target="_blank">{i.nameProy}</a>
            </div>
                <div className='descrip' style={{color:theme === 'dark' ? '#ebf1f7' : '#1f223f'}}>{i.descrip}</div>
                <p className='no_margin' style={{color}}>Developed with:</p>
                <div style={{marginLeft: '23px'}}>
                {i.stack.map((j, ind) => {
                  return (
                    <div className='img-stackd' key={ind}>
                    <div className='img-stack' style={{boxShadow}}>
                      <p className='pp' style={{color}}>{j}</p>
                      <img className='img-r' src={i.logo[ind]} alt="blank" />
                    </div>
                    </div>
                    
                  )
                })}
                </div>
            </div>
          </div>
        )}
      </div>
      </>
  )
}

export default Portfolio