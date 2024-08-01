import logo from './images/logo_transparent.png';
import phone from './images/phone.png';
import location from './images/location.png';
import home from './images/home_background.jpg';
import placeholder from './images/placeholder.png';
import ServiceCard from './components/ServiceCard';

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
          <li><a href="#">Projects</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <img src={home} alt='main image' style={{ height: '100vh', width: '100%' }} />
      <div>
        <div className='section-heading'>
          <span className="line"></span>
          <h1 className='section-title'> Services</h1>
          <span className="line"></span>
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
            <ServiceCard title='Inspection of Civil Works'  url={placeholder}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
