import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import ServiceCardM from './ServiceCardM';
import CustomTab from './CustomTab';
import { HR, Dropdown } from "flowbite-react";
import { BrowserView, MobileView, isBrowser } from 'react-device-detect';
// import { Document, Page, pdfjs } from 'react-pdf';

import '../App.css';

import en from '../images/en.png';
import sp from '../images/sp.png';
import dropdown from '../images/dropdown.png';
import logo from '../images/Logo_white.png';
import phone from '../images/phone.png';
import location from '../images/location.png';
import home from '../images/home_background.jpg';
// import pdf from '../images/cronograma_de_inversion.pdf';

//Section Main
import section1 from '../images/services/section_main/section_image_1.jpg';
import section2 from '../images/services/section_main/section_image_2.jpg';
import section3 from '../images/services/section_main/section_image_3.jpg';
import section4 from '../images/services/section_main/section_image_4.jpg';
import section5 from '../images/services/section_main/section_image_5.jpg';

//PERT-CPM
import cdi from '../images/services/cronograma_de_inversion.png';
import cdd1 from '../images/services/cronograma_de_desembolso_part_1.png';
import cdd2 from '../images/services/cronograma_de_desembolso_part_2.png';

//Prep Project Budget
import apu from '../images/services/apu.png';

//Prep Metric Computation
import ciet from '../images/services/cabilla_infra_east_tower.png'
import cmp1 from '../images/services/computos_metricos_part_1.png';
import cmp2 from '../images/services/computos_metricos_part_2.png';


