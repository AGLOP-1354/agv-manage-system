import {useState} from "react";
import dayjs from 'dayjs';
import {DatePicker} from "antd";

import RecentOrder from './components/RecentOrder';
import OrderCountContainer from "./components/OrderCountContainer";

import './index.scss';

const FORMAT_DATE = 'YYYY-MM-DD';

const DashBoard = props => {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const onDateChange = (date, dateString) => setSelectedDate(dayjs(dateString).format('YYYY-MM-DD'));

  return (
    <div className="Dashboard">
      <div className="dashboard-header">
        Dashboard
      </div>

      <DatePicker
        value={dayjs(selectedDate, FORMAT_DATE)}
        onChange={onDateChange}
        allowClear={false}
      />

      <OrderCountContainer selectedDate={selectedDate} />

      <RecentOrder selectedDate={selectedDate} />
    </div>
  );
};

export default DashBoard;
