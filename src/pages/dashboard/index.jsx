import {
  ApiOutlined,
  OneToOneOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import axios from 'axios';

import './index.scss';
import { useEffect, useState } from "react";

const data = [
  {
    title: 'Today Order',
    result: 123,
    icon: <OneToOneOutlined />
  }, {
    title: 'Complete Order',
    result: 123,
    icon: <ProjectOutlined />
  }, {
    title: 'Input Avg',
    result: 123,
    icon: <ApiOutlined />
  }
]

const TotalInfoTemplate = ({ title, result, icon }) => (
  <div className="TotalInfoTemplate">
    {icon}
    <span>{title}</span>
    <span>{result}</span>
    <span>Last 24 Hour</span>
  </div>
)

const DashBoard = props => {
  const [orderList, setOrderList] = useState([]);
  const fetch = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://127.0.0.1:52273',
    });
    if (!response || !response.data || !response.data.data) return;
    setOrderList(response.data.data);
  };
  // const fetch2 = async () => {
  //   const response = await axios({
  //     method: 'get',
  //     url: 'http://127.0.0.1:52273/dashboard/order-count',
  //   });
  //   console.log(response);
  // };
  useEffect(() => {
    fetch();
    // fetch2();
  }, []);

  return (
    <div className="Dashboard">
      <div className="dashboard-header">
        Dashboard
      </div>

      <div className="total-info-template-container">
        {data.map(({ title, result, icon }) => (
          <TotalInfoTemplate title={title} result={result} icon={icon} />
        ))}
        {
          orderList?.map(order => <div>{JSON.stringify(order)}</div>)
        }
      </div>
    </div>
  );
};

export default DashBoard;
