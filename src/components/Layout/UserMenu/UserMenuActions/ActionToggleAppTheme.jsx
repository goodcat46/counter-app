import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeTheme } from 'redux/appSettings/appSettingsActions';
import { getAppSettings } from 'redux/selectors';

import s from './UserMenuActions.module.scss';

const ActionToggleAppTheme = () => {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector(getAppSettings);
  function handleToggleAppTheme(params) {
    dispatch(actionChangeTheme());
  }
  return (
    <li className={s.actionItem} >
      <ButtonIcon
        iconId={isDarkTheme ? 'lightMode' : 'darkMode'}
        className={s.actionBtn}
        title='Дозволить вам переключитись між темними та світлим режимами'
        onClick={handleToggleAppTheme}
      >
        {isDarkTheme ? 'На світлу сторону' : 'На темну сторону'}
      </ButtonIcon>
    </li>
  );
};

export default ActionToggleAppTheme;
