import styled from 'styled-components';
import { Menu } from 'antd';

const StyledMenu = styled(Menu)`
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;

  .anticon {
    padding: 8px;
    background: ${({ theme }) => theme.colors.bg_200};
    border-radius: 4px;
  }

  .ant-menu-item {
    color: ${({ theme }) => theme.colors.text_100};
  }

  .ant-menu-item-selected {
    background: transparent;
    color: ${({ theme }) => theme.colors.text_100};

    .anticon {
      background: ${({ theme }) => theme.colors.primary_100};
    }
  }
`;

export {
  StyledMenu,
};
