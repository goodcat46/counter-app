import React from 'react';
// import NavMenu from '../NavMenu/NavMenu';
import PrivateComponent from 'components/PrivateComponent/PrivateComponent';
// import { MinTabletXl } from 'components/DeviceTypeInformer/DeviceTypeController';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { addButtons } from 'data';
import { Button } from '@mui/material';
import ModalContent from 'components/ModalContent/ModalContent';

import s from './DesktopFooter.module.scss';

const DesktopFooter = () => {
  return (
    <div className={[s.DesktopFooter, 'theme'].join(' ')}>
      <PrivateComponent>
        <div className={s.wrapper}>
          {addButtons.map(({ title, ModalChildren = null, modalChildrenProps = null }) => (
            <ModalContent
              key={title}
              trigger={props => (
                <Button variant="contained" size="small" {...props}>
                  <SvgIcon iconId="plus" />
                  <span style={{ margin: 'auto 8px' }}>{title}</span>
                </Button>
              )}
            >
              <>{<ModalChildren {...modalChildrenProps} />}</>
            </ModalContent>
          ))}
        </div>
        <div className={s.gridMenu}>{/* <NavMenu /> */}</div>
      </PrivateComponent>
    </div>
  );
};

export default DesktopFooter;
