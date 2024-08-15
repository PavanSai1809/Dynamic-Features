import React from 'react';
import { Table } from 'antd';

const CustomTable = ({ columns, dataSource, rowKey, onRowClick, pagination, className }) => {
  const onRow = (record, rowIndex) => {
    return {
      onClick: () => {
        if (onRowClick) {
          onRowClick(record, rowIndex);
        }
      }
    };
  };

  return (
    <Table
      className={className}
      columns={columns}
      dataSource={dataSource}
      rowKey={rowKey}
      onRow={onRow}
      pagination={pagination}
      bordered
    />
  );
};

export default CustomTable;
