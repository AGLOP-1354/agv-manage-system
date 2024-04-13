import { useState } from 'react';
import { Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useRecoilState } from 'recoil';

import NsquareLogo from '../shared/images/Nsquare_logo.png';
import { themeState } from '../stores/theme';
import {
  StyledMenu,
} from './styledComponent';
import { navigationMenuKeyState } from '../stores/atoms/navigationMenuKey';
import { MENU_List } from './constants';

import './index.scss';

const { Sider } = Layout;

const NavigationBar = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useRecoilState(navigationMenuKeyState);
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
          selectedKeys={[selectedMenuKey]}
          items={MENU_List}
          onClick={({ key }) => {
            setSelectedMenuKey(key);
            navigate(`/${key}`);
          }}
        />
      </div>
    </Sider>
  );
};

NavigationBar.propTypes = {};

export default NavigationBar;
