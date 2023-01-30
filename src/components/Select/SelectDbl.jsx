import React, { useEffect, useState } from 'react';
import Select from './Select';

function getParentOptions(parentName, options) {
  if (!options) return [];
  const filteredOptions = options.filter(option => !option?.owner);

  const parentOptions = filteredOptions.map(option => {
    return { label: option?.name, value: option?._id, name: parentName };
  });
  return parentOptions || [];
}

function getChildOptions({ childName, parentId, options }) {
  if (!childName || !parentId || !options) return [];
  console.log('getChildOptions', { childName, parentId, options });
  const filteredOptions = options.filter(option => option?.owner === parentId || option?.owner?._id === parentId);

  const childOptions = filteredOptions.map(option => {
    return { label: option?.name, value: option?._id, name: childName };
  });

  return childOptions || [];
}

const SelectDbl = ({ options = [], onSelect, parentName = '', childName = '', formData = {}, disabled = false }) => {
  const [parentOptions, setParentOptions] = useState([]);
  const [childOptions, setChildOptions] = useState([]);
  const [parentId, setParentId] = useState(null);

  console.log(`${parentName}`, options);
  useEffect(() => {
    if (disabled) return;

    if (options.length === 0) return;
    const parentOptions = getParentOptions(parentName, options);
    if (parentOptions.length === 0) return;
    setParentOptions(parentOptions);
    setParentId(formData[parentName]);
  }, [childName, disabled, formData, options, parentId, parentName]);

  useEffect(() => {
    if (disabled) return;

    if (!parentId) return;
    const childOptions = getChildOptions({ childName, parentId, options });
    console.log('childFilterOptions', { childName, parentId, options });
    setChildOptions(childOptions);
    console.log('childOptions', childOptions);
  }, [childName, parentId, options, disabled]);

  return (
    <>
      <Select
        {...{
          disabled,
          options: parentOptions,
          name: parentName,
          onSelect,
        }}
      />
      <Select
        {...{
          options: childOptions,
          name: childName,
          onSelect,
          disabled: childOptions.length === 0,
        }}
      />
    </>
  );
};

export default SelectDbl;
