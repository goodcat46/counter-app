import React from 'react';
import s from './SvgIconClose.module.scss';
const SvgIconClose = ({ iconId, style, size = '', svgClass = '' }) => {
  const styles = {
    ...style,
    width: size,
    height: size,
  };
  const svgClassArr = [s.svg, svgClass].join(' ');
  return (
    <div className={s.iconBox} style={styles}>
      <svg className={svgClassArr} viewBox="0 0 24 24">
        {/* <path d="M1.76 1.787l-0.612 0.613 13.598 13.6-13.6 13.6 0.628 0.626 0.626 0.628 13.6-13.6 13.6 13.6 0.626-0.628 0.628-0.626-13.6-13.6 13.6-13.6-0.628-0.626-0.626-0.628-13.6 13.6-6.788-6.788c-2.249-2.258-4.469-4.469-6.698-6.671l-0.116-0.114c-0.014 0-0.302 0.276-0.638 0.613z"></path> */}
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </svg>
    </div>
  );
};

export default SvgIconClose;
