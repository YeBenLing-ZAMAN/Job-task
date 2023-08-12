import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { allProducts } from "../../../assets/DashboardData/DashboardData";

const ProductsList = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(allProducts?.products);
  }, []);

  return (
    <span className="block overflow-hidden">
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Table
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              width: 200,
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "Title",
              dataIndex: "title",
              width: 200,
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
              width: 200,
              sorter: (a, b) => a.price - b.price,
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
              width: 200,
              sorter: (a, b) => a.rating - b.rating,
            },
            {
              title: "Stock",
              dataIndex: "stock",
              width: 200,
              sorter: (a, b) => a.stock - b.stock,
            },

            {
              title: "Brand",
              dataIndex: "brand",
              width: 200,
            },
            {
              title: "Category",
              dataIndex: "category",
              width: 200,
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </span>
  );
};
export default ProductsList;
