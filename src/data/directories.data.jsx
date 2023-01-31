// import FormCreateCount from 'components/FormCreateCount/FormCreateCount';
// import FormTransactions from 'components/FormTransactions/FormTransactions';
// import CreateTransactionComp from 'components/CreateTransactionComp/CreateTransactionComp';
import { iconId } from './iconsId.data';
const directories = [
  { title: 'Рахунки', iconId: iconId.bank, ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Категорії', iconId: iconId.folder, ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Документи', iconId: iconId.assignment, ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Проекти', iconId: iconId.folder, ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Контрагенти', iconId: iconId.partners, ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Менеджери', iconId: iconId.persons, ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Мітки', iconId: iconId.folder, ModalChildren: () => null, modalChildrenProps: null },
  // {
  //   title: 'Транзакція',
  //   ModalChildren: CreateTransactionComp,
  //   modalChildrenProps: {
  //     onAddNewTransaction: data => {
  //       console.log(data);
  //     },
  //   },
  // },
  // { title: 'Транзакції', ModalChildren: FormTransactions, modalChildrenProps: null },
];
export default directories;
