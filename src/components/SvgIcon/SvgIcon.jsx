import React from 'react';
import sprite from 'img/sprite';
import s from './SvgIcon.module.scss';
const SvgIcon = ({ iconId = 'info', style, size = '', svgClass = '', className = '' }) => {
  const styles = {
    ...style,
    width: size,
    height: size,
    minWidth: size,
  };
  const classNameArr = [s.iconBox, className].join(' ');
  const svgClassArr = [s.svg, svgClass].join(' ');

  return (
    <div className={classNameArr} style={styles}>
      <svg className={svgClassArr}>
        <use href={`${sprite}#icon-${iconId}`}></use>
      </svg>
    </div>
  );
};

export default SvgIcon;
