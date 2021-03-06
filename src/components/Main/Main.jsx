import React from 'react';
import './style.scss';

import { useSpring } from 'react-spring';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';
import { Group } from '../Group/Group';
import { ReactComponent as LinkSVG } from '../../images/linkSvg.svg';

export function MainBlock() {
  const titleAnim = useSpring({
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-40px)' },
  });

  return (
    <section className='main'>
      <Title titleStyle={titleAnim} type='h1' text={'Breakthrough \n Technology \n for the Brain'} />
      <Group oriented='horizontal' className='main__more'>
        <Button icon={LinkSVG} label='Join the Team' type='link' to='/' />
        <Button icon={LinkSVG} label='Watch the update' type='link' to='/' />
      </Group>
    </section>
  );
}