const Home = () => {
    const { t, i18n } = useTranslation();
    const [langImg, setLangImg] = useState();

    const [navStyle, setNavStyle] = useState({
        flexDirection: 'row',
        display: 'flex',
        position: 'sticky',
        top: 0,
        zIndex: 1000
    });

    // makes it so the navigation bar is not present when ServiceCard modal is opened.
    const manageNav = (bool) => {
        if (bool) {
            setNavStyle((prevStyle) => ({
                ...prevStyle,
                // zIndex: 0,
                position: 'relative'
            }));
        } else {
            setNavStyle((prevStyle) => ({
                ...prevStyle,
                // zIndex: 1000
                position: 'sticky'
            }));
        }
    };

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
            imgUrls: [],
            manageNav: manageNav
        },
        {
            title: `${t('Service card 2 title')}`,
            preText: `${t('Service card 2 preText')}`,
            body: [
                `${t('Service card 2 body 1')}`,
            ],
            imgMain: section1,
            imgUrls: [],
            manageNav: manageNav
        },
        {
            title: `${t('Service card 3 title')}`,
            preText: `${t('Service card 3 preText')}`,
            body: [],
            imgMain: section2,
            imgUrls: [apu],
            manageNav: manageNav
        },
        {
            title: `${t('Service card 4 title')}`,
            preText: `${t('Service card 4 preText')}`,
            body: [],
            imgMain: section5,
            imgUrls: [ciet, cmp1, cmp2],
            manageNav: manageNav
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
            imgUrls: [cdi, cdd1, cdd2],
            manageNav: manageNav
        },
        {
            title: `${t('Service card 6 title')}`,
            preText: `${t('Service card 6 preText')}`,
            body: [],
            imgMain: home,
            imgUrls: [],
            manageNav: manageNav
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
    // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    //     'pdfjs-dist/build/pdf.worker.min.mjs',
    //     import.meta.url,
    // ).toString();

    useEffect(() => {

        switch (i18n.language) {
            case "en":
                setLangImg(en);
                localStorage.setItem("lang", "en");
                break;
            case "es":
                setLangImg(sp);
                localStorage.setItem("lang", "es");
                break;
            default:
                let lang = localStorage.getItem("lang");
                if (lang) {
                    i18n.changeLanguage(lang);
                } else {
                    localStorage.setItem("lang", "en");
                    i18n.changeLanguage("en");
                }
        }
    });

    return (
        <div className="App">
            <div className='Header' style={{ display: 'flex', flexDirection: 'row', height: isBrowser ? '18vh' : '10vh' }}>
                <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div style={{ flex: 3 }}>
                    <BrowserView>
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
                    </BrowserView>
                    <MobileView>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='Header-item-container' style={{ marginBlock: '2.5%' }}>
                                <div style={{ alignContent: 'center', marginRight: '2%' }}>
                                    <img src={phone} className="Icon" alt='phone icon' />
                                </div>
                                <div>
                                    <p className='Icon-label' style={{ marginInline: '0%' }}>{t('Call us')}<span style={{ fontSize: '2vw', width: '100%' }}>+297-592-3348</span></p>
                                </div>
                            </div>
                            <div className='Header-item-container'>
                                <img src={location} className="Icon" alt='location icon' />
                                <div>
                                    <p className='Icon-label'>{t('Location')} <span style={{ fontSize: '2vw', width: '100%' }}>Kamerling Onnestraat 8, Oranjestad Aruba</span></p>
                                </div>
                            </div>
                        </div>
                    </MobileView>
                </div>
            </div>
            <div style={navStyle}>
                <div style={{ flex: isBrowser ? 8 : 6 }}>
                    <nav className="nav">
                        <ul className="nav-links">
                            <li><a style={{ fontSize: isBrowser ? '1.1vw' : '2.8vw' }} href="#top">{t('Home')}</a></li>
                            <li><a style={{ fontSize: isBrowser ? '1.1vw' : '2.8vw' }} href="#section_about_us">{t('About Us')}</a></li>
                            <li><a style={{ fontSize: isBrowser ? '1.1vw' : '2.8vw' }} href="#section_services">{t('Services')}</a></li>
                            <li><Link style={{ fontSize: isBrowser ? '1.1vw' : '2.8vw' }} to="/contact">{t('Contact Us')}</Link></li>
                        </ul>
                    </nav>
                </div>
                <div style={{ display: 'flex', backgroundColor: '#1e429f', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Dropdown dismissOnClick={true} renderTrigger={() =>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <img src={langImg} style={{ width: isBrowser ? '2.5vw' : '7vw', height: isBrowser ? '5vh' : '6vh' }} alt="logo" />
                            <img src={dropdown} style={{ width: isBrowser ? '2vw' : '5vw', height: isBrowser ? '5vh' : '6vh' }} alt="logo" />
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
            <BrowserView>
                <div style={{ position: 'absolute', top: '28vh', right: '2vw' }}>
                    <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}
                  &q=PCI+Easy+Solutions,Oranjestad+Aruba&zoom=17`} style={{ width: '30vw', height: '50vh' }} loading='lazy' ></iframe>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{ position: 'absolute', top: '18vh', right: '2vw' }}>
                    <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}
                  &q=PCI+Easy+Solutions,Oranjestad+Aruba&zoom=16`} style={{ width: '50vw', height: '30vh' }} loading='lazy' ></iframe>
                </div>
            </MobileView>
            <img src={home} alt='main' style={{ height: isBrowser ? '100vh' : '50vh', width: '100%' }} />
            <div>
                <div>
                    <HR.Trimmed id='section_about_us' />
                    <div className='section-heading'>
                        <span className="line"></span>
                        <h1 className='section-title' style={{ fontSize: isBrowser ? '2.2vw' : '6vw' }}>{t('About Us')}</h1>
                        <span className="line"></span>
                    </div>
                    <BrowserView>
                        <div style={{ display: 'flex', justifyContent: 'center', fontStyle: 'italic', marginBottom: '2%' }}>
                            <p>{t('Testimonial part 1')} <br /> {t('Testimonial part 2')}</p>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div style={{ display: 'flex', justifyContent: 'center', fontStyle: 'italic', marginBottom: '2%', marginInline: '10%' }}>
                            <p style={{ fontSize: '3.5vw' }}>{t('Testimonial part 1')}{t('Testimonial part 2')}</p>
                        </div>
                    </MobileView>
                    <BrowserView>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '55vw' }}>
                                <p>
                                    {t('About part 1')}<br /> {t('About part 2')} </p>
                                <br />
                                <CustomTab />
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '75vw' }}>
                                <p style={{ fontSize: '3.5vw' }}>
                                    {t('About part 1')}{t('About part 2')} </p>
                                <br />
                                <CustomTab />
                            </div>
                        </div>
                    </MobileView>
                </div>
                <HR.Trimmed id='section_services' />
                <div>
                    <div className='section-heading'>
                        <span className="line"></span>
                        <h1 className='section-title' style={{ fontSize: isBrowser ? '2.2vw' : '6vw' }}>{t('Services')}</h1>
                        <span className="line"></span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold', marginBottom: '2%', fontSize: isBrowser ? '1.5vw' : '4vw' }}>
                        <p>{t('Service subtext')}</p>
                    </div>
                    <BrowserView>
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
                    </BrowserView>
                    <MobileView>
                        <ServiceCardM modal={DATA[0]} />
                        <ServiceCardM modal={DATA[1]} />
                        <ServiceCardM modal={DATA[2]} />
                        <ServiceCardM modal={DATA[3]} />
                        <ServiceCardM modal={DATA[4]} />
                        <ServiceCardM modal={DATA[5]} />
                    </MobileView>
                </div>
            </div>
        </div>
    );
};

export default Home;