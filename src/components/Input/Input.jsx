import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import './style.scss';

export function Input({ type }) {
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState('');
  const animPlaceholder = useSpring({
    top: focus || text.length > 0 ? '-2%' : '50%',
    fontSize: focus || text.length > 0 ? '0.8rem' : '1rem'
  })

  const toggleFocus = (e) => {
    if (e.type === 'blur') return setFocus(false);

    setFocus(true);
  }

  return (
    <label className='label'>
      <animated.span className='placeholder' style={animPlaceholder}>Enter email</animated.span>
      <input value={text} onInput={(e) => setText(e.target.value)} className='input' onFocus={toggleFocus} onBlur={toggleFocus} type={type}/>
      <svg className='input__button' viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.81016 12.8243H8.89016L15.1622 6.55227L8.89016 0.280273H6.81016L12.3302 5.78427H0.410156V7.32027H12.3302L6.81016 12.8243Z" fill="#858585"/>
      </svg>
    </label>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired
}
