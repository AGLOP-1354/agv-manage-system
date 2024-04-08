import styled from 'styled-components';
import { DatePicker } from 'antd';

const StyledDashboard = styled.div`
  background-color: ${({ theme }) => theme.colors.bg_100};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
`;

const StyledDashboardTitle = styled.div`
  color: ${({ theme }) => theme.colors.text_100};
  width: fit-content;
  font-weight: bold;
  font-size: 24px;
`;

const StyledDashboardDatePicker = styled(DatePicker)`
  width: fit-content;
`;

export {
  StyledDashboard,
  StyledDashboardTitle,
  StyledDashboardDatePicker,
};
