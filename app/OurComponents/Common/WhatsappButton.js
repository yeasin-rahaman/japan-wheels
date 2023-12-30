import Image from 'next/image';
import React from 'react';
import whatsappIcon from './../../../public/images/icon/whatsapp.webp'
const WhatsappButton = () => {
    return (
        <>
            <a href="https://wa.me/+8801675440454" target="_blank">
                <button className='btn-shadow' id='fixedbutton'>
                    <Image
                        className="img-fluid"
                        src={whatsappIcon}
                        alt="header-logo2.svg"
                    />
                </button>
            </a>
        </>
    );
};

export default WhatsappButton;