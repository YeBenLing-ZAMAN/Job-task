import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { oneProduct } from "../../../assets/DashboardData/DashboardData";

const OrderLists = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(oneProduct?.products);
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
};
export default OrderLists;
