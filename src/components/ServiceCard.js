import React, { useState } from 'react';
import { Card, Button, Modal } from 'flowbite-react';
import ModalImage from 'react-modal-image';

import { useTranslation } from 'react-i18next';

const ServiceCard = ({ modal, manageNav }) => {
    const [openModal, setOpenModal] = useState(false);
    const { t } = useTranslation();
    return (
        <div className="container mx-auto p-4">
            <Modal size="4xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} dismissible show={openModal} onClose={() => {
                setOpenModal(!openModal) 
                modal.manageNav(false)
                }}>
                <Modal.Header>{modal.title}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {modal.preText}
                        </p>
                        {
                            modal.body.map((item, index) => {
                                return <p key={index} className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{item}</p>
                            })
                        }
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            {
                                modal.imgUrls.map((item, index) => {
                                    return <ModalImage key={index} small={item} className="Icon" large={item} alt={modal.title} />
                                })
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Card style={{ display: 'flex', alignContent: 'center' }}
                renderImage={() => <img style={{ width: '100vmin', height: '12vw' }} src={modal.imgMain} alt="section" />}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap max-w-full" style={{ fontSize: '1.1vw', textAlign: 'center' }}>
                    {modal.title}
                </h5>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <Button onClick={() => {
                        setOpenModal(!openModal)
                        modal.manageNav(true)
                    }} className='bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-300 whitespace-nowrap max-w-full'>{t('Learn more')}</Button>
                </div>
            </Card>
        </div>
    );
}

export default ServiceCard;