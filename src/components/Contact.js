import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Label, TextInput, Dropdown, Textarea } from "flowbite-react";

import '../App.css';
import en from '../images/en.png';
import sp from '../images/sp.png';
import dropdown from '../images/dropdown.png';
import logo from '../images/Logo_white.png';
import phone from '../images/phone.png';
import location from '../images/location.png';

import banner from '../images/banner_image.jpg';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const [langImg, setLangImg] = useState(i18n.language);

    useEffect(() => {

        switch (i18n.language) {
            case "en": setLangImg(en);
                break;
            case "es": setLangImg(sp);
                break;
            default: setLangImg(en);
        }
    });

    return (
        <div style={{marginBottom:'5%'}}>
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
            <div style={{ flexDirection: 'row', display: 'flex', position: 'sticky', top: 0, zIndex: 1000 }}>
                <div style={{ flex: 8 }}>
                    <nav className="nav">
                        <ul className="nav-links">
                            <li><Link to="/">{t('Home')}</Link></li>
                            <li><Link to="/" style={{ pointerEvents: 'none', color: 'gray' }}>{t('About Us')}</Link></li>
                            <li><Link to="/" style={{ pointerEvents: 'none', color: 'gray' }}>{t('Services')}</Link></li>
                            <li><Link to="/contact">{t('Contact Us')}</Link></li>
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
            <div>
                <img src={banner} alt='contact' style={{ height: '35vh', width: '100%', objectFit: 'cover' }} />
                <div className='section-heading'>
                    <span className="line"></span>
                    <h1 className='section-title'>{t('Contact Us')}</h1>
                    <span className="line"></span>
                </div>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                        <form className="flex flex-col gap-6 " style={{ width:'40vw'}}>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name1" value={t('Full name')}/>
                                </div>
                                <TextInput id="name1" type='text' required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" value={t('Email')} />
                                </div>
                                <TextInput id="email1" type='email' required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="phone" value={t('Phone')}/>
                                </div>
                                <TextInput id="phone" type='tel' />
                            </div>
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value={t('Message')} />
                            </div>
                            <Textarea id="comment" placeholder={t('Placeholder comment')} required rows={4} />
                            <Button className='bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-300' type="submit">Submit</Button>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;