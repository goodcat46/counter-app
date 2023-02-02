import React from 'react';
import { useFormBase } from 'components/FormBase/FormBase';
import { useSelector } from 'react-redux';
import { countsSelector } from 'redux/selectors.store';
import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import { selects, getOwnerOptions } from 'data';

import s from './CreateCountInputs.module.scss';

const CreateCountInputs = () => {
  const { onFormStateChange } = useFormBase();
  // const [selectedParent, setSelectedParent] = useState(null);
  const { counts = [] } = useSelector(countsSelector);

  function onChange(ev) {
    const { name, value } = ev.target;
    onFormStateChange({ [name]: value });
  }
  function onSelect({ value }) {
    onFormStateChange({ [value?.name]: value?.value });
  }
  return (
    <>
      <div className={s.inputs}>
        <Select {...{ onSelect, ...selects.parentCount, options: getOwnerOptions(counts) }} />

        <Input {...{ onChange, label: 'Назва', name: 'name', required: true }} />

        <Select {...{ onSelect, ...selects.countType }} />

        <Input {...{ onChange, label: 'Код', type: 'number', name: 'code', required: true }} />
        <Input {...{ onChange, label: 'Баланс', type: 'number', name: 'balance' }} />
        <Input {...{ onChange, label: 'Опис', name: 'descr' }} />
      </div>
    </>
  );
};

export default CreateCountInputs;
