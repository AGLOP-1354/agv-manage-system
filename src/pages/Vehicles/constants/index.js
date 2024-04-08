const defaultRenderer = (text) => text || '_';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render:defaultRenderer,        
    },
    {
        title: 'Delete',
        dataIndex: 'is_deleted',
        key: 'is_deleted',
        render:defaultRenderer,
    },
    {
        title: 'Precall',
        dataIndex: 'precall',
        key: 'precall',
        render:defaultRenderer,
    },
    {
        title: 'MaxLoadPort',
        dataIndex: 'max_load_port',
        key: 'max_load_port',
        render:defaultRenderer,
    },
    {
        title: 'VehiclePort',
        dataIndex: 'vehicle_port',
        key: 'vehicle_port',
        render:defaultRenderer,
    },
    {
        title: 'VehicleType',
        dataIndex: 'vehicle_type',
        key: 'vehicle_type',
        render:defaultRenderer,
    },
    {
        title: 'AGVName',
        dataIndex: 'name',
        key:'name',
        render:defaultRenderer,
    },
    {
        title: 'HostName',
        dataIndex: 'host_name',
        key: 'host_name',
        render:defaultRenderer,
    },
    {
        title: 'VehicleIP',
        dataIndex: 'vehicle_ip',
        key: 'vehicle_ip',
        render:defaultRenderer,
    },
];

export {columns};


