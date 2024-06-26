const defaultRenderer = (text) => text || '_';

/**
 * title: 테이블에 보여질 컬럼이름
 * dataIndex, key: 실제 db 컬렴이름
 * render: 볼 필요 없음
 * */

const columns = [
  {
    title: 'Vehicle Name',
    dataIndex: 'agv_id',
    key: 'agv_id',
    render: defaultRenderer,
  },
  {
    title: 'LotID',
    dataIndex: 'lot_id',
    key: 'lot_id',
    render: defaultRenderer,
  },
  {
    title: 'Order Type',
    dataIndex: 'order_type',
    key: 'order_type',
    render: defaultRenderer,
  },
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
    render: defaultRenderer,
  },
  {
    title: 'Dest',
    dataIndex: 'dest',
    key: 'dest',
    render: defaultRenderer,
  },
  {
    title: 'Receive Time',
    dataIndex: 'receive_time',
    key: 'receive_time',
    render: defaultRenderer,
  },
  {
    title: 'Active Time',
    dataIndex: 'active_time',
    key: 'active_time',
    render: defaultRenderer,
  },
  {
    title: 'Complete Time',
    dataIndex: 'complete_time',
    key: 'complete_time',
    render: defaultRenderer,
  },
];

export { columns };
