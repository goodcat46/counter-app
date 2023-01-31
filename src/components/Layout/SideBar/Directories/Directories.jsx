import { Button } from '@mui/material';
import ModalContent from 'components/ModalContent/ModalContent';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import React from 'react';
import { directories } from 'data';

import s from './Directories.module.scss';

const Directories = () => {
  return (
    <>
      <div className={s.directories}>
        {directories.map(({ title, ModalChildren = null, modalChildrenProps = null, iconId }) => (
          <ModalContent
            key={title}
            trigger={props => (
              <Button variant="contained" size="small" {...props}>
                <div className={s.wrapper}>
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

export default Directories;
