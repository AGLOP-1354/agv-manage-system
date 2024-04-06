import React from 'react';
import { useRecoilState } from 'recoil';
import { Switch } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

import { THEME_FLAG, themeState } from '../../stores/theme';

import './ThemeSwitch.scss';

const ThemeSwitch = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleClick = () => {
    const targetTheme = theme === THEME_FLAG.LIGHT ? THEME_FLAG.DARK : THEME_FLAG.LIGHT;

    setTheme(targetTheme);
  };

  return (
    <Switch
      className="ThemeSwitch"
      value={theme === THEME_FLAG.LIGHT}
      onClick={handleClick}
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}
    />
  );
};

export default ThemeSwitch;
