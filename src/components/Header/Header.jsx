import React from 'react';
import './style.scss';
import {Logo} from '../Logo/Logo';
import {Navigation} from '../Navigation/Navigation';
import {PageNavigation} from '../PageNavigation/PageNavigation';

export function Header() {
  return (
    <header className='header'>
      <Logo />
      <PageNavigation />
    </header>
  )
}
