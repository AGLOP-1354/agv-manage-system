import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiOutlined, OneToOneOutlined, ProjectOutlined } from '@ant-design/icons';

import '../styles/OrderCountContainer.scss';

const data = [
  {
    title: 'Today Order',
    type: 'RECEIVE_TIME',
    icon: <OneToOneOutlined />,
  },
  {
    title: 'Complete Order',
    type: 'COMPLETE_TIME',
    icon: <ProjectOutlined />,
  },
  {
    title: 'Input Avg',
    type: 'ACTIVE_TIME',
    icon: <ApiOutlined />,
  },
];

const TotalInfoTemplate = ({ title, icon, date, type }) => {
  const { data: recentOrderCounts = 0 } = useQuery({
    queryKey: ['RECENT_ORDER_COUNTS', date, type],
    queryFn: async () => {
      const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:52273/recent-order/counts',
        params: {
          startDate: date + ' 00:00:00',
          endDate: date + ' 23:59:59',
          type,
        },
      });
      if (!response || !response.data || !response.data.data) return 0;

      return response.data.data;
    },
  });

  return (
    <div className="TotalInfoTemplate">
      <span className="total-info-frame-icon">{icon}</span>

      <div>
        <span className="total-info-frame-title">{title}</span>
        <br />
        <br />
        <span className="total-info-frame-result">{recentOrderCounts}</span>
      </div>

      <span className="total-info-frame-time">Last 24 Hour</span>
    </div>
  );
};
TotalInfoTemplate.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  date: PropTypes.string,
  type: PropTypes.string,
};

const OrderCountContainer = ({ selectedDate }) => {
  return (
    <div className="OrderCountContainer">
      <div className="total-info-template-container">
        {data?.map(({ title, icon, type }) => (
          <TotalInfoTemplate
            key={`${title}-${selectedDate}`}
            date={selectedDate}
            title={title}
            icon={icon}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};
OrderCountContainer.propTypes = {
  selectedDate: PropTypes.string,
};

export default OrderCountContainer;
