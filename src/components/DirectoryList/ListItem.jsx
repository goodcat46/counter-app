import ButtonIcon, { ButtonIconVariants } from 'components/ButtonIcon/ButtonIcon';
import FormCreateCount from 'components/Forms/FormCreateCount';
import { useModalProvider } from 'components/ModalProvider/ModalProvider';
import { iconId } from 'data';
import React, { useState } from 'react';
import styled from 'styled-components';

const ListItem = ({ _id, name, isLast }) => {
  const modal = useModalProvider();
  // console.log(modal.handleOpenModal);ModalChildren,
  // modalChildrenProps,
  // settings
  const [isOpen, setIsOpen] = useState(false);

  function onOpenClick() {
    setIsOpen(prev => !prev);
  }

  return (
    <Item>
      <ItemBox>
        {isLast ? (
          <ButtonIcon
            size="26px"
            iconId={iconId.plus}
            variant={ButtonIconVariants.filled}
            onClick={ev => {
              modal.handleOpenModal({ ModalChildren: FormCreateCount });
            }}
          />
        ) : (
          <ItemNull></ItemNull>
        )}
        <ItemInner>
          <ItemName>{name}</ItemName>

          <InfoBox>{/* <ButtonIcon size="26px" iconId={iconId.info} /> */}</InfoBox>

          <ButtonIcon
            size="26px"
            iconSize="22px"
            iconId={iconId.SmallArrowLeft}
            variant={ButtonIconVariants.onlyText}
            iconStyles={{ transform: `rotate(${isOpen ? -90 : 0}deg)` }}
            onClick={onOpenClick}
          />
        </ItemInner>

        <ButtonIcon iconId={iconId.edit} variant={ButtonIconVariants.onlyText} />
        <ButtonIcon iconId={iconId.delete} variant={ButtonIconVariants.onlyText} />
      </ItemBox>

      {/* <INNER_LIST></INNER_LIST> */}
    </Item>
  );
};

const Item = styled.li`
  max-width: 100%;
  width: 100%;

  /* color: ${({ isLast }) => {}}; */
`;
const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 26px 1fr 26px 26px;
  gap: 8px;

  height: 26px;
  max-width: 100%;
  width: 100%;
`;
const ItemInner = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  overflow: hidden;

  border-radius: 2px;
  background: rgba(255, 255, 255, 0.05);
`;
const ItemNull = styled.div`
  width: 100%;
`;
const ItemName = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;

  padding: 0 8px;

  font-size: 12px;
  line-height: 1.33;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const InfoBox = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;
export default ListItem;
