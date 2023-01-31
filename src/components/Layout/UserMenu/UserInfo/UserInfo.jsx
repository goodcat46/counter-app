import React from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/selectors.store';

import s from './UserInfo.module.scss';
const UserInfo = () => {
  const { user } = useSelector(getUserData);

  return (
    <li className={s.userInfo}>
      <ul className={s.userInfoList}>
        <li className={s.item}>
          <span>{`ID: ${user?._id}`}</span>
        </li>

        <li className={s.item}>{`Роль: ${user?.role}`}</li>

        <li className={s.item}>{`І'мя: ${user?.name}`}</li>

        <li className={s.item}>{`Email: ${user?.email}`}</li>

        <li className={s.item}>{`Телефон: ${user?.phone}`}</li>

        {user?.banned && (
          <>
            <li className={s.item}>{`Banned: ${user.banned}`}</li>
            <li className={s.item}>{`Ban Reason: ${user.banned}`}</li>
          </>
        )}
      </ul>
    </li>
  );
};

export default UserInfo;
