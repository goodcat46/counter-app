import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useDispatch } from 'react-redux';
import { logOutUserThunk } from 'redux/auth/auth.thunks';
import { actionResetAppSettings } from 'redux/appSettings/appSettingsActions';
import { actionResetPageSettings } from 'redux/page/pageActions';
import { toast } from 'react-toastify';

import { iconId } from 'data';

const ActionAppExit = () => {
  const dispatch = useDispatch();

  function handleExitApp() {
    const result = window.confirm('Бажаєте вийти?');
    const payload = {
      onSuccess: () => {
        toast.success('Вдалого вам дня');
      },
    };
    if (result) {
      dispatch(logOutUserThunk(payload));
      dispatch(actionResetPageSettings());
      dispatch(actionResetAppSettings());
    }
  }

  return <ButtonIcon iconId={iconId.logOut} iconSize="20px" size="36px" onClick={handleExitApp} />;
};
export default ActionAppExit;
