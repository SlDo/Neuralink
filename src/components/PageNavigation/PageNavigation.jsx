import React from 'react';
import './style.scss';
import { Navigation } from '../Navigation/Navigation';

export function PageNavigation() {
  return (
    <Navigation list={[
      { label: 'Science', link: '/' },
      { label: 'Approach', link: '/' },
      { label: 'Applications', link: '/' },
      { label: 'About Us', link: '/' },
      { label: 'Careers', link: '/' },
    ]}
    />
  );
}
