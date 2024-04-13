import { useState } from 'react';
import dayjs from 'dayjs';

import RecentOrder from './components/HistoryOrder';
import {
  StyledDashboard,
  StyledDashboardTitle,
  StyledDashboardDatePicker,
} from '../../shared/styles/styledComponent/Dashboard';

import './index.scss';

const FORMAT_DATE = 'YYYY-MM-DD';

const DashBoard = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const onDateChange = (date, dateString) =>
    setSelectedDate(dayjs(dateString).format('YYYY-MM-DD'));

  return (
    <StyledDashboard>
      <StyledDashboardTitle>History-Order</StyledDashboardTitle>
      <StyledDashboardDatePicker
        value={dayjs(selectedDate, FORMAT_DATE)}
        onChange={onDateChange}
        allowClear={false}
      />
       <RecentOrder selectedDate={selectedDate} />
    </StyledDashboard>
  );
};

export default DashBoard;
