import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
