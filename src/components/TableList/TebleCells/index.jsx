import CellText from './CellText';
import CellCategory from './CellCategory';
import CellStatusApprove from './CellStatusApprove';
import CellStatusVisibility from './CellStatusVisibility';
import CellStatusAvailability from './CellStatusAvailability';
import CellStatusType from './CellStatusType';
import CellNumber from './CellNumber';
import CellTransactionDate from './CellTransactionDate';
import CellDateDbl from './CellDateDbl';
import CellDate from './CellDate';
import CellStatus from './CellStatus';
import CellCheckBox from './CellCheckBox';
import CellActions from './CellActions';
import CellTextNested from './CellTextNested';
import Cell from './Cell';

export const CellsMap = {
  actions: CellActions,
  checkbox: CellCheckBox,
  string: CellText,
  transactionDate: CellTransactionDate,
  date: CellDate,
  dateDbl: CellDateDbl,
  category: CellCategory,
  approvedStatus: CellStatusApprove,
  visibilityStatus: CellStatusVisibility,
  availabilityStatus: CellStatusAvailability,
  typeStatus: CellStatusType,
  number: CellNumber,
  status: CellStatus,
  cell: Cell,
  nested: CellTextNested,
};
