import React from 'react';
// import NavMenu from '../NavMenu/NavMenu';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
// import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';

import { Button } from '@mui/material';
import { useSideBar } from '../SideBar/SideBar';

import s from './DesktopFooter.module.scss';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { iconId } from 'data';

const DesktopFooter = ({ children }) => {
  const sideBar = useSideBar();

  return (
    <div className={[s.DesktopFooter, 'theme'].join(' ')}>
      <div className={s.wrapper}>
        <PrivateComponent>
          <div id="footer">{children}</div>
        </PrivateComponent>

        <Button variant="text" size="small" onClick={() => sideBar.handleToggleSideBar()}>
          <div className={s.btnInner}>
            <SvgIcon iconId={iconId.arrowDown} size="24px" svgClass={s.svg} />
            <span style={{ margin: 'auto 8px' }}>{'Відкрити меню'}</span>
          </div>
        </Button>
      </div>
      <div className={s.gridMenu}>{/* <NavMenu /> */}</div>
    </div>
  );
};

export default DesktopFooter;
