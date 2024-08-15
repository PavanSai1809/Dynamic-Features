import React from 'react';
import CustomTable from './dynamicTable';

const UserList = () => {
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
  ];

  const expandable = {
    expandedRowRender: (record) => <p>{record.email}</p>,
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div>
      <CustomTable
        header="User Information"
        columns={columns}
        dataSource={data}
        rowKey="key"
        pagination={{ pageSize: 5 }}
        footer="End of user list"
        scroll={{ y: 240 }}
        rowSelection={rowSelection}
        expandable={expandable}
      />
    </div>
  );
};

export default UserList;
