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
            },
            {
              title: "LastName",
              dataIndex: "lastName",
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
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
