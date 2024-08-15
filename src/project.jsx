
import React from 'react';
import CustomTable from './dynamicTable';

const Project = () => {
  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  const data = [
    {
      key: '1',
      username: 'john_doe',
      email: 'john.doe@example.com',
      role: 'Admin',
    },
    {
      key: '2',
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      role: 'User',
    },
    {
      key: '3',
      username: 'sam_jones',
      email: 'sam.jones@example.com',
      role: 'User',
    },
  ];

  const handleRowClick = (record) => {
    console.log('User row clicked:', record);
  };

  return (
    <div>
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

export default Project;                                                                        
