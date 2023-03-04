import React, { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './CheckBoxHead.module.scss';
import { iconId } from 'data';

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
    <label htmlFor="checkboxHead" className={[s.ChekBoxHead, !everyOff && s.checked].join(' ')}>
      <input className="visually-hidden" id="checkboxHead" type="checkbox" onChange={handleChange} />

      <SvgIcon
        size="24px"
        iconId={(everyOn && iconId.checkBoxOn) || (some && iconId.checkBoxMinus) || (everyOff && iconId.checkBoxOff)}
      />
    </label>
  );
};

export default CheckBoxHead;
