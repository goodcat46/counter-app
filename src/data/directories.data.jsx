import CreatingList from 'components/CreatingList/CreatingList';
import ModalDefault from 'components/ModalDefault/ModalDefault';
import { iconId } from './iconId.data';

const directories = [
  {
    title: 'Рахунки',
    iconId: iconId.bank,
    ModalChildren: CreatingList,
    modalChildrenProps: { title: 'Рахунки' },
    disabled: false,
  },
  {
    title: 'Категорії',
    iconId: iconId.folder,
    ModalChildren: ModalDefault,
    modalChildrenProps: { title: 'Категорії' },
    disabled: true,
  },
  {
    title: 'Котракти',
    iconId: iconId.assignment,
    ModalChildren: ModalDefault,
    modalChildrenProps: { title: 'Контракти' },
    disabled: true,
  },
  { title: 'Проекти', iconId: iconId.folder, modalChildrenProps: null, disabled: true },
  { title: 'Контрагенти', iconId: iconId.partners, modalChildrenProps: null, disabled: true },
  { title: 'Користувачі', iconId: iconId.persons, modalChildrenProps: null, disabled: true },
  { title: 'Ролі', iconId: iconId.lockPerson, modalChildrenProps: null, disabled: true },
  { title: 'Мітки', iconId: iconId.boockMarAdd, modalChildrenProps: null, disabled: true },
];

export default directories;
