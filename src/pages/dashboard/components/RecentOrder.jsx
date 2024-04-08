import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PropTypes from 'prop-types';

import { columns } from '../constants';
import {
  RecentOrderTitle,
  RecentOrderTable,
} from '../../../shared/styles/styledComponent/RecentOrder';

const RecentOrder = ({ selectedDate }) => {
  const { data: orderList = [], isLoading } = useQuery({
    queryKey: ['RECENT_ORDER', selectedDate],
    queryFn: async () => {
      const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:52273/recent-order/list',
        params: {
          startDate: selectedDate + ' 00:00:00',
          endDate: selectedDate + ' 23:59:59',
        },
      });
      if (!response || !response.data || !response.data.data) return [];
      return response.data.data;
    },
  });

  return (
    <div>
      <RecentOrderTitle>Recent Order</RecentOrderTitle>

      <RecentOrderTable
        columns={columns}
        dataSource={orderList}
        loading={isLoading}
        pagination={{
          pageSize: 4,
          simple: true,
        }}
      />
    </div>
  );
};
RecentOrder.propTypes = {
  selectedDate: PropTypes.string,
};

export default RecentOrder;
