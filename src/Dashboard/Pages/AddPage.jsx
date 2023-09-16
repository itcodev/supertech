import React, { useState } from "react";
import { Form, Input, message, Upload } from "antd";
import { Button } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const nav = useNavigate();
  const [form] = Form.useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState("");


  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  const handleContentChange = (event, editor) => {
    const data = editor.getData();
    setContent(data); // Set the entire data object
  };

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("cover", selectedFile);
      formData.append("title", values.title);
      formData.append("content", values.content);

      const response = await axios.post(
        "http://localhost:3001/v1/leads/leads-info",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        message.success("Successfully Added");
        nav("/dashboard/page");
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

          <div className="w-[550px] ">
                <label htmlFor="content">Description</label>
                <Form.Item name="content">
                  <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={handleContentChange}
                  />
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

export default AddPage;
