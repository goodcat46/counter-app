import React from 'react';
import { addButtons, iconId } from 'data';
import ModalContent from 'components/ModalContent/ModalContent';

import s from './CreateActions.module.scss';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

const CreateActions = () => {
  return (
    <div className={s.createActions}>
      {addButtons.map(({ title, ModalChildren = null, modalChildrenProps = null, disabled }) => (
        <ModalContent
          key={title}
          trigger={props => (
            <ButtonIcon
              {...props}
              styleType="BrandClrBtn"
              iconSize="20px"
              className={s.wrapper}
              iconId={iconId.plus}
              disabled={disabled}
            >
              <span>{title}</span>
            </ButtonIcon>
          )}
        >
          <>{<ModalChildren {...modalChildrenProps} />}</>
        </ModalContent>
      ))}
    </div>
  );
};

export default CreateActions;
