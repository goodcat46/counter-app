// import FormCreateCount from 'components/FormCreateCount/FormCreateCount';
// import FormTransactions from 'components/FormTransactions/FormTransactions';
// import CreateTransactionComp from 'components/CreateTransactionComp/CreateTransactionComp';
import { iconId } from './iconsId.data';
const directories = [
  { title: 'Рахунки', iconId: iconId.bank, ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  { title: 'Категорії', iconId: iconId.folder, ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  {
    title: 'Документи',
    iconId: iconId.assignment,
    ModalChildren: () => null,
    modalChildrenProps: null,
    disabled: true,
  },
  { title: 'Проекти', iconId: iconId.folder, ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  {
    title: 'Контрагенти',
    iconId: iconId.partners,
    ModalChildren: () => null,
    modalChildrenProps: null,
    disabled: true,
  },
  { title: 'Менеджери', iconId: iconId.persons, ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  { title: 'Мітки', iconId: iconId.folder, ModalChildren: () => null, modalChildrenProps: null, disabled: true },
];
export default directories;
