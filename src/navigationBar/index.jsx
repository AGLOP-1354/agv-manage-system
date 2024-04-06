import { useState } from 'react';
import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  CalendarOutlined,
  EditOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
  SettingOutlined,
  StarFilled,
  DesktopOutlined,
  TruckFilled,
} from '@ant-design/icons';
import { useRecoilState } from 'recoil';

import NsquareLogo from '../shared/images/Nsquare_logo.png';
import { themeState } from '../stores/theme';
import {
  StyledMenu,
} from './styledComponent';

import './index.scss';

const { Sider } = Layout;

const MENU_List = [
  {
    key: 'dashboard',
    icon: <AppstoreOutlined />,
    label: 'DashBoard',
  },
  {
    key: 'layout',
    icon: <DesktopOutlined />,
    label: 'Layout',
  },
  {
    key: 'vehicles',
    icon: <TruckFilled />,
    label: 'Vehicles',
  },
  {
    key: 'schedule',
    icon: <ScheduleOutlined />,
    label: 'Schedule',
  },
  {
    key: 'manualOrder',
    icon: <EditOutlined />,
    label: 'ManualOrder',
  },
  {
    key: 'parameter',
    icon: <StarFilled />,
    label: 'Parameter',
  },
  {
    key: 'historyOrder',
    icon: <CalendarOutlined />,
    label: 'HistoryOrder',
  },
  {
    key: 'orderGraph',
    icon: <LineChartOutlined />,
    label: 'TaskGraph',
  },
  {
    key: 'setting',
    icon: <SettingOutlined />,
    label: 'Setting',
  },
];

const NavigationBar = () => {
  const [theme] = useRecoilState(themeState);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider
      className="NavigationBar"
      theme={theme}
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      collapsedWidth={110}
      lightSiderBg="#000"
    >
      <div className="top-content-container">
        <div className="navigation-bar-header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed((prev) => !prev)}
          />
          {!collapsed && <img width={32} src={NsquareLogo} alt="nsquare logo" />}
        </div>

        <StyledMenu
          mode="inline"
          defaultSelectedKeys={[MENU_List[0].key]}
          items={MENU_List}
          onClick={({ key }) => navigate(`/${key}`)}
        />
      </div>
    </Sider>
  );
};

NavigationBar.propTypes = {};

export default NavigationBar;
