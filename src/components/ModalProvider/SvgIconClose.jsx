import React from 'react';
import styled from 'styled-components';
const SvgIconClose = ({ style, size = '', svgClass }) => {
  const styles = {
    width: size,
    height: size,
    ...style,
  };

  return (
    <IconBox style={styles}>
      <Svg className={svgClass} viewBox="0 0 24 24">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </Svg>
    </IconBox>
  );
};
const IconBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: inherit;
`;
const Svg = styled.svg`
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export default SvgIconClose;
