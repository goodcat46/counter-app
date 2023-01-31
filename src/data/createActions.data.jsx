import FormCreateCount from 'components/FormCreateCount/FormCreateCount';
import FormTransactions from 'components/FormTransactions/FormTransactions';
import FormCategory from 'components/FormCategory/FormCategory';
import CreateTransactionComp from 'components/CreateTransactionComp/CreateTransactionComp';
const createActions = [
  { title: 'Документ', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Проект', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Контрагент', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Менеджер', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Категорія', ModalChildren: FormCategory, modalChildrenProps: null },
  { title: 'Рахунок', ModalChildren: FormCreateCount, modalChildrenProps: null },
  { title: 'Мітка', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Транзакція', ModalChildren: CreateTransactionComp, modalChildrenProps: null },
  { title: 'Транзакції', ModalChildren: FormTransactions, modalChildrenProps: null, disabled: true },
];
export default createActions;
