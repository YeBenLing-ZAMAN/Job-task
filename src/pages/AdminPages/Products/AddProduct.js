import { Form, Button, Input, Select, InputNumber } from "antd";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <h1 className="text-3xl font-bold mb-5">Add Product</h1>
      <div className="min-h-screen w-full md:w-1/2  bg-white text-white">
        <Form
          autoComplete="off"
          //   labelCol={{ span: 20 }}
          //   wrapperCol={{ span: 30 }}
          layout="vertical"
          onFinish={(values) => {
            setData(values);
          }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <Form.Item
            name="productName"
            label="Product Name"
            rules={[
              {
                required: true,
                message: "Please enter product name",
              },
              { whitespace: true },
            ]}
            hasFeedback
          >
            <Input placeholder="Type product name" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            rules={[
              {
                required: true,
                message: "Please enter product category",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your category" />
          </Form.Item>

          <div className="flex gap-3 items-center justify-start">
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                },
                {
                  type: "number",
                  message: "Please enter product  price",
                  min: 0,
                  max: 1000,
                },
              ]}
            >
              <InputNumber placeholder="Type product price" />
            </Form.Item>

            <Form.Item
              name="individualRating"
              label="Individual Rating"
              rules={[
                {
                  required: true,
                },
                {
                  type: "number",
                  message: "Please enter product rating",
                  min: 0,
                  max: 5,
                },
              ]}
            >
              <InputNumber placeholder="Type product rating" />
            </Form.Item>

            <Form.Item
              name="averageRating"
              label="Average Rating"
              rules={[
                {
                  required: true,
                },
                {
                  type: "number",
                  message: "Please enter product average rating",
                  min: 0,
                  max: 5,
                },
              ]}
            >
              <InputNumber placeholder="Type product rating" />
            </Form.Item>
          </div>

          <Form.Item
            name="brand"
            label="Brand"
            rules={[
              {
                required: true,
                message: "Please enter product brand",
              },
            ]}
          >
            <Input placeholder="Type brand" />
          </Form.Item>

          <Form.Item
            name="model"
            label="Model"
            rules={[
              {
                required: true,
                message: "Please enter product model",
              },
            ]}
          >
            <Input placeholder="Type model" />
          </Form.Item>

          <Form.Item name="status" label="Status" requiredMark="optional">
            <Select placeholder="Select your product status">
              <Select.Option value="In Stock">In Stock</Select.Option>
              <Select.Option value="Out Of Stock">Out Of Stock</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="image"
            label="Image Url"
            rules={[{ type: "url", message: "Please enter a valid image url" }]}
            hasFeedback
          >
            <Input placeholder="Add your product image url" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: false,
              },
              { whitespace: true },
            ]}
          >
            <Input.TextArea
              style={{ height: 220, resize: "none" }}
              placeholder="Type Description"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default App;
