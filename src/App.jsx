import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from 'antd';
import { useRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { THEME_FLAG, themeState } from './stores/theme';
import { darkTheme, lightTheme } from './shared/styles/theme';
import GlobalStyle from './shared/styles/global';
import {
  StyledLayout,
} from './shared/styles/styledComponent/Layout';

const ThemeSwitch = lazy(() => import('./pages/components/ThemeSwitch'));
const NavigationBar = lazy(() => import('./navigationBar'));
const DashBoard = lazy(() => import('./pages/dashboard'));
const HistoryOrder = lazy(() => import('./pages/HistoryOrder'));
const PreparePage = lazy(() => import('./pages/exception/Prepare'));

const { Content } = Layout;

// url 경로별로 어떤 코드를 보여줄지 설정
const routeComponentList = [
  {
    path: '/',
    component: <div />,
  },
  {
    path: '/dashboard',
    component: <DashBoard />,
  },
  {
    path: '/vehicles',
    component: <PreparePage />,
  },
  {
    path: '/schedule',
    component: <PreparePage />,
  },
  {
    path: '/manualOrder',
    component: <PreparePage />,
  },
  {
    path: '/parameter',
    component: <PreparePage />,
  },
  {
    path: '/historyOrder',
    component: <HistoryOrder />,
  },
  {
    path: '/orderGraph',
    component: <PreparePage />,
  },
  {
    path: '/setting',
    component: <PreparePage />,
  },
  {
    path: '/layout',
    component: <PreparePage />,
  }
];

const RouteComponent = ({ routeComponent }) => (
  <StyledLayout>
    <ThemeSwitch />

    <NavigationBar />

    <Content>{routeComponent}</Content>
  </StyledLayout>
);
RouteComponent.propTypes = {
  routeComponent: PropTypes.node,
};

function App() {
  const [currentTheme] = useRecoilState(themeState);
  const theme = currentTheme === THEME_FLAG.LIGHT ? lightTheme : darkTheme;

  return (
    <Suspense fallback="잠시만 기다려주세요.">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {routeComponentList.map(({ path, component: routeComponent }) => (
              <Route key={path} path={path} element={<RouteComponent routeComponent={routeComponent} />} />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
