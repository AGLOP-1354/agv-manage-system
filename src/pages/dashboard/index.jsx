import {
  ApiOutlined,
  OneToOneOutlined,
  ProjectOutlined,
} from "@ant-design/icons";

import './index.scss';

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
  return (
    <div className="Dashboard">
      <div className="dashboard-header">
        Dashboard
      </div>

      <div className="total-info-template-container">
        {data.map(({ title, result, icon }) => (
          <TotalInfoTemplate title={title} result={result} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
