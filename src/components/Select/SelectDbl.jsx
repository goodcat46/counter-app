import React, { useEffect, useState } from 'react';
import Select from './Select';
import { getParentOptions, getChildOptions } from 'data';

const SelectDbl = ({
  options = [],
  onSelect,
  parentName = '',
  getOptions,
  parentLabel,
  childName = '',
  childLabel,
  parentDefaultValue,
  childDefaultValue,
  formData = {},
  reset = false,
  disabled = false,
}) => {
  const [parentOptions, setParentOptions] = useState([]);
  const [childOptions, setChildOptions] = useState([]);
  const [parentId, setParentId] = useState(null);

  useEffect(() => {
    if (disabled || options.length === 0) {
      setParentOptions([]);
      return;
    }
    let parentOptions = [];
    if (getOptions) {
      parentOptions = getParentOptions(parentName, getOptions());
    } else {
      parentOptions = getParentOptions(parentName, options);
    }

    // if (parentOptions.length === 0) return;
    setParentOptions(parentOptions);
    setParentId(formData[parentName]);
  }, [childName, disabled, formData, getOptions, options, parentId, parentName]);

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
          label: parentLabel,
          onSelect,
          defaultValue: parentDefaultValue,
          reset,
        }}
      />
      <Select
        {...{
          options: childOptions,
          name: childName,
          label: childLabel,
          onSelect,
          defaultValue: childDefaultValue,
          disabled: childOptions.length === 0,
          reset,
        }}
      />
    </>
  );
};

export default SelectDbl;
