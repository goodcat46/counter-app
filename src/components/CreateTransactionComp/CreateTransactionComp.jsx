import React from 'react';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import { useDispatch } from 'react-redux';
import { addTransactionThunk } from 'redux/transactions/transactions.thunks';
import { toast } from 'react-toastify';

const CreateTransactionComp = props => {
  const dispatch = useDispatch();

  function onAddNewTransaction({ data }) {
    const payload = {
      submitData: data,
      onSuccess: response => {
        console.log(response);
      },
      onError: error => {
        toast.error(`${error.message}`);
      },
    };

    console.log(payload);

    dispatch(addTransactionThunk(payload));
  }

  return (
    <div>
      <FormTransaction {...{ ...props, onAddNewTransaction }} />
    </div>
  );
};

export default CreateTransactionComp;
