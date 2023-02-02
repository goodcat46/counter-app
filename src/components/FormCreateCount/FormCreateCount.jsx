import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCountThunk } from 'redux/counts/counts.thunks';
import FormBase from 'components/FormBase/FormBase';
import CreateCountInputs from './CreateCountInputs/CreateCountInputs';
import { countsSelector } from 'redux/selectors.store';

// function createSubmitData(data) {
//   const { owner } = data;
//   const submitData = {
//     owner,
//   };
//   return submitData;
// }
const FormCreateCount = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(countsSelector);

  function handleSubmit({ formData, onSuccess, onError }) {
    console.log('FormCreateCount', { formData, onSuccess, onError });

    const payload = { submitData: formData, onSuccess, onError };

    dispatch(addCountThunk(payload));
  }

  return (
    <>
      <FormBase {...{ handleSubmit, isLoading, title: 'Створення рахунку' }}>
        <CreateCountInputs />
      </FormBase>
    </>
  );
};

export default FormCreateCount;
