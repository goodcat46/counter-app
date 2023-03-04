import { selects } from './select.data';
export const transactionsColumns = [
  { id: 1, title: 'Дата', subTitle: 'Час', dataKey: 'transactionDate', action: 'date', width: '90px' },
  { id: 2, title: 'Тип', dataKey: 'type', action: 'status', width: '95px' },
  {
    id: 8,
    title: 'Сума',
    subTitle: 'Валюта',
    action: 'cellDbl',
    width: '120px',
    top: { name: 'Сума', dataKey: 'amount' },
    bottom: { name: 'Валюта', dataKey: 'currency' },
  },
  {
    id: 6,
    title: selects.countOut.label,
    subTitle: selects.subCountOut.label,
    action: 'nestedDbl',
    width: '200px',
    titles: {
      top: { dataKey: selects.countOut.name, nestedKey: 'name' },
      bottom: { dataKey: selects.subCountOut.name, nestedKey: 'name' },
    },
  },
  {
    id: 5,
    title: selects.countIn.label,
    subTitle: selects.subCountIn.label,
    action: 'nestedDbl',
    width: '200px',
    titles: {
      top: { dataKey: selects.countIn.name, nestedKey: 'name' },
      bottom: { dataKey: selects.subCountIn.name, nestedKey: 'name' },
    },
  },
  {
    id: 7,
    title: selects.category.label,
    subTitle: selects.subCategory.label,
    action: 'nestedDbl',
    width: '200px',
    titles: {
      top: { dataKey: selects.category.name, nestedKey: 'name' },
      bottom: { dataKey: selects.subCategory.name, nestedKey: 'name' },
    },
  },
  {
    id: 9,
    title: 'Контрагент',
    subTitle: 'Тип',
    action: 'nestedDbl',
    width: '200px',
    titles: {
      top: { dataKey: 'contractor', nestedKey: 'name' },
    },
  },
  {
    id: 10,
    title: 'Проект',
    subTitle: 'Тип',
    action: 'nestedDbl',
    width: '100px',
    titles: {
      top: { dataKey: 'project', nestedKey: 'name' },
    },
  },
  {
    id: 11,
    title: 'Документ',
    subTitle: 'Номер',
    action: 'nestedDbl',
    width: '100px',
    titles: {
      top: { dataKey: 'document', nestedKey: 'name' },
      bottom: { dataKey: 'document', nestedKey: 'number' },
    },
  },
  { id: 12, title: 'Мітка', dataKey: 'mark', action: 'string', width: '100px' },
  { id: 13, title: 'Коментар', dataKey: 'comment', action: 'string', width: '100px' },
  { id: 14, title: 'Статус', dataKey: 'status', action: 'string', width: '100px' },
  {
    id: 20,
    title: 'Створено',
    subTitle: 'Оновлено',
    dataKey: 'documentData',
    action: 'dateDbl',
    width: '180px',
  },
];

export const transactionsSearchParams = [
  { title: selects.countOut.label, dataKey: selects.countOut.name },
  { title: selects.subCountOut.label, dataKey: selects.subCountOut.name },
  { title: selects.countIn.label, dataKey: selects.countIn.name },
  { title: selects.subCountIn.label, dataKey: selects.subCountIn.name },
  { title: selects.category.label, dataKey: selects.category.name },
  { title: selects.subCategory.label, dataKey: selects.subCategory.name },
  { title: 'Сума', dataKey: 'amount' },
  { title: 'Контрагент', dataKey: 'contractor' },
  { title: 'Документ', dataKey: 'document' },
  { title: 'Проект', dataKey: 'project' },
  { title: 'Мітка', dataKey: 'mark' },
  { title: 'Статус', dataKey: 'status' },
];

