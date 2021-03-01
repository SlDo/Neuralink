import React from 'react';
import './style.scss';
import { Navigation } from '../Navigation/Navigation';

export function PageNavigation() {
  return (
    <Navigation list={[
      { label: 'Science', link: '/', id: 1 },
      { label: 'Approach', link: '/', id: 2 },
      { label: 'Applications', link: '/', id: 3 },
      { label: 'About Us', link: '/', id: 4 },
      { label: 'Careers', link: '/', id: 5 },
    ]}
    />
  );
}
