import React from 'react';
import sprite from 'img/sprite';
import s from './ButtonIcon.module.scss';
export const ButtonIconVariants = {
  filledLarge: 'filledLarge',
  filled: 'filled',
  outlined: 'outlined',
  outlinedLarge: 'outlinedLarge',
  onlyText: 'text',
  pointerLeft: 'pointerLeft',
  ColoredBtn: 'ColoredBtn',
  BrandClrBtn: 'BrandClrBtn',
  ErrorClrBtn: 'ErrorClrBtn',
  BorderBtn: 'BorderBtn',
  transparent: 'transparent',
};
const ButtonIcon = ({
  children,
  type = 'button',
  disabled = false,
  size = '',
  title = '',
  styles = {},
  variant = '',
  className = '',
  iconId = '',
  iconSize = '18px',
  iconStyles = {},
  iconClassName = '',
  endIconId = '',
  endIconSize = '18px',
  endIconStyles = {},
  endIconClassName = '',
  onClick = () => {
    console.log('ButtonIcon click');
  },
  ...props
}) => {
  const classNames = [s.Btn, s[variant], className].join(' ');
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
    <button {...{ type, style, className: classNames, title, onClick, disabled, ...props }}>
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
