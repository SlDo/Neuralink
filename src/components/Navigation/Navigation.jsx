import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import { uuid } from '../../utils/uuid';

export function Navigation({ list }) {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        { list.map(({ link, label }) => (
          <li className='navigation__link' key={uuid()}>
            <Link className='link' to={link}>{ label }</Link>
          </li>
        )) }
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};
