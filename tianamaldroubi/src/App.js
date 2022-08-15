import './App.css';
import leaf from './images/leaf.png';
import flowers from './images/flowers.png';
import flowers1 from './images/flowers1.png';
import flowers2 from './images/flowers2.png';
import me from './images/tiana2.jpg';
import fili from './images/louiseFili.png';
import colorDes1 from './images/colorDesigns1.jpg';
import cover from './images/cover.jpg';
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
import cutout from './images/cutout.jpg';
import collaborEat from './images/collaborEat.jpg';
import hocaa from './images/hocaa.jpg';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div className="name-container">
        <img src={flowers1} className="nameImg"/>
        <p className="myname">Tiana Aldroubi</p>
        <img src={flowers} className="nameImg"/>
      </div>
        
        {/* <div className='header'>
        <div className="navigation">
          <a className="dropdown-item" href="#">
            Home
          </a>
          <a className="dropdown-item" href="#design">
            Illustration & Design
          </a>
          <a className="dropdown-item" href="#animation">
            Animation
          </a>
          <a className="dropdown-item" href="#zine">
            Zine
          </a>
        </div>

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
        <span id="design"></span>
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
              
               {/* <Carousel>
                    <div>
                      <img src={pg2} className="zine"/>
                    </div>
                    
                    <div>
                      <img src={pg3} className="zine"/>
                    </div>

                    <div>
                      <img src={pg4} className="zine"/>
                    </div>

                    <div>
                      <img src={pg5} className="zine"/>
                    </div>
                    <div>
                      <img src={pg6} className="zine"/>
                    </div>
                    <div>
                      <img src={pg7} className="zine"/>
                    </div>
            </Carousel>  */}
            {/* <div>
              <ImageSlider slides={slides} />
            </div> */}
             
          
        </div>


        <div className="design-container">
        <img src={colorDes1} className="colorDes"/>
          <img src={fili} className="fili"/>
          
          <img src={cutout} className="art" id="cutout"/>
          <img src={hocaa} className="art" id="hocaa"/>
          <img src={collaborEat} className="art" id="collaboreat"/>
          
        </div>

        <img src={flowers2} className="divider"/>
        <span id="animation"></span>
        <p className='art-header'>Animation</p>
        <p className='caption2'>I have been trying to learn to animate in my free time. All my animations are hand drawn on procreate.</p>
        <div className="animation-container">
        <img src={blink} id="blink" className='animations'/>
        <img src={arizona} id="arizona" className='animations'/>
        <img src={studiot} id="studiot" className='animations'/> 
        <img src={stars} id="stars" className='animations'/>
         
        </div>

        <img src={flowers2} className="divider"/>
        
        <span id="zine"></span>
        <div className='zine-container'>
          <p className='art-header'>My Zine</p>
          <p className='caption'>The following illustrations are a part of a zine I made, which is a small book printout. The first image is the front and back cover and the following images are each a page spread. The physical zine is hand bound with a red string and features a "choose your own adventure" style story.</p>
        <img src={cover} className="zine"/>
              <img src={pg1} className="zine"/>
              <img src={pg2} className="zine"/>
            
              <img src={pg3} className="zine"/>
              <img src={pg4} className="zine"/>
              <img src={pg5} className="zine"/>
              <img src={pg6} className="zine"/>
              <img src={pg7} className="zine"/>
        </div>
        

        <img src={flowers2} className="divider"/>
      </header>
      
    </div>
  );
}

export default App;
