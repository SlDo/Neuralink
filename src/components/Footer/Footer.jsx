import React from 'react';
import './style.scss';
import {Logo} from '../Logo/Logo';
import {PageNavigation} from '../PageNavigation/PageNavigation';
import {Contacts} from '../Contacts/Contacts';
import {Input} from '../Input/Input';
import {Group} from '../Group/Group';

export function Footer() {
  return (
    <footer className='footer'>
      <Logo color='var(--color-grey)' />
      <p className='copyright'>
        © NEURALINK 2021 <br/>
        ALL RIGHTS RESERVED.
      </p>
      <PageNavigation />
      <Group className='contact' oriented='vertical'>
        <Contacts />
        <Input type='text' />
      </Group>
    </footer>
  )
}
