import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import ActionToggleAppTheme from './UserMenuActions/ActionToggleAppTheme';
// import ActionAppExit from './UserMenuActions/ActionAppExit';

import s from './UserMenu.module.scss';
import UserInfo from './UserInfo/UserInfo';

const UserMenu = ({ children }) => {
  return (
    <div className={s.backdrop}>
      <ButtonIcon iconId="person" size="30px" iconSize="100%" className={s.openButton} />

      <ul className={[s.list, 'theme'].join(' ')}>
        <UserInfo />
        <ActionToggleAppTheme />
        {/* <ActionAppExit /> */}
      </ul>
    </div>
  );
};

export default UserMenu;
