import React from 'react';
import ModalContent from 'components/ModalContent/ModalContent';
import { raports } from 'data';

import s from './Raports.module.scss';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

const Raports = () => {
  return (
    <>
      <div className={s.raports}>
        {raports.map(({ title, ModalChildren = null, modalChildrenProps = null, iconId, disabled }) => (
          <ModalContent
            key={title}
            trigger={props => (
              <ButtonIcon {...props} styleType="BrandClrBtn" className={s.wrapper} iconId={iconId} disabled={disabled}>
                <span>{title}</span>
              </ButtonIcon>
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
