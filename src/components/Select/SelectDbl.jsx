import React, { useEffect, useState } from 'react';
import Select from './Select';
import { getParentOptions, getChildOptions } from 'data';

const SelectDbl = ({
  options = [],
  onSelect,
  parentName = '',
  childName = '',
  formData = {},
  reset = false,
  disabled = false,
}) => {
  const [parentOptions, setParentOptions] = useState([]);
  const [childOptions, setChildOptions] = useState([]);
  const [parentId, setParentId] = useState(null);

  useEffect(() => {
    if (disabled || options.length === 0) return;

    const parentOptions = getParentOptions(parentName, options);

    if (parentOptions.length === 0) return;
    setParentOptions(parentOptions);
    setParentId(formData[parentName]);
  }, [childName, disabled, formData, options, parentId, parentName]);

  useEffect(() => {
    if (disabled || !parentId) return;

    const childOptions = getChildOptions({ childName, parentId, options });
    // console.log('childFilterOptions', { childName, parentId, options });
    setChildOptions(childOptions);
    // console.log('childOptions', childOptions);
  }, [childName, parentId, options, disabled]);

  return (
    <>
      <Select
        {...{
          disabled,
          options: parentOptions,
          name: parentName,
          onSelect,
          reset,
        }}
      />
      <Select
        {...{
          options: childOptions,
          name: childName,
          onSelect,
          disabled: childOptions.length === 0,
          reset,
        }}
      />
    </>
  );
};

export default SelectDbl;
