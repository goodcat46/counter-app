import React from 'react';
import { addButtons } from 'data';
import ModalContent from 'components/ModalContent/ModalContent';
import { Button } from '@mui/material';
import SvgIcon from 'components/SvgIcon/SvgIcon';

import s from './CreateActions.module.scss';

const CreateActions = () => {
  return (
    <div className={s.createActions}>
      {addButtons.map(({ title, ModalChildren = null, modalChildrenProps = null }) => (
        <ModalContent
          key={title}
          trigger={props => (
            <Button variant="contained" size="small" {...props}>
              <div className={s.wrapper}>
                <SvgIcon iconId="plus" />
                <span>{title}</span>
              </div>
            </Button>
          )}
        >
          <>{<ModalChildren {...modalChildrenProps} />}</>
        </ModalContent>
      ))}
    </div>
  );
};

export default CreateActions;
