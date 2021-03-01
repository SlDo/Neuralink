import React from 'react';
import './style.scss';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';

export function FutureBlock() {
  return (
    <section className='future'>
      <div className='future__block'>
        <Title type='h2' text={'Create the \n Future with Us'} />
        <p className='text'>
          Every day we’re building better tools for communicating with the brain.
          With the right team, the applications for this technology are limitless.
        </p>
        <Button label='Reach Out' type='link' />
      </div>
    </section>
  );
}
