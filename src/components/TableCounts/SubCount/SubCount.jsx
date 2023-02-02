import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import React, { useState } from 'react';

import s from './SubCount.module.scss';

const SubCount = ({ item }) => {
  const [isActionsShown, setActionsShown] = useState(false);
  function handkeActionsShown() {
    setActionsShown(!isActionsShown);
  }
  return (
    <div className={s.subCount}>
      <div className={s.info} onClick={handkeActionsShown}>
        <div className={s.cell}>{item?.name}</div>
        <div className={s.cell}>{item?.code}</div>
        <div className={s.cell}>{item?.type}</div>
      </div>

      <div className={[s.actions, isActionsShown && s.shown].join(' ')}>
        <ButtonIcon iconId={iconId.edit} iconSize="24px" />
        <ButtonIcon iconId={iconId.delete} iconSize="24px" />
      </div>
    </div>
  );
};

export default SubCount;
