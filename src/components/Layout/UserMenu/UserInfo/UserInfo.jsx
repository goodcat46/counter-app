import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

import s from './UserInfo.module.scss';
const UserInfo = () => {
  const { user, admin } = useSelector(selectUserData);

  return (
    
    <ul className={s.userInfoList}>
      <li className={s.item}>
        {admin.isAdmin ? (
          <span className={s.admin}>{`Admin id: ${user.id}`}</span>
        ) : (
          <span>{`User id: ${user.id}`}</span>
        )}
      </li>
      {user.parentId && (
        <li className={s.item}>{`ParentId: ${user.parentId}`}</li>
      )}
      <li className={s.item}>{`І'мя: ${user.name}`}</li>
      <li className={s.item}>{`Email: ${user.email}`}</li>
      <li className={s.item}>{`Телефон: ${user.phone}`}</li>

      {user.banned && (
        <>
          <li className={s.item}>{`Banned: ${user.banned}`}</li>
          <li className={s.item}>{`Ban Reason: ${user.banned}`}</li>
        </>
      )}

    </ul>
  );
};

export default UserInfo;
