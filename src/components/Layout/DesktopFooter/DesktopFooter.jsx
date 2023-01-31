import React from 'react';
// import NavMenu from '../NavMenu/NavMenu';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
// import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';

import { Button } from '@mui/material';
import { useSideBar } from '../SideBar/SideBar';

import s from './DesktopFooter.module.scss';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { iconId } from 'data';

const DesktopFooter = () => {
  const navMenu = useSideBar();

  return (
    <div className={[s.DesktopFooter, 'theme'].join(' ')}>
      <PrivateComponent>
        <div className={s.wrapper}>
          <Button variant="text" size="small" onClick={() => navMenu.handleToggleSideBar()}>
            <div className={s.btnInner}>
              <SvgIcon iconId={iconId.arrowDown} size="24px" svgClass={s.svg} />
              <span style={{ margin: 'auto 8px' }}>{'Відкрити меню'}</span>
            </div>
          </Button>
        </div>
        <div className={s.gridMenu}>{/* <NavMenu /> */}</div>
      </PrivateComponent>
    </div>
  );
};

export default DesktopFooter;
