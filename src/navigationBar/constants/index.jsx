import {
  AppstoreOutlined, CalendarOutlined,
  DesktopOutlined,
  EditOutlined, LineChartOutlined,
  ScheduleOutlined, SettingOutlined,
  StarFilled,
  TruckFilled
} from '@ant-design/icons';

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

export {
  MENU_List,
};
