import { useContext, createContext, useRef, useState } from 'react';
// import cloneDeep from 'lodash.clonedeep';
// import { useSelector } from 'react-redux';
// import { selectPosts } from 'redux/selectors';
// import { applyFounder } from 'components/BlockWithList/BlockUtils/founder';
// import { useBlock } from 'components/Block/BlockContext';
import ts from './TableList.module.scss';

export const TableCNTXT = createContext();
export const useTable = () => useContext(TableCNTXT);

const TableContext = ({ children, value }) => {
  const { tableTitles = [] } = value;
  const [selectedRows, setSelectedRows] = useState([]);
  const rowRef = useRef();

  const rowGrid = {
    display: 'grid',
    gridTemplateColumns: `repeat(${tableTitles.length}, min-content)`,
  };

  function onSelectRow({ ev, rowData }) {
    setSelectedRows(prev => [rowData, ...prev]);
  }
  function onUnselectRow({ ev, rowData }) {
    setSelectedRows(prev => prev.filter(row => row?._id !== rowData?._id));
  }

  const CTX = {
    ts,
    rowGrid: rowGrid,
    rowRef,
    selectedRows,
    onSelectRow,
    onUnselectRow,
    ...value,
  };

  return <TableCNTXT.Provider value={CTX}>{children}</TableCNTXT.Provider>;
};

export default TableContext;
