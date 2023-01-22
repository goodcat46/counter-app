import { useEffect, useState } from 'react';

import NavLinkHomePage from './NavLinkHomePage/NavLinkHomePage';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/selectors';
import { pagesRoutes } from 'data/pagesRoutes';

import s from './NavMenuHomePage.module.scss';

const NavMenuHomePage = () => {
  const { user } = useSelector(getUserData);
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const pagesRoutesArr = pagesRoutes.filter(el => el?.roles.includes(user?.role) && el?.status.includes(user?.status));

    setNavLinks(pagesRoutesArr);
  }, [user?.role, user?.status]);

  return (
    <div className={s.menu}>
      <ul className={[s.navList].join(' ')}>
        {navLinks.map(link => (
          <NavLinkHomePage key={link.path} item={link} />
        ))}
      </ul>
    </div>
  );
};

export default NavMenuHomePage;
