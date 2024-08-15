import React from 'react';
import { Table } from 'antd';

const CustomTable = ({
  columns,
  dataSource,
  rowKey,
  pagination,
  className,
  header,
  footer,
  scroll,
  rowSelection,
  expandable,
}) => {

  return (
    <div>
      {header && <h2>{header}</h2>}
      <Table
        className={className}
        columns={columns}
        dataSource={dataSource}
        rowKey={rowKey}
        pagination={pagination}
        footer={footer ? () => footer : null}
        scroll={scroll}
        rowSelection={rowSelection}
        expandable={expandable}
      />
    </div>
  );
};

export default CustomTable;
