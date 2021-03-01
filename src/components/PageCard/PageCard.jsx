import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export function PageCard({
  backgroundColor, title, src, linkLabel, linkTo,
}) {
  const [animProps, set] = useSpring(() => (
    { xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }
  ));

  return (
    <div className='page-card' style={{ backgroundColor }}>
      <Title type='h2' text={title} />
      <animated.img
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: animProps.xys.interpolate(trans) }}
        className='page-card__img'
        src={src}
        alt='page-image'
      />
      { linkLabel && <Button label={linkLabel} type='link' to={linkTo} /> }
    </div>
  );
}

PageCard.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  linkLabel: PropTypes.string,
  linkTo: PropTypes.string,
};

PageCard.defaultProps = {
  backgroundColor: 'var(--color-white)',
};

PageCard.defaultProps = {
  linkLabel: 'Link',
  linkTo: '/',
};
