const defaultRenderer = (text) => text || '_';

const columns_p = [
    {
        title: 'PointID',
        dataIndex: 'id',
        key: 'point_id',
        render: defaultRenderer,
    },
    {
        title: 'Xcoord',
        dataIndex: 'xcoord',
        key: 'xcoord',
        render: defaultRenderer,
    },
    {
        title: 'ycoord',
        dataIndex: 'ycoord',
        key: 'ycoord',
        render: defaultRenderer,
    },
    {
        title: 'Theta',
        dataIndex: 'theta',
        key: 'theta',
        render:defaultRenderer,
    },
    {
        title: 'Angle_Offset',
        dataIndex: 'angle_offset',
        key: 'angle_offset',
        render:defaultRenderer,
    },
    {
        title: 'Value1',
        dataIndex: 'value1',
        key: 'value1',
        render:defaultRenderer,
    },
    {
        title: 'Value2',
        dataIndex: 'value2',
        key: 'value2',
        render:defaultRenderer,
    },
    {
        title: 'Value3',
        dataIndex: 'value3',
        key: 'value3',
        render:defaultRenderer,
    },
    {
        title: 'Intersection_Count',
        dataIndex: 'intersection_count',
        key: 'intersection_count',
        render:defaultRenderer,
    },
    {
        title: 'Invisible',
        dataIndex: 'invisible',
        key: 'invisible',
        render:defaultRenderer,
    },
    {
        title: 'Remark',
        dataIndex: 'remark',
        key: 'remark',
        render:defaultRenderer,
    },
    {
        title: 'Create_time',
        dataIndex: 'create_time',
        key: 'create_time',
        render:defaultRenderer,
    },
    {
        title: 'Change_time',
        dataIndex: 'change_time',
        key: 'change_time',
        render:defaultRenderer,
    },
];

export {columns_p};