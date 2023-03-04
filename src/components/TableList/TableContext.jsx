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
  const { tableTitles = [], tableData = [], prepeareRowData } = value;
  const rowRef = useRef();

  const rowGrid = {
    display: 'grid',

    gridTemplateColumns: `min-content repeat(${tableTitles.length}, min-content)`,
  };

  return (
    <TableCNTXT.Provider
      value={{
        ts,
        rowGrid: rowGrid,
        tableData,
        tableTitles,
        prepeareRowData,
        rowRef,
        ...value,
      }}
    >
      {children}
    </TableCNTXT.Provider>
  );
};

export default TableContext;
