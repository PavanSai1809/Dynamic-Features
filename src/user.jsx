import React from 'react';
import CustomTable from './dynamicTable';

const User = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  const handleRowClick = (record) => {
    console.log('Row clicked:', record);
  };

  return (
    <div>
      {/* <h1>Custom Table Example</h1> */}
      <CustomTable
        columns={columns}
        dataSource={data}
        rowKey="key"
        onRowClick={handleRowClick}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default User;
