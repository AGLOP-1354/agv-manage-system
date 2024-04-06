import styled from 'styled-components';
import { Layout } from 'antd';

const StyledLayout = styled(Layout)`
  display: flex;
  background: ${({ theme }) => theme.colors.bg_100};;
`;

export {
  StyledLayout,
};
