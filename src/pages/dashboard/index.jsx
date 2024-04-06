import { useState } from 'react';
import dayjs from 'dayjs';

import RecentOrder from './components/RecentOrder';
import OrderCountContainer from './components/OrderCountContainer';

import {
  StyledDashboard,
  StyledDashboardTitle,
  StyledDashboardDatePicker,
} from '../../shared/styles/styledComponent/Dashboard';

const FORMAT_DATE = 'YYYY-MM-DD';

const DashBoard = () => {
  // const [state, setState] = useState(기본 값);
  // state = 값이 담기는 장소
  // setState = state를 변경해주는 함수
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const onDateChange = (date, dateString) =>
    setSelectedDate(dayjs(dateString).format('YYYY-MM-DD'));

  return (
    <StyledDashboard>
      <StyledDashboardTitle>Dashboard</StyledDashboardTitle>

      <StyledDashboardDatePicker
        value={dayjs(selectedDate, FORMAT_DATE)}
        onChange={onDateChange}
        allowClear={false}
      />

      <OrderCountContainer selectedDate={selectedDate} />

      <RecentOrder selectedDate={selectedDate} />
    </StyledDashboard>
  );
};

export default DashBoard;
