// import FormCreateCount from 'components/FormCreateCount/FormCreateCount';
// import FormTransactions from 'components/FormTransactions/FormTransactions';
// import CreateTransactionComp from 'components/CreateTransactionComp/CreateTransactionComp';
import TableCounts from 'components/TableCounts/TableCounts';
import { iconId } from './iconsId.data';

const directories = [
  { title: 'Рахунки', iconId: iconId.bank, ModalChildren: TableCounts, modalChildrenProps: null, disabled: false },
  { title: 'Категорії', iconId: iconId.folder, modalChildrenProps: null, disabled: true },
  { title: 'Документи', iconId: iconId.assignment, modalChildrenProps: null, disabled: true },
  { title: 'Проекти', iconId: iconId.folder, modalChildrenProps: null, disabled: true },
  { title: 'Контрагенти', iconId: iconId.partners, modalChildrenProps: null, disabled: true },
  { title: 'Менеджери', iconId: iconId.persons, modalChildrenProps: null, disabled: true },
  { title: 'Мітки', iconId: iconId.folder, modalChildrenProps: null, disabled: true },
];

export default directories;
