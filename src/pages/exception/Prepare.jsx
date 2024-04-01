import { Spin } from 'antd';

const PrePare = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 24,
        fontSize: 36,
        top: '50%',
      }}
    >
      <Spin spinning={true} size="large" />
      준비중입니다...
    </div>
  );
};

export default PrePare;
