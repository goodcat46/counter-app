export const transactionsTableTitles = [
  { id: 1, title: 'Дата', dataKey: 'transactionDate', action: 'date', width: '90px' },
  { id: 2, title: 'Тип', dataKey: 'type', action: 'status', width: '150px' },

  { id: 3, title: 'Рахунок/IN', dataKey: 'countIdIn', nestedKey: 'name', action: 'nested', width: '150px' },
  { id: 4, title: 'Суб-рахунок/IN', dataKey: 'subCountIdIn', nestedKey: 'name', action: 'nested', width: '150px' },

  { id: 3, title: 'Рахунок/OUT', dataKey: 'countIdOut', nestedKey: 'name', action: 'nested', width: '150px' },
  { id: 4, title: 'Суб-рахунок/OUT', dataKey: 'subCountIdOut', nestedKey: 'name', action: 'nested', width: '150px' },

  { id: 6, title: 'Категорія', dataKey: 'categoryId', nestedKey: 'name', action: 'nested', width: '150px' },
  { id: 7, title: 'Під-категорія', dataKey: 'subCategoryId', nestedKey: 'name', action: 'nested', width: '150px' },

  // {
  //   id: 7,
  //   title: null,
  //   dataKey: null,
  //   nestedKey: 'name',
  //   action: 'nestedDouble',
  //   width: '150px',
  //   nestedData: [
  //     { id: 6, title: 'Категорія', dataKey: 'categoryId', nestedKey: 'name', action: 'nested', width: '150px' },
  //     { id: 7, title: 'Під-категорія', dataKey: 'subCategoryId', nestedKey: 'name', action: 'nested', width: '150px' },
  //   ],
  // },

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

export const transactionsColumns = [
  { id: 1, title: 'Дата', dataKey: 'transactionDate', action: 'date', width: '150px' },
  { id: 2, title: 'Тип', dataKey: 'type', action: 'status', width: '150px' },

  { id: 3, title: 'Рахунок/IN', dataKey: 'countIn', action: 'string', width: '150px' },
  { id: 4, title: 'Суб-рахунок/IN', dataKey: 'subCountIn', action: 'string', width: '150px' },

  { id: 3, title: 'Рахунок/OUT', dataKey: 'countOut', action: 'string', width: '150px' },
  { id: 4, title: 'Суб-рахунок/OUT', dataKey: 'subCountOut', action: 'string', width: '150px' },

  { id: 6, title: 'Категорія', dataKey: 'category', action: 'string', width: '150px' },
  { id: 7, title: 'Під-категорія', dataKey: 'subCategory', action: 'string', width: '150px' },

  { id: 5, title: 'Сума', dataKey: 'value', action: 'number', width: '100px' },
  { id: 8, title: 'Валюта', dataKey: 'currency', action: 'string', width: '100px' },

  { id: 9, title: 'Постачальник', dataKey: 'provider', action: 'string', width: '100px' },
  { id: 10, title: 'Клієнт', dataKey: 'customer', action: 'string', width: '100px' },

  { id: 11, title: 'Проект', dataKey: 'project', action: 'string', width: '100px' },
  { id: 12, title: 'Створено/Оновлено', dataKey: 'createdAt/updatedAt', action: 'dateDbl', width: '180px' },
];

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
