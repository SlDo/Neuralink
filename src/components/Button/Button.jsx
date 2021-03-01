import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const themes = {
  DEFAULT: 'default',
  LINK: 'link',
};

export function Button({
  type, label, to, icon: ButtonIcon, onClick,
}) {
  return type === themes.LINK
    ? (
      <Link className='button' to={to} data-theme={type}>
        { label }
        { ButtonIcon && <ButtonIcon className='button__icon' /> }
      </Link>
    )
    : (
      <button onClick={onClick} type='button' className='button' data-theme={type}>
        { label }
        { ButtonIcon && <ButtonIcon className='button__icon' /> }
      </button>
    );
}

Button.propTypes = {
  type: PropTypes.oneOf([themes.LINK]),
  label: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.shape,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  to: '/',
  label: null,
  type: themes.DEFAULT,
  icon: null,
  onClick: undefined,
};
