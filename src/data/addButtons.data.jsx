import FormTransaction from 'components/FormTransaction/FormTransaction';
import FormTransactions from 'components/FormTransactions/FormTransactions';
import CreateTransactionComp from 'components/CreateTransactionComp/CreateTransactionComp';
const addButtons = [
  { title: 'Документ', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Проект', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Контрагент', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Менеджер', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Категорія', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Рахунок', ModalChildren: () => null, modalChildrenProps: null },
  { title: 'Мітка', ModalChildren: () => null, modalChildrenProps: null },
  {
    title: 'Транзакція',
    ModalChildren: CreateTransactionComp,
    modalChildrenProps: {
      onAddNewTransaction: data => {
        console.log(data);
      },
    },
  },
  { title: 'Транзакції', ModalChildren: FormTransactions, modalChildrenProps: null },
];
export default addButtons;
