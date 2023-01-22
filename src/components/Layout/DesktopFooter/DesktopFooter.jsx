import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';
import s from './DesktopFooter.module.scss';

const DesktopFooter = () => {
  return (
    <MinTabletXl>
      <div className={[s.DesktopFooter, 'theme'].join(' ')}>
        <PrivateComponent>
          <div className={s.gridMenu}>
            <NavMenu />
          </div>
        </PrivateComponent>
      </div>
    </MinTabletXl>
  );
};

export default DesktopFooter;
