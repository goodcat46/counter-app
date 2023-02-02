import ModalTableCounts from 'components/ModalTableCounts/ModalTableCounts';
import { iconId } from './iconsId.data';

const directories = [
  { title: 'Рахунки', iconId: iconId.bank, ModalChildren: ModalTableCounts, modalChildrenProps: null, disabled: false },
  { title: 'Категорії', iconId: iconId.folder, modalChildrenProps: null, disabled: true },
  { title: 'Котракти', iconId: iconId.assignment, modalChildrenProps: null, disabled: true },
  { title: 'Проекти', iconId: iconId.folder, modalChildrenProps: null, disabled: true },
  { title: 'Контрагенти', iconId: iconId.partners, modalChildrenProps: null, disabled: true },
  { title: 'Користувачі', iconId: iconId.persons, modalChildrenProps: null, disabled: true },
  { title: 'Ролі', iconId: iconId.lockPerson, modalChildrenProps: null, disabled: true },
  { title: 'Мітки', iconId: iconId.boockMarAdd, modalChildrenProps: null, disabled: true },
];

export default directories;