export const transactionsTableTitles = [
  { id: 1, title: 'Дата', dataKey: 'transactionDate', action: 'date', width: '90px' },
  { id: 2, title: 'Тип', dataKey: 'type', action: 'status', width: '150px' },

  { id: 3, title: 'Рахунок/IN', dataKey: 'countIn', nestedKey: 'name', action: 'string', width: '150px' },
  { id: 4, title: 'Суб-рахунок/IN', dataKey: 'subCountIn', nestedKey: 'name', action: 'string', width: '150px' },

  { id: 3, title: 'Рахунок/OUT', dataKey: 'countOut', nestedKey: 'name', action: 'string', width: '150px' },
  { id: 4, title: 'Суб-рахунок/OUT', dataKey: 'subCountOut', nestedKey: 'name', action: 'string', width: '150px' },

  { id: 6, title: 'Категорія', dataKey: 'category', nestedKey: 'name', action: 'string', width: '150px' },
  { id: 7, title: 'Під-категорія', dataKey: 'subCategory', nestedKey: 'name', action: 'string', width: '150px' },

  { id: 5, title: 'Сума', dataKey: 'amount', action: 'number', width: '100px' },
  { id: 8, title: 'Валюта', dataKey: 'currency', action: 'string', width: '100px' },

  { id: 9, title: 'Контрагент', dataKey: 'contractor', action: 'string', width: '100px' },
  { id: 10, title: 'Проект', dataKey: 'project', action: 'string', width: '100px' },
  { id: 11, title: 'Документ', dataKey: 'document', action: 'string', width: '100px' },
  { id: 11, title: 'Мітка', dataKey: 'mark', action: 'string', width: '100px' },

  { id: 11, title: 'Теги', dataKey: 'tags', action: 'arrayOfString', width: '100px' },
  { id: 11, title: 'Коментар', dataKey: 'comment', action: 'string', width: '200px' },

  { id: 12, title: 'Створено/Оновлено', dataKey: 'createdAt/updatedAt', action: 'dateDbl', width: '180px' },
];

export function createRowData(data) {
  const { transactionDate, amount, comment, type, createdAt, updatedAt } = data;
  return {
    transactionDate,
    amount,
    comment,
    type,
    createdAt,
    updatedAt,
    countIn: data?.countIdIn?.name,
    subCountIn: data?.subCountIdIn?.name,
    countOut: data?.countIdOut?.name,
    subCountOut: data?.subCountIdOut?.name,
    category: data?.category?.name,
    subCategory: data?.subCategory?.name,
    contractor: data?.contractor?.name,
    documnet: data?.documnet?.name,
    project: data?.project?.name,
    mark: data?.mark?.name,
  };
}
export const transactionsTestData = [
  {
    _id: 'as51v3sd2f1v3sd2f1v3s',
    createdAt: '',
    updatedAt: '',
    transactionDate: '21-01-2023 12:52:45',
    type: 'INCOME',
    countIn: 'Основна діяльність',
    subCountIn: 'Розрахунок з клієнтом',
    countOut: null,
    subCountOut: null,
    category: 'Продаж товарів',
    subCategory: 'Промислові товари',
    value: 25045,
    currency: 'UAH',
    author: {
      _id: 'as51v3sdxbg1v3sd2f1v3s',
      name: 'Степан Гіга',
    },
    editor: {
      _id: 'as51v3sxfgnxff1v3sd2f1v3s',
      name: 'Іво Бобул',
    },
    auditor: {
      _id: 'as51v3sd2fxgbxv3sd2f1v3s',
      name: 'Іван Солярка',
    },
  },
  {
    _id: '6r5th1d6f5xfgbxfgf51hn651',
    transactionDate: '21-01-2023 12:52:45',
    type: 'EXPENSE',
    countIn: null,
    subCountIn: null,
    countOut: 'Основна діяльність',
    subCountOut: 'Розрахунок із постачальниками',
    category: 'Закупка товарів',
    subCategory: 'Дитячі товари',
    value: 59234,
    currency: 'UAH',
  },
  {
    _id: '6r5txdgfnbxf5g1n6df51hn651',
    type: 'TRANSFER',
    transactionDate: '21-01-2023 12:52:45',
    countIn: 'Поповнення банківськго рахунку',
    subCountIn: 'Рахунок у "ПрихватБанк"',
    countOut: 'Інкасація коштів з каси',
    subCountOut: 'Каса №012',
    category: 'Інкасація',
    subCategory: 'Інкасація службою банку',
    value: 25630,
    currency: 'UAH',
  },
];

// {
//   id: 5,
//   title: { name: 'Рахунок/IN', dataKey: 'countIdIn', nestedKey: 'name', action: 'string' },
//   subTitle: { name: 'Суб-рахунок/IN', dataKey: 'subCountIdIn', nestedKey: 'name', action: 'string' },
//   action: 'nestedDbl',
//   width: '200px',
// },
