import React from 'react';
import FormTransaction from 'components/FormTransaction/FormTransaction';
import { useDispatch } from 'react-redux';
import { addTransactionThunk } from 'redux/transactions/transactions.thunks';

const CreateTransactionComp = props => {
  const dispatch = useDispatch();

  function onAddNewTransaction({ data, onSuccess, onError }) {
    const {
      transactionDate = null,
      amount = null,
      type = null,
      countIdIn = null,
      subCountIdIn = null,
      countIdOut = null,
      subCountIdOut = null,
      category = null,
      subCategory = null,
      document = null,
      project = null,
      contractor = null,
      comment = null,
      mark = null,
      tags = null,
    } = data;
    const payload = {
      submitData: {
        transactionDate,
        amount,
        type,
        countIdIn: countIdIn?._id || null,
        subCountIdIn: subCountIdIn?._id || null,
        countIdOut: countIdOut?._id || null,
        subCountIdOut: subCountIdOut?._id || null,
        category: category?._id || null,
        subCategory: subCategory?._id || null,
        document: document?._id || null,
        project: project?._id || null,
        contractor: contractor?._id || null,
        comment,
        mark,
        tags,
      },
      onSuccess,
      onError,
    };

    dispatch(addTransactionThunk(payload));
  }

  return (
    <div>
      <FormTransaction {...{ ...props, onAddNewTransaction }} />
    </div>
  );
};

export default CreateTransactionComp;
