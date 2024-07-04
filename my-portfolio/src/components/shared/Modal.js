import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheet/Image.css';

function Modal({ src, alt, caption, title, onClose }) {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={src} alt={alt} />
                {title && <div className="title">{title}</div>}
                {caption && <div className="caption">{caption}</div>}
            </div>
        </div>
    );
}

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    caption: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default Modal;


// import React from 'react';
// import PropTypes from 'prop-types';
// import '../stylesheet/Image.css';

// function Modal({ src = '', className = '', alt = '', onClose }) {
//     return (
//         <div id="myModal" className="modal" onClick={onClose}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                 <span className="close" onClick={onClose}>&times;</span>
//                 <img src={src} className={`modal-image ${className}`} alt={alt} />
//                 <p className="art-description">hi</p>
//             </div>
//         </div>
//     );
// }

// Modal.propTypes = {
//     src: PropTypes.string,
//     className: PropTypes.string,
//     alt: PropTypes.string,
//     onClose: PropTypes.func.isRequired,
// };

// export default Modal;
