import { Button } from '@mui/material';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import CreateTransactionComp from 'components/CreateTransactionComp/CreateTransactionComp';
import ModalContent from 'components/ModalContent/ModalContent';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import React from 'react';
import { iconId } from 'data';

import s from './TableActions.module.scss';

const TableActions = () => {
  const leftSideActions = [
    {
      iconId: iconId.search,
      RenderItem: () => <div>Пошук</div>,
    },
    {
      iconId: iconId.filterOff,
      RenderItem: () => <div>Фільтрація</div>,
    },
  ];
  const rightSideActions = [
    {
      iconId: iconId.plus,
      RenderItem: CreateTransactionComp,
    },
    {
      iconId: iconId.copy,
      RenderItem: FormTransaction,
      renderItemProps: {
        onCopyTransaction: data => {
          console.log(data);
        },
        data: { _id: '' },
      },
    },
    {
      iconId: iconId.edit,
      RenderItem: FormTransaction,
      renderItemProps: {
        onEditTransaction: data => {
          console.log(data);
        },
        data: { _id: '' },
      },
    },
    {
      iconId: iconId.delete,
    },
  ];
  return (
    <>
      <div className={[s.container, 'theme'].join(' ')}>
        <div className={s.actions}>
          {leftSideActions.map(({ iconId, RenderItem = () => {}, renderItemProps = null }) => (
            <ModalContent
              key={iconId}
              trigger={props => (
                <Button size="small" variant="outlined" {...props}>
                  <SvgIcon {...{ iconId }} />
                </Button>
              )}
            >
              <RenderItem {...renderItemProps} />
            </ModalContent>
          ))}
        </div>
        <div className={s.actions}>
          {rightSideActions.map(({ iconId, RenderItem = () => {}, renderItemProps = null }) => (
            <ModalContent
              key={iconId}
              trigger={props => (
                <Button size="small" variant="outlined" {...props}>
                  <SvgIcon {...{ iconId }} />
                </Button>
              )}
            >
              <RenderItem {...renderItemProps} />
            </ModalContent>
          ))}
        </div>
      </div>
    </>
  );
};

export default TableActions;
