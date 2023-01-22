import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import MobileNavLink from './MobileNavLink/MobileNavLink';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import s from './MobileNavMenu.module.scss';

const SlickMobileNavMenu = ({ navLinkArr }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: navLinkArr.length < 3 ? navLinkArr.length : 3,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      {navLinkArr.length > 0 && (
        <Slider {...settings}>
          {navLinkArr.map(link => (
            <MobileNavLink key={`${link?.device}/${link?.path}`} {...link} />
          ))}
        </Slider>
      )}

      {navLinkArr.length === 0 && (
        <>
          <Link to={'/'} className={s.navLink}>
            <SvgIcon iconId={'home'} size="20px" />
            <span className={s.linkTitle}>{'Головна'}</span>
          </Link>
        </>
      )}
    </>
  );
};
export default SlickMobileNavMenu;
