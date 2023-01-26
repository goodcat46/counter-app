import { useContext, createContext, useRef } from 'react';
// import cloneDeep from 'lodash.clonedeep';
// import { useSelector } from 'react-redux';
// import { selectPosts } from 'redux/selectors';
// import { applyFounder } from 'components/BlockWithList/BlockUtils/founder';
// import { useBlock } from 'components/Block/BlockContext';
import ts from './TableList.module.scss';

export const TableCNTXT = createContext();
export const useTable = () => useContext(TableCNTXT);

const TableContext = ({ children, value }) => {
  const { tableTitles = [], tableData = [], prepeareRowData, rowActions = true } = value;
  const prevRowRef = useRef();

  const rowGrid = {
    display: 'grid',

    gridTemplateColumns: rowActions ? `min-content repeat(${tableTitles.length}, min-content)` : `repeat(${tableTitles.length}, min-content)`,
  };

  return (
    <TableCNTXT.Provider
      value={{
        ts,
        rowGrid: rowGrid,
        tableData,
        tableTitles,
        prepeareRowData,
        prevRowRef,
        ...value,
      }}
    >
      {children}
    </TableCNTXT.Provider>
  );
};

export default TableContext;
