import { Button } from '@mui/material';
import React from 'react';

import s from './FormButtons.module.scss';

const FormButtons = ({
  disabled = false,
  nandleCloseAfterSubmit,
  closeAfterSubmit,
  nandleClearAfterSubmit,
  clearAfterSubmit,
}) => {
  return (
    <div className={s.footer}>
      <label htmlFor="clearAfter" className={s.flex}>
        <span className={s.afterSibmit}>Очистити після підтвердження</span>
        <input id="clearAfter" type="checkbox" onChange={nandleClearAfterSubmit} checked={clearAfterSubmit} />
      </label>
      <label htmlFor="closeAfter" className={s.flex}>
        <span className={s.afterSibmit}>Закрити після підтвердження</span>
        <input id="closeAfter" type="checkbox" onChange={nandleCloseAfterSubmit} checked={closeAfterSubmit} />
      </label>

      <div className={s.btns}>
        <Button variant="contained" type="submit" disabled={disabled}>
          Прийняти
        </Button>
        <Button variant="outlined" type="reset" disabled={disabled}>
          Скасувати
        </Button>
      </div>
    </div>
  );
};

export default FormButtons;
