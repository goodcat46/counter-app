import React from 'react';
import sprite from 'img/sprite';
import s from './ButtonIcon.module.scss';

const ButtonIcon = ({
  children,
  type = 'button',
  disabled = false,
  size = '',
  title = '',
  styles = {},
  styleType = '',
  className = '',
  iconId = '',
  iconSize = '18px',
  iconStyles = {},
  iconClassName = '',
  endIconId = '',
  endIconSize = '18px',
  endIconStyles = {},
  endIconClassName = '',
  // PrimaryBtn
  onClick,
  ...props
}) => {
  const classNames = [s.Btn, s[styleType], className].join(' ');
  const iconClassNames = [s.iconSvg, iconClassName].join(' ');
  const endIconClassNames = [s.iconSvg, endIconClassName].join(' ');

  let style = {
    width: size,
    height: size,
    minWidth: size,
    miHeight: size,
    ...styles,
  };
  let iconStyle = {
    width: iconSize,
    height: iconSize,
    minWidth: iconSize,
    minHeight: iconSize,
    ...iconStyles,
  };
  let endIconStyle = {
    width: endIconSize,
    height: endIconSize,
    minWidth: endIconSize,
    minHeight: endIconSize,
    ...endIconStyles,
  };
  return (
    <button type={type} className={classNames} disabled={disabled} style={style} title={title && title} onClick={onClick} {...props}>
      {iconId && (
        <svg className={iconClassNames} style={iconStyle}>
          <use href={`${sprite}#icon-${iconId}`} />
        </svg>
      )}

      {children}

      {endIconId && (
        <svg className={endIconClassNames} style={endIconStyle}>
          <use href={`${sprite}#icon-${endIconId}`}></use>
        </svg>
      )}
    </button>
  );
};

export default ButtonIcon;
