import React from 'react';
import CustomTable from './dynamicTable';
import { Button } from 'antd';

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
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
          <Button 
            type="link" 
            onClick={() => console.log('Edit', record)}
          >
            Edit
          </Button>
      )
    }
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

  return (
    <div>
      <CustomTable
        header="Users"
        columns={columns}
        dataSource={data}
        rowKey="key"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default User;
