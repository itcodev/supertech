import React, { useState } from "react";
import { Form, Input, message, Upload, Button, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddProject = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [categories, setCategories] = useState([
    "Residential",
    "Commercial",
    "Interior",
    "Consultancy",
  ]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("cover", selectedFile);
      formData.append("title", values.title);
      formData.append("category", values.category);
      formData.append("location", values.location);
      formData.append("image", selectedFile);
      formData.append("area", values.area);
      formData.append("content", values.content);
      formData.append("duration", values.duration);
      formData.append("status", values.status);

      const { status, data } = await axios.post(
        "http://localhost:3001/v1/leads/project",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (status === 200) {
        message.success("Successfully Added");
        nav("/dashboard");
      } else {
        console.log("Error occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-300 h-[770px]">
      <div className="bg-white m-6 h-auto rounded mt-[]">
        <Form form={form} onFinish={onFinish} className="flex flex-col mx-2">
          <div className="flex justify-center space-x-2">
            <div className="w-[550px]">
              <label htmlFor="cover">Add Cover Photo</label>
              <input
                type="file"
                id="cover"
                name="cover"
                onChange={handleFileChange}
              />
            </div>

            <div className="w-[550px]">
              <label htmlFor="title">Add Title</label>
              <Form.Item name="title">
                <Input placeholder="Enter Title" />
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-[550px]">
              <label htmlFor="category">Select Category</label>
              <Form.Item name="category">
                <Select placeholder="Select Category">
                  {categories.map((category) => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div className="w-[550px]">
              <label htmlFor="location">Add Location</label>
              <Form.Item name="location">
                <Input placeholder="Enter Location" />
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-[550px]">
              <label htmlFor="image">Add Image Photo</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
              />
            </div>

            <div className="w-[550px]">
              <label htmlFor="duration">Duration</label>
              <Form.Item name="duration">
                <Input placeholder="Duration" />
              </Form.Item>
            </div>

            {/* Add more form fields here as needed */}
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-[550px]">
              <label htmlFor="area">Area</label>
              <Form.Item name="area">
                <Input placeholder="Area" />
              </Form.Item>
            </div>

            <div className="w-[550px]">
              <label htmlFor="content">Content</label>
              <Form.Item name="content">
                <Input.TextArea placeholder="Enter Content" />
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-[550px]">
              <label htmlFor="status">Add Status</label>
              <Form.Item name="status">
                <Input placeholder="Enter Status" />
              </Form.Item>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Button
              type="primary"
              htmlType="submit"
              className="flex justify-center items-center bg-red-700 text-white hover:shadow-2xl mb-[20px] rounded px-4 py-2"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProject;