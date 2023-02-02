import FormCreateCount from 'components/FormCreateCount/FormCreateCount';
import FormTransactions from 'components/FormTransactions/FormTransactions';
import FormCategory from 'components/FormCategory/FormCategory';
import CreateTransactionComp from 'components/CreateTransactionComp/CreateTransactionComp';

const createActions = [
  { title: 'Документ', ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  { title: 'Проект', ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  { title: 'Контрагент', ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  { title: 'Менеджер', ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  { title: 'Мітка', ModalChildren: () => null, modalChildrenProps: null, disabled: true },
  { title: 'Категорія', ModalChildren: FormCategory, modalChildrenProps: null },
  { title: 'Рахунок', ModalChildren: FormCreateCount, modalChildrenProps: null },
  { title: 'Транзакція', ModalChildren: CreateTransactionComp, modalChildrenProps: null },
  { title: 'Транзакції', ModalChildren: FormTransactions, modalChildrenProps: null, disabled: true },
];

export default createActions;
