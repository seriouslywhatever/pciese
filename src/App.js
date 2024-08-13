import React, { useState } from 'react';

import en from './images/en.png';
import sp from './images/sp.png';
import dropdown from './images/dropdown.png';
import logo from './images/logo_transparent.png';
import phone from './images/phone.png';
import location from './images/location.png';
import home from './images/home_background.jpg';
import ServiceCard from './components/ServiceCard';
import pdf from './images/cronograma_de_inversion.pdf';

import { useTranslation } from 'react-i18next';

//Section Main
import section1 from './images/services/section_main/section_image_1.jpg';
import section2 from './images/services/section_main/section_image_2.jpg';
import section3 from './images/services/section_main/section_image_3.jpg';
import section4 from './images/services/section_main/section_image_4.jpg';
import section5 from './images/services/section_main/section_image_5.jpg';

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
import { HR, Dropdown } from "flowbite-react";
import { Document, Page, pdfjs } from 'react-pdf';

import './App.css';

function App() {

  const { t, i18n } = useTranslation();
  const [langImg, setLangImg] = useState(en);
  const DATA = [
    {
      title: `${t('Service card 1 title')}`,
      preText: `${t('Service card 1 preText')}`,
      body: [
        `${t('Service card 1 body 1')}`,
        `${t('Service card 1 body 2')}`,
        `${t('Service card 1 body 3')}`,
        `${t('Service card 1 body 4')}`,
        `${t('Service card 1 body 5')}`,
      ],
      imgMain: section4,
      imgUrls: []
    },
    {
      title: `${t('Service card 2 title')}`,
      preText: `${t('Service card 2 preText')}`,
      body: [
        `${t('Service card 2 body 1')}`,
      ],
      imgMain: section1,
      imgUrls: []
    },
    {
      title: `${t('Service card 3 title')}`,
      preText: `${t('Service card 3 preText')}`,
      body: [],
      imgMain: section2,
      imgUrls: [apu]
    },
    {
      title: `${t('Service card 4 title')}`,
      preText: `${t('Service card 4 preText')}`,
      body: [],
      imgMain: section5,
      imgUrls: [ciet, cmp1, cmp2]
    },
    {
      title: `${t('Service card 5 title')}`,
      preText: `${t('Service card 5 preText')}`,
      body: [
        `${t('Service card 5 body 1')}`,
        `${t('Service card 5 body 2')}`,
        `${t('Service card 5 body 3')}`
      ],
      imgMain: section3,
      imgUrls: [cdi, cdd1, cdd2]
    },
    {
      title: `${t('Service card 6 title')}`,
      preText: `${t('Service card 6 preText')}`,
      body: [],
      imgMain: home,
      imgUrls: []
    },
    // {
    //   title: 'Inspection of Civil Works',
    //   preText: 'This service involves the Inspection of Infrastructure and Superstructure Works in Roads and Buildings, Aqueducts, Sewers, and Drainage in Urban Developments, Potable Water, and Sanitary Installations in Housing and Buildings, etc. It also includes performing Quality Control of Concrete, Soil, and Asphalt.',
    //   body: [],
    //   imgMain: placeholder,
    //   imgUrls: []
    // },
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
                <p className='Icon-label'>{t('Call us')}<span>+297-592-3348</span></p>
              </div>
            </div>
            <div className='Header-item-container'>
              <img src={location} className="Icon" alt='location icon' />
              <div>
                <p className='Icon-label'>{t('Location')} <span style={{ width: '20vw' }}>Kamerling Onnestraat 8, Oranjestad Aruba</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <div style={{ flex: 8 }}>
          <nav className="nav">
            <ul className="nav-links">
              <li><a href="#">{t('Home')}</a></li>
              <li><a href="#section_about_us">{t('About Us')}</a></li>
              <li><a href="#section_services">{t('Services')}</a></li>
              <li><a href="#">{t('Contact Us')}</a></li>
            </ul>
          </nav>
        </div>
        <div style={{ display: 'flex', backgroundColor: '#1e429f', flex: 1 }}>
          <Dropdown dismissOnClick={true} renderTrigger={() =>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1vh' }}>
              <img src={langImg} style={{ width: '2.5vw', height: '5vh' }} alt="logo" />
              <img src={dropdown} style={{ width: '2vw', height: '5vh' }} alt="logo" />
            </div>
          } size="sm" >
            <Dropdown.Item onClick={() => {
              i18n.changeLanguage("en");
              setLangImg(en);
            }}>{t('English')}</Dropdown.Item>
            <Dropdown.Item onClick={() => {
              i18n.changeLanguage("es");
              setLangImg(sp);
            }}>{t('Spanish')}</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <img src={home} alt='main image' style={{ height: '100vh', width: '100%' }} />
      <div>
        <div>
          <div className='section-heading' id='section_about_us'>
            <span className="line"></span>
            <h1 className='section-title'>{t('About Us')}</h1>
            <span className="line"></span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', fontStyle: 'italic', marginBottom: '2%' }}>
            <p>{t('Testimonial part 1')} <br /> {t('Testimonial part 2')}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '55vw' }}>
              <p>
                {t('About part 1')}<br /> {t('About part 2')} </p>
              <br />
              <CustomTab />
            </div>
          </div>
        </div>
        <HR.Trimmed />
        <div>
          <div className='section-heading' id='section_services'>
            <span className="line"></span>
            <h1 className='section-title'>{t('Services')}</h1>
            <span className="line"></span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginBottom: '2%', fontSize: '1.5vw' }}>
            <p>{t('Service subtext')}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '0 10%' }}>
            <ServiceCard modal={DATA[0]} />
            <ServiceCard modal={DATA[1]} />
            <ServiceCard modal={DATA[2]} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '0 10%' }}>
            <ServiceCard modal={DATA[3]} />
            <ServiceCard modal={DATA[4]} />
            <ServiceCard modal={DATA[5]} />
          </div>
          {/* <div style={{ display: 'flex', justifyContent: 'center', margin: '0 10%' }}>
            <div style={{ width: '33%' }}>
              <ServiceCard modal={DATA[6]} />
            </div>
          </div> */}
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
