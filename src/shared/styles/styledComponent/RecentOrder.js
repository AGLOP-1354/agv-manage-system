import styled from 'styled-components';
import { Table } from 'antd';

const RecentOrderTitle = styled.div`
  color: ${({ theme }) => theme.colors.text_100};
  width: fit-content;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const RecentOrderTable = styled(Table)`
  border-radius: 24px;
  overflow: auto;
  text-wrap: nowrap;
`;

export {
  RecentOrderTitle,
  RecentOrderTable,
};
