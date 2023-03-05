import { appSettings, createActions, directories, iconId, raports } from 'data';
import { createContext, useContext, useState } from 'react';

export const SideBarCTX = createContext();
export const useSideBar = () => useContext(SideBarCTX);

const sideBarButtons = [
  { iconId: iconId.folder, options: directories, title: 'Довідники' },
  { iconId: iconId.assignmentOutlined, options: raports, title: 'Звіти' },
  { iconId: iconId.statistics, options: [], title: 'Статистика' },
  { iconId: iconId.plus, options: createActions, title: 'Створення' },
  // { iconId: iconId.settings, options: [], title: 'Налаштування' },
];
const settingsOptionsItem = { iconId: iconId.settings, options: appSettings, title: 'Налаштування' };

const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [options, setOptions] = useState(null);

  function onTogglerClick() {
    setIsOpen(!isOpen);
    handleOptionsState();
  }

  function handleOptionsState(newOptions) {
    if (!newOptions) {
      return setOptions(null);
    }
    setOptions(prev => (prev === newOptions ? null : newOptions));
  }

  const CTX = { isOpen, options, onTogglerClick, handleOptionsState, sideBarButtons, settingsOptionsItem };

  return (
    <SideBarCTX.Provider value={CTX}>
      <>{children}</>
    </SideBarCTX.Provider>
  );
};

export default SideBarProvider;
