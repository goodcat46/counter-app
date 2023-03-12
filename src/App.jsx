import { Suspense } from 'react';
import Layout from 'components/Layout/Layout';
import AppRoutes from 'components/AppRoutes/AppRoutes';
import AppLoader from 'components/AppLoader/AppLoader';
import SideBarProvider from 'components/Layout/SideBarLeft/SideBarProvider';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getAppSettings } from 'redux/selectors.store';
import styled from 'styled-components';

const App = () => {
  const { isDarkMode } = useSelector(getAppSettings);

  // useEffect(() => {
  //   const body = document.querySelector('body');
  //   if (isDarkMode) {
  //     body.classList.remove('Light');
  //     body.classList.add('Dark');
  //     return;
  //   }
  //   if (!isDarkMode) {
  //     body.classList.remove('Dark');
  //     body.classList.add('Light');
  //     return;
  //   }
  // });
  return (
    <>
      <AppContainer>
        <Suspense fallback={<AppLoader isLoading />}>
          <SideBarProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </SideBarProvider>
        </Suspense>
      </AppContainer>

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        limit={7}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? 'light' : 'dark'}
      />
    </>
  );
};

const AppContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
  max-height: 100%;
`;
export default App;
