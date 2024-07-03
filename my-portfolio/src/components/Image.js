import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../stylesheet/Image.css';
import Modal from './Modal.js';

function Images({ src = '', className = '', alt = '', caption = '', title=''}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <img src={src} className={className} alt={alt} onClick={openModal} />
            {isModalOpen && <Modal src={src} className={className} alt={alt} onClose={closeModal} caption={caption} title={title}/>}
        </div>
    );
}

Images.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
};

export default Images;
