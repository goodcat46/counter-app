export const selects = {
  trType: {
    name: 'type',
    label: 'Тип транзакції',
    options: [
      { label: 'Дохід', value: 'INCOME', name: 'type' },
      { label: 'Витрата', value: 'EXPENSE', name: 'type' },
      { label: 'Переказ', value: 'TRANSFER', name: 'type' },
    ],
    required: true,
  },
  countIn: { name: 'countIdIn', label: 'Рахунок/IN' },
  subCountIn: { name: 'subCountIdIn', label: 'Суб-рахунок/IN' },
  countOut: { name: 'countIdOut', label: 'Рахунок/OUT' },
  subCountOut: { name: 'subCountIdOut', label: 'Суб-рахунок/OUT' },
  category: { name: 'categoryId', label: 'Категорія' },
  subCategory: { name: 'subCategoryId', label: 'Під-категорія' },
  contractor: { name: 'contractor', label: 'Контрагент' },
  project: { name: 'project', label: 'Проект' },
  document: { name: 'document', label: 'Документ' },
  mark: { name: 'mark', label: 'Мітка' },
  trStatus: {
    name: 'status',
    label: 'Статус',
    options: [
      { label: 'Перевірено', value: 'checked', name: 'status' },
      { label: 'Узгоджено', value: 'approved', name: 'status' },
      { label: 'Проблема', value: 'problem', name: 'status' },
    ],
  },
  countType: {
    label: 'Тип рахунку',
    name: 'type',
    options: [
      { label: 'ПАСИВНИЙ', value: 'PASSIVE', name: 'type' },
      { label: 'АКТИВНИЙ', value: 'ACTIVE', name: 'type' },
    ],
  },
  parentCount: { required: true, label: 'Батьківський рахунок', name: 'owner' },
};

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

export function getOwnerOptions(options) {
  let ownerOptions = options.filter(opt => !opt?.owner);
  // console.log({ ownerOptions });
  let prepearedOptions = ownerOptions.map(opt => {
    const { type, _id, code, descr, name } = opt;

    const label = `${name ? name : ''} ${code ? `(${code})` : ''} ${type ? `(${type})` : ''}`
      .replaceAll('  ', ' ')
      .trim();

    return {
      label: label,
      value: _id,
      name: 'owner',
      type,
      code,
      descr,
    };
  });

  return prepearedOptions || [];
}