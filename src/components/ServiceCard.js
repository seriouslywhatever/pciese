import React from 'react';
import { Card } from 'flowbite-react';

const ServiceCard = ({ title, url }) => {
    return (
        <div className="container mx-auto p-4">
            <Card style={{ display: 'flex', alignContent: 'center' }}
                renderImage={() => <img style={{width:'100vmin', height:'12vw'}} src={url} alt="image 1" />}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '1.2vw' }}>
                    {title}
                </h5>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <button style={{ padding: '8px', backgroundColor: '#0824a4', color: 'white', borderRadius: '12px', width: '12vw' }}>
                        Learn more
                    </button>
                </div>
            </Card>
        </div>
    );
}

export default ServiceCard;