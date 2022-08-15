
import logo from './logo.svg';
import './App.css';
import leaf from './images/leaf.png';
import flowers from './images/flowers.png';
import flowers1 from './images/flowers1.png';
import flowers2 from './images/flowers2.png';
import me from './images/tiana2.jpg';
import fili from './images/louiseFili.png';
import colorDes1 from './images/colorDesigns1.jpg';
import cover from './images/cover.png';
import pg1 from './images/pg1.png';
import pg2 from './images/pg2.png';
import pg3 from './images/pg3.png';
import pg4 from './images/pg4.png';
import pg5 from './images/pg5.png';
import pg6 from './images/pg6.png';
import pg7 from './images/pg7.png';
import queen from './images/queenOfHearts.jpg'
import devil from './images/devil.jpg'
import stars from './images/stars.gif';
import blink from './images/blink.gif';
import arizona from './images/arizona.gif';
import studiot from './images/studiot.gif';



import Carousel from 'carousel-react-rcdev'

function App() {

  



  return (
    <div className="App">
      <header className="App-header">
      <div className="name-container">
        <img src={flowers1} className="nameImg"/>
        <p className="myname">Tiana Aldroubi</p>
        <img src={flowers} className="nameImg"/>
      </div>
        
        {/* <div className="navigation">
          <a className="dropdown-item" href="#">
            Home
          </a>
          <a className="dropdown-item" href="#">
            Illustration
          </a>
          <a className="dropdown-item" href="#">
            Design
          </a>
          <a className="dropdown-item" href="#">
            Animation
          </a>
        </div> */}


        <div className="home-container">
          <div>
            <p className="hello">Hello!</p>
            <p className="blurb">My name is Tiana, and I am a student at Lehigh University doing a dual degree in computer science and graphic design, and I am interested in UI/UX and web design.</p>
            {/* <p className="tech">Here are a few technologies I’ve been working with recently:</p> */}
            {/* <ul className="skills-list">
              <li>React</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>another</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>Procreate</li>
            </ul> */}
          </div>
          <img src={me} className="me"/>
        </div>

        <img src={flowers2} className="divider"/>
        <p className='art-header'>My Art</p>
        <div className="illustration-container">
          
        <img src={queen} className="art-ladies"/>
        <img src={devil} className="art-ladies"/>
         
         {/* <div className='carousel-container'>
         <Carousel>
              <img src={cover} className="zine"/>
              <img src={pg1} className="zine"/>
              <img src={pg2} className="zine"/>
            
              <img src={pg3} className="zine"/>
              <img src={pg4} className="zine"/>
              <img src={pg5} className="zine"/>
              <img src={pg6} className="zine"/>
              <img src={pg7} className="zine"/>
        </Carousel>
         </div> */}
        
              {/* <img src={queen} className=""/>
              <img src={devil} className="art"/>
              
              <img src={cover} className="art"/>
              <img src={pg1} className="art"/>
              <img src={pg2} className="art"/>
            
              <img src={pg3} className="art"/>
              <img src={pg4} className="art"/>
              <img src={pg5} className="art"/>
              <img src={pg6} className="art"/>
              <img src={pg7} className="art"/> */}
              
          
        </div>


        <div className="design-container">
          <img src={fili} className="fili"/>
          <img src={colorDes1} className="colorDes"/>
        </div>
        

        <div className="animation-container">
        <img src={blink} id="blink" className='animations'/>
        <img src={arizona} id="arizona" className='animations'/>
        <img src={studiot} id="studiot" className='animations'/> 
        <img src={stars} id="stars" className='animations'/>
         
        </div>

        <img src={flowers2} className="divider"/>
      </header>
      
    </div>
  );
}

export default App;
