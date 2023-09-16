import React, { useState } from "react";
import { Form, Input, message, Upload,Select } from "antd";

import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const Carier = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const [categories, setCategories] = useState([
    "why supertech",
    "Current Opening",
  ]);


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("cover", selectedFile);
      formData.append("title", values.title);
      formData.append("content", values.content);
      formData.append("category", values.category);


      const response = await axios.post(
        "http://localhost:3001/v1/leads/carier",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
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
      <div className="flex justify-between pt-6 mb-4 p-2">
        <div className="text-2xl font-semibold">Page Add Information</div>
        <div>
          <div>Home / Page / Addpage</div>
        </div>
      </div>

      <div className="bg-white m-6 h-auto rounded">
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

            <div className="w-[550px] ">
              <label htmlFor="title">Add Title</label>
              <Form.Item name="title">
                <Input placeholder="Enter Title" />
              </Form.Item>
            </div>
          </div>



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
            <label htmlFor="content">Content</label>
            <Form.Item name="content">
              <Input.TextArea placeholder=" content" />
            </Form.Item>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-red-700 text-white hover:bg-blue-700 rounded px-4 py-2"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Carier;
