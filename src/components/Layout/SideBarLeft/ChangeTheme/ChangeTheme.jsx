import React from 'react';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { iconId } from 'data';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors.store';
import { actionChangeDarkMode } from 'redux/appSettings/appSettingsActions';

const ToggleThemeMode = () => {
  const { isDarkMode } = useSelector(getAppSettings);
  const dispatch = useDispatch();
  function toggleDarkMode() {
    const payload = {
      onSuccess: () => {},
      onError: () => {},
    };
    dispatch(actionChangeDarkMode(payload));
  }
  return (
    <ButtonIcon
      iconSize="20px"
      size="36px"
      iconId={isDarkMode ? iconId.darkMode : iconId.lightMode}
      onClick={toggleDarkMode}
    />
  );
};

export default ToggleThemeMode;
