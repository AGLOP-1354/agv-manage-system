import { useState } from "react";
import {
  Button,
  Layout,
  Menu,
} from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
  EditOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined, QuestionCircleFilled,
  ScheduleOutlined,
  SettingOutlined,
  StarFilled, TruckFilled,
} from '@ant-design/icons';

import NscareLogo from '../shared/images/Nscare_logo.png';

import './index.scss';
import {useNavigate} from "react-router-dom";

const { Sider } = Layout;

const MENU_List = [
  {
    key: 'dashboard',
    icon: <AppstoreOutlined />,
    label: '대시보드',
  }, {
    key: 'vehicles',
    icon: <TruckFilled />,
    label: '차량',
  }, {
    key: 'schedule',
    icon: <ScheduleOutlined />,
    label: '스케줄',
  }, {
    key: 'manualOrder',
    icon: <EditOutlined />,
    label: '수동주문',
  }, {
    key: 'parameter',
    icon: <StarFilled />,
    label: '??',
  }, {
    key: 'historyOrder',
    icon: <CalendarOutlined />,
    label: '이력 순서',
  }, {
    key: 'orderGraph',
    icon: <LineChartOutlined />,
    label: '그래프 순서',
  }, {
    key: 'setting',
    icon: <SettingOutlined />,
    label: '설정',
  }
]

const NavigationBar = props => {
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
        <div
          className="navigation-bar-header"
        >
          {!collapsed && <img width={32} src={NscareLogo} alt="nscare logo"/>}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(prev => !prev)}
          />
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys={[MENU_List[0].key]}
          items={MENU_List}
          onClick={({ key }) => navigate(`/${key}`)}
        />
      </div>

      <div
        className="help"
      >
        <QuestionCircleFilled/>
        Help
      </div>
    </Sider>
  );
};

NavigationBar.propTypes = {};

export default NavigationBar;
