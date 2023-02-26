import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { organizations } from 'data';
import { iconId } from 'data';
import React, { useEffect, useState } from 'react';

import s from './SelectOrganization.module.scss';

const SelectOrganization = ({ onTop, onBottom }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(organizations[0]);

  function handleOpenSelect() {
    setIsOpen(!isOpen);
  }
  function onNavLinkClick(item) {
    setActivePage(item);

    handleOpenSelect();
  }
  useEffect(() => {
    function onMenuClose(ev) {
      const { target, code } = ev;
      if (!target.closest('[data-org-menu]')) setIsOpen(false);
      if (code === 'Escape') setIsOpen(false);
    }
    window.addEventListener('click', onMenuClose);
    window.addEventListener('keydown', onMenuClose);

    return () => {
      window.removeEventListener('click', onMenuClose);
      window.removeEventListener('keydown', onMenuClose);
    };
  }, []);

  return (
    <div className={[s.navMenu, isOpen && s.isOpen].join(' ')} data-org-menu>
      <div className={s.container}>
        <ButtonIcon
          className={s.navMenuBnt}
          endIconId={iconId.arrowDown}
          endIconClassName={s.svgIcon}
          onClick={handleOpenSelect}
        >
          {activePage?.title}
        </ButtonIcon>

        <div className={s.navList}>
          {organizations.map(item => {
            return (
              <ButtonIcon
                key={item?.taxCode}
                onClick={() => {
                  onNavLinkClick(item);
                }}
              >
                <div className={s.wrapper}>
                  <div className={s.title}>{item?.title || 'Company name'}</div>
                  <div className={s.companyId}>{item?.taxCode || '000000000000'}</div>
                </div>
              </ButtonIcon>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectOrganization;
