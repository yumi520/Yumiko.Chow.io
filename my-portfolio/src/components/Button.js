import React from 'react';
import '../stylesheet/Button.css';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function Button ({ onClick, href, children, type, className, to }) {
    if (href) {
        return(
        <a href={href} className={`button ${className}`} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
        );
    } else if (to) {
        return(
            <RouterLink to={to} className={`button ${className}`}>
                {children}
            </RouterLink>
        );
    
    } else {
        return(
        <button  className={`button ${className}`} type={type}>
            {children}
        </button>
        );
    }

}


Button.propTypes = {
    onClick: PropTypes.func, // Optional click handler for button elements
    href: PropTypes.string, // Optional URL for anchor elements
    children: PropTypes.node.isRequired, // The content inside the button (e.g., text)
    type: PropTypes.string, // The button type (e.g., 'button', 'submit')
    className: PropTypes.string, // Additional CSS classes for styling
  };
  

  Button.defaultProps = {
    onClick: null,
    href: null,
    type: 'button',
    className: '',
  };

export default Button;