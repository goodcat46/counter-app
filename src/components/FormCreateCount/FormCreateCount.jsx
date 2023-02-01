import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCountThunk } from 'redux/counts/counts.thunks';
import FormBase from 'components/FormBase/FormBase';
import CreateCountInputs from './CreateCountInputs/CreateCountInputs';

const FormCreateCount = () => {
  const dispatch = useDispatch();

  function handleSubmit(payload) {
    console.log('payload', payload);
    dispatch(addCountThunk(payload));
  }

  useEffect(() => {}, []);
  return (
    <>
      <FormBase title="Створення рахунку" {...{ handleSubmit }}>
        <CreateCountInputs />
      </FormBase>
    </>
  );
};

export default FormCreateCount;
