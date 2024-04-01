import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const NavigationBar = lazy(() => import('./navigationBar'));
const DashBoard = lazy(() => import('./pages/dashboard'));
const PreparePage = lazy(() => import('./pages/exception/Prepare'));

const { Content } = Layout;

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
    component: <PreparePage />,
  },
  {
    path: '/orderGraph',
    component: <PreparePage />,
  },
  {
    path: '/setting',
    component: <PreparePage />,
  },
];

const RouteComponent = ({ routeComponent }) => (
  <Layout
    style={{
      display: 'flex',
      background: '#fffefb',
    }}
  >
    <NavigationBar />

    <Content>{routeComponent}</Content>
  </Layout>
);
RouteComponent.propTypes = {
  routeComponent: PropTypes.node,
};

function App() {
  return (
    <Suspense fallback="잠시만 기다려주세요.">
      <BrowserRouter>
        <Routes>
          {routeComponentList.map(({ path, component: routeComponent }) => (
            <Route key={path} path={path} element={<RouteComponent routeComponent={routeComponent} />} />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
