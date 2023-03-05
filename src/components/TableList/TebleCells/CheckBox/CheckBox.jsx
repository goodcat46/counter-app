import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { iconId } from 'data';

import s from './CheckBox.module.scss';

const CheckBox = ({ onChange, id = '1', checked = false }) => {
  return (
    <label htmlFor={id} className={[s.ChekBox, checked && s.checked].join(' ')} onClick={onChange}>
      <input className="visually-hidden" id={id} type="checkbox" />

      <SvgIcon size="22px" iconId={checked ? iconId.checkBoxOn : iconId.checkBoxOff} />
    </label>
  );
};

export default CheckBox;
