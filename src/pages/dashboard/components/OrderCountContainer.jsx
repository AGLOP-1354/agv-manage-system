import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ApiOutlined, OneToOneOutlined, ProjectOutlined } from '@ant-design/icons';

import {
  StyledTotalInfoTemplateContainer,
  StyledTotalInfoTemplate,
  StyledTotalInfoFrameIcon,
  StyledTotalInfoFrameTitle,
  StyledTotalInfoFrameResult,
} from '../../../shared/styles/styledComponent/OrderCountContainer';

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
  // {
  //   title: 'Input AGV',
  //   type: 'ACTIVE_TIME',
  //   icon: <ApiOutlined />,
  // },
];

//20240408 추가
const agv = [
  {
    title: 'Input AGV',
    type : 'ACTIVE_TIME',
    icon: <ApiOutlined />,
  }
]

const TotalInfoTemplate = ({ title, icon, date, type }) => {
  // 날짜별 들어온 Row 개수 가져오는 api 실행 함수
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
    <StyledTotalInfoTemplate>
      <StyledTotalInfoFrameIcon>{icon}</StyledTotalInfoFrameIcon>

      <div>
        <StyledTotalInfoFrameTitle>{title}</StyledTotalInfoFrameTitle>
        <br />
        <br />
        <StyledTotalInfoFrameResult>{recentOrderCounts}</StyledTotalInfoFrameResult>
      </div>
    </StyledTotalInfoTemplate>
  );
};


const InputAGV = ({ title, icon, date, type }) => {
  // 현재 Vehicle테이블에서 is_dleeted가 1인 것만 표시 ** 20240408추가
  const { data: recentOrderCounts = 0 } = useQuery({
    queryKey: ['RECENT_ORDER_COUNTS', date, type],
    queryFn: async () => {
      const response = await axios({
        method: 'get',
        url: 'http://127.0.0.1:52273/recent-order/inputAGV',
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

      <span className="total-info-frame-time"></span>
    </div>
  );
};




TotalInfoTemplate.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  date: PropTypes.string,
  type: PropTypes.string,
};

InputAGV.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  date: PropTypes.string,
  type: PropTypes.string,
  a: PropTypes.string,

};


const OrderCountContainer = ({ selectedDate }) => {
  return (
    <div>
      <StyledTotalInfoTemplateContainer>
        {data?.map(({ title, icon, type }) => (
          <TotalInfoTemplate
            key={`${title}-${selectedDate}`}
            date={selectedDate}
            title={title}
            icon={icon}
            type={type}
          />
        ))}
        {/* 20240408 추가 */}
         {agv?.map(({ title, icon, type, a}) => (
          <InputAGV
            key={`${title}-${selectedDate}`}
            date={selectedDate}
            title={title}
            icon={icon}
            type={type}
            
          />
        ))}
      </StyledTotalInfoTemplateContainer>
      </div>    
  );
};
OrderCountContainer.propTypes = {
  selectedDate: PropTypes.string,
};

export default OrderCountContainer;
