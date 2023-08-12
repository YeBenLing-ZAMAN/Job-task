import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { allCustomers } from "../../../assets/DashboardData/DashboardData";

const CustomersList = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(allCustomers?.users);
  }, []);

  return (
    <div className="w-full">
      <Space size={20} direction="vertical">
        <Typography.Title level={6}>Customers</Typography.Title>
        <Table
          columns={[
            {
              title: "Photo",
              dataIndex: "image",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "First Name",
              dataIndex: "firstName",
              width: 300,
            },
            {
              title: "LastName",
              dataIndex: "lastName",
              width: 150,
            },
            {
              title: "Email",
              dataIndex: "email",
              width: 150,
            },
            {
              title: "Phone",
              dataIndex: "phone",
              width: 150,
            },
            {
              title: "address",
              dataIndex: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
              width: 500,
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
};

export default CustomersList;
