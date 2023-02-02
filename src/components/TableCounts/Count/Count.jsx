import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import React, { useState } from 'react';
import { iconId } from 'data';
import SubCount from '../SubCount/SubCount';
import s from './Count.module.scss';

const Count = ({ counts, count }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShownActions, setIsShownActions] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  function handleShowActions() {
    setIsShownActions(!isShownActions);
  }

  const subCounts = counts.filter(el => el.owner === count._id || el.owner?._id === count._id);
  return (
    <>
      <div className={[isOpen ? s.isOpenItem : s.isCloseItem]} open={subCounts?.length > 0}>
        <div className={s.count}>
          <ButtonIcon
            iconId={iconId.arrowDown}
            iconClassName={s.icon}
            size="44px"
            onClick={handleOpen}
            disabled={subCounts.length === 0}
          />

          <div className={s.info} onClick={handleShowActions}>
            <div className={s.cell} style={{ display: 'flex', flexDirection: 'column' }}>
              <span className={s.cellInner}>{`${count.name} / ${subCounts?.length}`}</span>
              {/* <span>{`${count._id}`}</span> */}
            </div>
            <div className={s.cell}>{`${count.code}`}</div>
            <div className={s.cell}>{`${count.type}`}</div>
          </div>
          <div className={[s.actions, isShownActions && s.shown].join(' ')}>
            <ButtonIcon iconId={iconId.edit} size="44px" iconSize="24px" />
            <ButtonIcon iconId={iconId.delete} size="44px" iconSize="24px" />
          </div>
        </div>

        <div className={s.counts}>
          <>{subCounts?.length > 0 && subCounts.map(item => <SubCount key={item?._id} {...{ item }} />)}</>
        </div>
      </div>
    </>
  );
};

export default Count;
