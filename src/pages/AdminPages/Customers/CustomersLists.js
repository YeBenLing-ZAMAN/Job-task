import { Table, Form, Avatar, Typography } from "antd";
import { useEffect, useState } from "react";
import { allCustomers } from "../../../assets/DashboardData/DashboardData";
function CustomersLists() {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(allCustomers?.users);
  }, []);

  const columns = [
    {
      title: "Photo",
      dataIndex: "image",
      render: (link) => {
        return <Avatar src={link} />;
      },
      width: 80,
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
      width: 300,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Typography.Title level={3}>Customers List</Typography.Title>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{
              pageSize: 5,
            }}
          ></Table>
        </Form>
      </header>
    </div>
  );
}

export default CustomersLists;
