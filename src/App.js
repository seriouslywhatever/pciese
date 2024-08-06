import logo from './images/logo_transparent.png';
import phone from './images/phone.png';
import location from './images/location.png';
import home from './images/home_background.jpg';
import placeholder from './images/placeholder.png';
import ServiceCard from './components/ServiceCard';
import pdf from './images/cronograma_de_inversion.pdf';

//PERT-CPM
import cdi from './images/services/cronograma_de_inversion.png';
import cdd1 from './images/services/cronograma_de_desembolso_part_1.png';
import cdd2 from './images/services/cronograma_de_desembolso_part_2.png';

//Prep Project Budget
import apu from './images/services/apu.png';

//Prep Metric Computation
import ciet from './images/services/cabilla_infra_east_tower.png'
import cmp1 from './images/services/computos_metricos_part_1.png';
import cmp2 from './images/services/computos_metricos_part_2.png';


import CustomTab from './components/CustomTab';
import { HR } from "flowbite-react";
import { Document, Page, pdfjs } from 'react-pdf';

import './App.css';

function App() {

  const DATA = [
    {
      title: 'Civil and Sanitary Works Projects',
      preText: 'This service involves the preparation of:',
      body: [
        'Urban Planning, Housing, Buildings, Roads, and Bridges Projects.',
        'Structural Design of Housing, Buildings, and Bridges.',
        'Project and Design of Aqueducts, Sewers, and Drainage in Urban Developments.',
        'Project and Design of Potable Water (cold and hot) and Sanitary Installations in housing and buildings.',
        'Project and Structural Design of Swimming Pools with their respective suction and recirculation pipes.'
      ],
      imgUrls: []
    },
    {
      title: 'PERT-CPM Project Scheduling',
      preText: 'This service involves the preparation of:',
      body: [
        'A Project Timeline using the PERT-CPM method, which allows managing the project schedule (Program Evaluation and Review Technique) and identifying critical path activities (Critical Path Method), thereby determining the duration of the project.',
        'Investment Schedule.',
        'Cash Flow.',
      ],
      imgUrls: [cdi,cdd1,cdd2]
    },
    {
      title: 'Cost Estimation (Unit Price Analysis)',
      preText: 'This service involves the preparation of:',
      body: ['A mathematical model that forecasts the outcome, expressed in currency, of a situation related to the activity under study.'],
      imgUrls: []
    },
    {
      title: 'Preparation of Project Budgets',
      preText: 'This service involves Estimating the Project Cost by compiling all activities indicated in the APU with their respective estimated quantities in the preparation of the Metric Computations. ',
      body: [],
      imgUrls: [apu]
    },
    {
      title: 'Preparation of Metric Computations',
      preText: 'This service involves determining the quantity of measurement of lengths, areas, volumes, weights, units, etc., requiring the use of geometric formulas. The responsibility of the person in charge of the computations is significant, as this work can result in losses or gains for owners or contractors. ',
      body: [],
      imgUrls: [ciet, cmp1, cmp2]
    },
    {
      title: 'Construction of Civil Works',
      preText: 'This service involves the Construction of Infrastructure and Superstructure Works in Roads and Buildings, Construction of Aqueducts, Sewers, and Drainage in Urban Developments, Construction of Potable Water and Sanitary Installations in Housing and Buildings, etc.',
      body: [],
      imgUrls: []
    },
    {
      title: 'Inspection of Civil Works',
      preText: 'This service involves the Inspection of Infrastructure and Superstructure Works in Roads and Buildings, Aqueducts, Sewers, and Drainage in Urban Developments, Potable Water, and Sanitary Installations in Housing and Buildings, etc. It also includes performing Quality Control of Concrete, Soil, and Asphalt.',
      body: [],
      imgUrls: []
    },
  ]

  //TODO: remove if pdf is not used
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

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
              <CustomTab />
            </div>
          </div>
        </div>
        <HR.Trimmed />
        <div>
          <div className='section-heading'>
            <span className="line"></span>
            <h1 className='section-title'> Services</h1>
            <span className="line"></span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginBottom: '2%', fontSize: '1.5vw' }}>
            <p>Explore What We Offer</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '0 10%' }}>
            <ServiceCard url={home} modal={DATA[0]} />
            <ServiceCard url={placeholder} modal={DATA[1]} />
            <ServiceCard url={placeholder} modal={DATA[2]} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '0 10%' }}>
            <ServiceCard url={placeholder} modal={DATA[3]} />
            <ServiceCard url={placeholder} modal={DATA[4]} />
            <ServiceCard url={placeholder} modal={DATA[5]} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 10%' }}>
            <div style={{ width: '33%' }}>
              <ServiceCard url={placeholder} modal={DATA[6]} />
            </div>
          </div>
          <div>
            {/* <Document file={pdf}>
              <Page pageNumber={1}/>
            </Document> */}
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
