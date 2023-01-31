import React from 'react';
// import NavMenu from '../NavMenu/NavMenu';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
// import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';

import { Button } from '@mui/material';
import { useSideBar } from '../SideBar/SideBar';

import s from './DesktopFooter.module.scss';

const DesktopFooter = () => {
  const navMenu = useSideBar();

  return (
    <div className={[s.DesktopFooter, 'theme'].join(' ')}>
      <PrivateComponent>
        <div className={s.wrapper}>
          <Button variant="contained" size="small" onClick={() => navMenu.handleToggleSideBar()}>
            <span style={{ margin: 'auto 8px' }}>{'Відкрити меню'}</span>
          </Button>
        </div>
        <div className={s.gridMenu}>{/* <NavMenu /> */}</div>
      </PrivateComponent>
    </div>
  );
};

export default DesktopFooter;
