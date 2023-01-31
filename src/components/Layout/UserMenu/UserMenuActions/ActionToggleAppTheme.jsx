import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeTheme } from 'redux/appSettings/appSettingsActions';
import { getAppSettings } from 'redux/selectors.store';

import s from './UserMenuActions.module.scss';

const ActionToggleAppTheme = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(getAppSettings);

  function handleToggleAppTheme(params) {
    dispatch(actionChangeTheme());

    const body = document.querySelector('body');
    if (body.classList.contains('Light')) {
      body.classList.remove('Light');
      body.classList.add('Dark');
      return;
    }
    body.classList.remove('Dark');
    body.classList.add('Light');
  }

  return (
    <li className={s.actionItem}>
      <ButtonIcon
        iconId={isDarkTheme ? 'lightMode' : 'darkMode'}
        className={s.actionBtn}
        title="Дозволить вам переключитись між темними та світлим режимами"
        onClick={handleToggleAppTheme}
      >
        {isDarkTheme ? 'На світлу сторону' : 'На темну сторону'}
      </ButtonIcon>
    </li>
  );
};

export default ActionToggleAppTheme;
