import React, { useEffect, useState } from 'react';
import Select from './Select';

function getParentOptions(options) {
  if (!options) return [];
  const filteredOptions = options.filter(option => !option?.owner);

  const parentOptions = filteredOptions.map(option => {
    return { label: option?.name, value: option?._id };
  });
  return parentOptions || [];
}
// function prepeareOptions(options) {}

function getChildOptions(ownerId = null, ownerOption = []) {
  if (ownerId || ownerOption) return [];

  console.log('getChildOptions', { ownerId, ownerOption });
  const filteredOptions = ownerOption.filter(option => option?.value === ownerId);

  // const options = filteredOptions.map(option => {
  //   return { label: option?.name, value: option?._id };
  // });

  return filteredOptions || [];
}
const SelectDbl = ({ options = [], onSelect, parentName, childName, formData = {} }) => {
  const [parentOptions, setParentOptions] = useState([]);
  const [childOptions, setChildOptions] = useState([]);

  useEffect(() => {
    if (options.length === 0) return;
    const parentOptions = getParentOptions(options);
    if (parentOptions.length === 0) return;

    setParentOptions(parentOptions);
  }, [options]);

  useEffect(() => {
    if (parentOptions.length === 0) {
      return;
    }
    const options = getChildOptions(formData?.category, parentOptions);

    if (options.length === 0) return;

    setChildOptions(options);
  }, [formData, parentName, parentOptions]);

  return (
    <>
      <Select
        {...{
          options: parentOptions,
          name: parentName,
          onSelect,
        }}
      />
      <Select
        {...{
          // options: childOptions,
          name: childName,
          onSelect,
          disabled: childOptions.length === 0,
        }}
      />
    </>
  );
};

export default SelectDbl;
