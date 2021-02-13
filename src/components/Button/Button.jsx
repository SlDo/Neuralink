import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const themes = {
  DEFAULT: 'default',
  LINK: 'link'
}

export function Button({ type, label, to }) {
  return type === themes.LINK
    ? <Link className='button' to={to} data-theme={ type }>
        { label }
        <svg className='button__icon' viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.144 -1L8.4035 0.412766L15.288 6.00087H0V7.99912H15.288L8.4035 13.5872L10.144 15L20 7L10.144 -1Z" fill="white"/>
        </svg>
    </Link>
    : <button className='button' data-theme={ type }>
        { label }
      </button>
}

Button.propTypes = {
  type: PropTypes.oneOf([themes.LINK]).isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
}

Button.defaultProps = {
  to: '/'
}
