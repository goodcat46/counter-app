import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './CheckBox.module.scss';

const CheckBox = ({ onChange, id = '1' }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(ev) {
    const { target } = ev;

    typeof onChange === 'function' && onChange(ev);

    setIsChecked(!isChecked);

    console.log(target.id);
  }
  return (
    <label htmlFor={id} className={[s.ChekBoxHead, isChecked && s.checked].join(' ')} onChange={handleChange}>
      <input className="visually-hidden" id={id} type="checkbox" />
      <SvgIcon iconId={isChecked ? 'checkBoxOn' : 'checkBoxOff'} />
    </label>
  );
};

export default CheckBox;
