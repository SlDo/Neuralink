import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export function Group({ children, oriented, className }) {
  return (
    <div className={`group ${className ? className : ''}`} data-oriented={oriented}>
      { children }
    </div>
  )
}

Group.propTypes = {
  oriented: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
