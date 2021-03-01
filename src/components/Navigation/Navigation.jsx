import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';

export function Navigation({ list }) {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        { list.map(({ link, label, id }) => (
          <li className='navigation__link' key={id}>
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
    id: PropTypes.number,
  })).isRequired,
};
