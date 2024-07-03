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

//a mechanism that ensures that the passed value is of the correct datatype
Button.propTypes = {
    onClick: PropTypes.func,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    type: PropTypes.string, 
    className: PropTypes.string, 
  };
  

  //default values for props in case they are not passed from
  //the parent component
  Button.defaultProps = {
    onClick: null,
    href: null,
    type: 'button',
    className: '',
  };

export default Button;