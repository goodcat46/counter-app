import React from 'react';
import { Button } from '@mui/material';
import ModalContent from 'components/ModalContent/ModalContent';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { raports } from 'data';

import s from './Raports.module.scss';

const Raports = () => {
  return (
    <>
      <div className={s.raports}>
        {raports.map(({ title, ModalChildren = null, modalChildrenProps = null, iconId }) => (
          <ModalContent
            key={title}
            trigger={props => (
              <Button variant="contained" size="small" {...props}>
                <div className={s.btnInner}>
                  <SvgIcon {...{ iconId }} size="18px" />
                  <span>{title}</span>
                </div>
              </Button>
            )}
          >
            <>{<ModalChildren {...modalChildrenProps} />}</>
          </ModalContent>
        ))}
      </div>
    </>
  );
};

export default Raports;
