import React from 'react';
import { useSelector } from 'react-redux';
import { countsSelector } from 'redux/selectors.store';
import Count from './Count/Count';

import s from './TableCounts.module.scss';

const TableCounts = props => {
  const { counts = [] } = useSelector(countsSelector);

  const owners = counts.filter(el => !el.owner);

  return (
    <>
      <div className={[s.container, 'theme'].join(' ')}>
        <div className={s.countsTable}>
          {owners.map(count => {
            return <Count key={count._id} {...{ counts, count }} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TableCounts;
