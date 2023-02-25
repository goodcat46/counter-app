import SvgIcon from 'components/SvgIcon/SvgIcon';
import { iconId } from 'data';
import React, { useEffect, useState } from 'react';
import s from './SearchParamInput.module.scss';

const SearchParamInput = ({ data = [], defaultValue, selectedItem = { title: '' }, onSelect }) => {
  const [inputValue, setInputValue] = useState({ searchParam: '' });
  const [filteredData, setFilteredData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  function handleToggleList() {
    setIsOpen(!isOpen);
  }

  function onChange(ev) {
    const { name, value } = ev.target;
    setInputValue(prev => {
      return { ...prev, [name]: value };
    });
  }

  useEffect(() => {
    if (data.length === 0) {
      return;
    }
    const dataForFiltering = data.filter(el => el?.search && el?.visible);

    const filteredData = dataForFiltering.filter(el => {
      if (inputValue?.searchParam)
        return !(inputValue?.searchParam && !el?.title.toLowerCase().includes(inputValue?.searchParam.toLowerCase()));

      return true;
    });

    setFilteredData(filteredData);
  }, [data, inputValue, inputValue?.searchParam]);

  useEffect(() => {
    function onMenuClose(ev) {
      const { target, code } = ev;
      if (!target.closest('[data-select]')) setIsOpen(false);
      if (code === 'Escape') setIsOpen(false);
    }
    window.addEventListener('click', onMenuClose);
    window.addEventListener('keydown', onMenuClose);

    return () => {
      window.removeEventListener('click', onMenuClose);
      window.removeEventListener('keydown', onMenuClose);
    };
  }, []);

  return (
    <div className={[s.searchParamInputBox, isOpen && s.isOpen].join(' ')} onClick={handleToggleList} data-select>
      <div className={s.svgIconBox} onClick={handleToggleList}>
        <SvgIcon iconId={iconId.arrowDown} className={s.svgIcon} size="18px" />
      </div>

      <input
        type="text"
        className={s.searchParamInput}
        placeholder="Параметр"
        name="searchParam"
        defaultValue={defaultValue || inputValue?.searchParam}
        onChange={onChange}
      />

      <div className={isOpen ? s.listOpen : s.list}>
        {filteredData.length > 0 &&
          filteredData.map(item => (
            <div
              key={item?.id}
              className={s.listItem}
              onClick={() => {
                onSelect && onSelect(item);
                handleToggleList();
              }}
            >
              <div>{item?.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchParamInput;
