import logo from './images/logo_transparent.png';
import phone from './images/phone.png';
import location from './images/location.png';
import home from './images/home_background.jpg';
import placeholder from './images/placeholder.png';
import ServiceCard from './components/ServiceCard';

import { Tabs } from "flowbite-react";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Header' style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }}>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p style={{alignSelf:'flex-end', fontWeight:'lighter'}}>D.A PCI SOLUTIONS CIVIL ENGINEERING VBA</p> */}
        </div>
        <div style={{ flex: 3 }}>
          <div className='Header-icon-container'>
            <div className='Header-item-container'>
              <div style={{ alignContent: 'center', marginRight: '2%' }}>
                <img src={phone} className="Icon" alt='phone icon' />
              </div>
              <div>
                <p className='Icon-label'>Call Us<span>+297-592-3348</span></p>
              </div>
            </div>
            <div className='Header-item-container'>
              <img src={location} className="Icon" alt='location icon' />
              <div>
                <p className='Icon-label'>Location <span style={{ width: '20vw' }}>Kamerling Onnestraat 8, Oranjestad Aruba</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <img src={home} alt='main image' style={{ height: '100vh', width: '100%' }} />
      <div>
        <div>
          <div className='section-heading'>
            <span className="line"></span>
            <h1 className='section-title'> About Us</h1>
            <span className="line"></span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', fontStyle: 'italic', marginBottom: '2%' }}>
            <p>"In our professional life, there are highs and lows, which are evident everywhere.<br /> For this, perseverance and consistency are our best protectors against adversity."</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '55vw' }}>
              <p>
                We are engineering professionals with over 35 years of experience in multidisciplinary projects.<br /> Our company develops projects in: </p>
              <br />
              <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Urban planning">
                  We conduct topographic surveys, adjust parceling according to local urban variables, and modify terraces based on the original topography and external drainage requirements.
                </Tabs.Item>
                <Tabs.Item title="Water management systems">
                  Our water management systems include the development of aqueducts, sewer systems, and drainage projects for urban areas. We also design potable water systems (both cold and hot) and sanitary installations with appropriate stormwater disposal in buildings, as well as swimming pools for private or public use, including the necessary suction, recirculation pipes, and structural solutions tailored to the environment.
                </Tabs.Item>
                <Tabs.Item title="Architectural design">
                  For housing and buildings, we develop architectural and structural projects in accordance with local regulations.
                </Tabs.Item>
                <Tabs.Item title="Structural engineering">
                  Our bridge designs encompass pedestrian, vehicular, and service bridges, using materials and methods such as reinforced concrete, metal beams, and pre-tensioned or post-tensioned structures, as well as suspension bridges.
                </Tabs.Item>
                <Tabs.Item title="Sanitary installations">
                  We handle the design and implementation of sanitary installations, ensuring proper potable water systems and effective stormwater disposal in buildings.
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
        <div>
          <div className='section-heading'>
            <span className="line"></span>
            <h1 className='section-title'> Services</h1>
            <span className="line"></span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', fontWeight:'bold', marginBottom: '2%', fontSize:'1.5vw' }}>
            <p>Explore What We Offer</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'row', margin: '0 10%' }}>
            <ServiceCard title='Civil and Sanitary Works Projects' url={home} />
            <ServiceCard title='PERT-CPM Project Scheduling' url={placeholder} />
            <ServiceCard title='Cost Estimation by APU' url={placeholder} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '0 10%' }}>
            <ServiceCard title='Preparation of Project Budgets' url={placeholder} />
            <ServiceCard title='Preparation of Metric Computations' url={placeholder} />
            <ServiceCard title='Construction of Civil Works' url={placeholder} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 10%' }}>
            <div style={{ width: '33%' }}>
              <ServiceCard title='Inspection of Civil Works' url={placeholder} />
            </div>
          </div>
        </div>
        {/* <div style={{ backgroundColor: 'black', height: '40vh', marginTop: '5%' }}>
          <div className='section-heading'>
            <span className="line" style={{backgroundColor:'white'}}></span>
            <h1 className='section-title' style={{color:'white'}}> Testimonials</h1>
            <span className="line" style={{backgroundColor:'white'}}></span>
          </div>
          <p style={{color:'white'}}>In our professional life, there are highs and lows, which are evident everywhere. For this, perseverance and consistency are our best protectors against adversity.</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
