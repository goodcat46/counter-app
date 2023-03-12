import React from 'react';
import { Link } from 'react-router-dom';
import s from './LogoSvg.module.scss';

const LogoSvg = () => {
  const styles = {
    width: '34px',
    height: '20px',
    minWidth: '34px',
  };

  return (
    <Link to="/transactions" className={s.link}>
      <div className={s.iconBox} style={styles}>
        <svg
          className={s.svg}
          width="34"
          height="20"
          viewBox="0 0 34 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.7894 20H30.6591L11.1643 0H3.29459L22.7894 20Z" fill="#7476ED" />
          <path d="M15.2073 1.02323e-06L34 19.2796V0H28.9143V6.08693L22.9811 0L15.2073 1.02323e-06Z" fill="#E56F8C" />
          <path d="M0 0.669434V19.9998H5.08561V13.9128L11.0188 19.9998H18.8422L0 0.669434Z" fill="#64C2DB" />
        </svg>
      </div>

      <span className={s.text}>Logoipsum</span>
    </Link>
  );
};

export default LogoSvg;
