import { Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { oneProduct } from "../../../assets/DashboardData/DashboardData";

const OrderLists = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(oneProduct?.products);
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: 500,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => <span>${value}</span>,
      sorter: (a, b) => a.price - b.price,
      width: 200,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
      width: 200,
    },
    {
      title: "Total",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
      width: 200,
    },
  ];

  return (
    <>
      <Typography.Title level={3}>Orders</Typography.Title>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </>
  );
};
export default OrderLists;
