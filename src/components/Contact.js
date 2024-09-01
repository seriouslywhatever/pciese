import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Label, TextInput, Dropdown, Textarea } from "flowbite-react";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

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
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_API_PUBLIC_KEY,
            })
            .then(() => {
                setIsLoading(false);
                toast.success(t('SuccessMessage'));
            },
                (error) => {
                    setIsLoading(false);
                    toast.error(t('FailMessage'));
                },
            );
    };

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
        <div style={{ marginBottom: '5%' }}>
            <div className='Header' style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div style={{ flex: 3 }}>
                    {isLoading ?
                        <div style={{ position: 'absolute', top: '100%', right: '50%' }}>
                            <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                            </div>
                        </div> : <div />
                    }
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
                    <Toaster
                        position="bottom-center"
                        reverseOrder={false}
                    />
                    <form ref={form} className="flex flex-col gap-6 " style={{ width: '40vw' }} onSubmit={sendEmail}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="from_name" value={t('Full name')} />
                            </div>
                            <TextInput name="from_name" id="from_name" type='text' required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="from_email" value={t('Email')} />
                            </div>
                            <TextInput name="from_email" id="from_email" type='email' required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="from_phone" value={t('Phone')} />
                            </div>
                            <TextInput name="from_phone" id="from_phone" type='tel' />
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="message" value={t('Message')} />
                        </div>
                        <Textarea name="message" id="message" placeholder={t('Placeholder comment')} required rows={4} />
                        <Button className='bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-300' type="submit">{t('Submit')}</Button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;