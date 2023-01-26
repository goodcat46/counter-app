import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './CheckBoxHead.module.scss';

const CheckBoxHead = ({ onChange }) => {
  // const [status, setStatus] = useState('checkBoxMinus');
  const [some, setSome] = useState(false);
  const [everyOn, setEveryOn] = useState(false);
  const [everyOff, setEveryOff] = useState(true);

  // const statusMap = {
  //   checkBoxOn: 'checkBoxOn',
  //   checkBoxOff: 'checkBoxOff',
  //   checkBoxMinus: 'checkBoxMinus',
  // };

  function handleChange(ev) {
    typeof onChange === 'function' && onChange(ev);

    setSome(false);

    setEveryOn(!everyOn);

    setEveryOff(!everyOff);
  }

  return (
    <label htmlFor="checkboxHead" className={[s.ChekBoxHead, (some && s.checked) || (everyOn && s.checked)].join(' ')} onChange={handleChange}>
      <input className="visually-hidden" id="checkboxHead" type="checkbox" />
      <SvgIcon size="100%" iconId={(everyOn && 'checkBoxOn') || (some && 'checkBoxMinus') || (everyOff && 'checkBoxOff')} />
    </label>
  );
};

export default CheckBoxHead;
