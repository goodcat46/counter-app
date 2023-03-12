import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'theme/theme';

const ModalFilter = ({ options = [], onSelect }) => {
  const [current, setCurrent] = useState(0);
  return (
    <Filter repeat={options.length}>
      {options.length > 0 &&
        options.map((opt, idx) => (
          <FilterBtn
            key={opt?.title || idx}
            isActive={idx === current}
            type="button"
            onClick={() => {
              setCurrent(idx);
              if (typeof onSelect === 'function') onSelect(opt);
            }}
          >
            {opt?.title || `option ${idx + 1}`}
          </FilterBtn>
        ))}
    </Filter>
  );
};

const Filter = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${props => `repeat(${props.repeat || 1}, 1fr)`};

  height: 44px;

  background-color: inherit;
`;

const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  min-height: 20px;

  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: inherit;

  text-transform: uppercase;

  background-color: ${({ isActive }) => (isActive ? 'inherit' : `${theme.dark.borderColor}`)};
  border-style: none;
  /* border-bottom: 2px solid ${({ isActive }) => (isActive ? `transparent` : `${theme.dark.borderColor}`)}; */
`;

export default ModalFilter;
