import { useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';

import RecentOrder from './components/HistoryOrder';
// import OrderCountContainer from './components/OrderCountContainer';

import {
  StyledDashboard,
  StyledDashboardTitle,
  StyledDashboardDatePicker,
} from '../../shared/styles/styledComponent/Dashboard';


import './index.scss';

const FORMAT_DATE = 'YYYY-MM-DD';

const DashBoard = () => {
  // const [state, setState] = useState(기본 값);
  // state = 값이 담기는 장소
  // setState = state를 변경해주는 함수
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
 
  const onDateChange = (date, dateString) =>
    setSelectedDate(dayjs(dateString).format('YYYY-MM-DD'));

  return (
    // <div className="Dashboard">
    //   <div className="dashboard-header">History-Order</div>

    //   <DatePicker
    //     value={dayjs(selectedDate, FORMAT_DATE)}
    //     onChange={onDateChange}
    //     allowClear={false}
    //   />

    //   {/* <OrderCountContainer selectedDate={selectedDate} /> */}

    //   <RecentOrder selectedDate={selectedDate} />
    // </div>

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
