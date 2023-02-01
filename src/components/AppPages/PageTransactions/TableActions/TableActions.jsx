import { Button } from '@mui/material';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import ModalContent from 'components/ModalContent/ModalContent';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import React from 'react';
import { iconId } from 'data';

import s from './TableActions.module.scss';

const TableActions = ({ selectedTr }) => {
  const actions = [
    {
      iconId: iconId.plus,
      RenderItem: FormTransaction,
      renderItemProps: {},
    },
    {
      iconId: iconId.copy,
      RenderItem: FormTransaction,
      renderItemProps: {},
    },
    {
      iconId: iconId.edit,
      RenderItem: FormTransaction,
      renderItemProps: {},
    },
    {
      iconId: iconId.delete,
    },
  ];
  return (
    <fieldset className={s.actions}>
      {actions.map(({ iconId, RenderItem = () => {}, renderItemProps = null }) => (
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
    </fieldset>
  );
};

export default TableActions;
