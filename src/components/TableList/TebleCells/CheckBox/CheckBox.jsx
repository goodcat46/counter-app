import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { iconId } from 'data';

import s from './CheckBox.module.scss';

const CheckBox = ({ onChange, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(ev) {
    console.log(id, '========', ev);

    setIsChecked(!isChecked);

    onChange && onChange(ev);
  }

  return (
    <label htmlFor={id} className={[s.ChekBoxHead, isChecked && s.checked].join(' ')} onClick={handleChange}>
      <input className="visually-hidden" id={id} type="checkbox" onChange={handleChange} />

      <SvgIcon size="24px" iconId={isChecked ? iconId.checkBoxOn : iconId.checkBoxOff} />
    </label>
  );
};

export default CheckBox;
