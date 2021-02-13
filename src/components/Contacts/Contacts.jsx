import React from 'react';
import './style.scss';

export function Contacts() {
  return (
    <div className='contacts'>
      <a className='outside-link' href='mailto:info@neuralink.com'>info@neuralink.com</a>
      <a className='outside-link' href='http://twitter.com'>@neuralink</a>
    </div>
  )
}
