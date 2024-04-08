import { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
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

import NsquareLogo from '../shared/images/Nsquare_logo.png';


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
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider
      className="NavigationBar"
      theme="light"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={300}      
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
        
        <Menu
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
