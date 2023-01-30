export const selects = [
  {
    name: 'type',
    label: 'Тип',
    options: [
      { label: 'Дохід', value: 'INCOME', name: 'type' },
      { label: 'Витрата', value: 'EXPENSE', name: 'type' },
      { label: 'Переказ', value: 'TRANSFER', name: 'type' },
    ],
    required: true,
  },
  { name: 'countIdIn', label: 'Рахунок/IN' },
  { name: 'subCountIdIn', label: 'Суб-рахунок/IN' },
  { name: 'countIdOut', label: 'Рахунок/OUT' },
  { name: 'subCountIdOut', label: 'Суб-рахунок/OUT' },
  { name: 'categoryId', label: 'Категорія' },
  { name: 'subCategoryId', label: 'Під-категорія' },
  { name: 'contractor', label: 'Контрагент' },
  { name: 'project', label: 'Проект' },
  { name: 'document', label: 'Документ' },
  { name: 'mark', label: 'Мітка' },
  {
    name: 'status',
    label: 'Статус',
    options: [
      { label: 'Перевірено', value: 'checked', name: 'status' },
      { label: 'Узгоджено', value: 'approved', name: 'status' },
      { label: 'Проблема', value: 'problem', name: 'status' },
    ],
  },
];

export function getParentOptions(parentName, options) {
  if (!options) return [];
  const filteredOptions = options.filter(option => !option?.owner);

  const parentOptions = filteredOptions.map(option => {
    return { label: option?.name, value: option?._id, name: parentName };
  });
  return parentOptions || [];
}

export function getChildOptions({ childName, parentId, options }) {
  if (!childName || !parentId || !options) return [];
  // console.log('getChildOptions', { childName, parentId, options });
  const filteredOptions = options.filter(option => option?.owner === parentId || option?.owner?._id === parentId);

  const childOptions = filteredOptions.map(option => {
    return { label: option?.name, value: option?._id, name: childName };
  });

  return childOptions || [];
}
