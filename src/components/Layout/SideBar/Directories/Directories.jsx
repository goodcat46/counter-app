import React from 'react';
import ModalContent from 'components/ModalContent/ModalContent';
import { directories } from 'data';

import s from './Directories.module.scss';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

const Directories = () => {
  return (
    <>
      <div className={s.directories}>
        {directories.map(({ title, ModalChildren = () => null, modalChildrenProps = null, iconId, disabled }) => (
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

export default Directories;
