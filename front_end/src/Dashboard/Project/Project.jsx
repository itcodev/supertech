import React, { useEffect, useState } from "react";
import { Table, Button, message, Modal } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input } from "antd";

// const API = "http://localhost:3001/v1/leads/status-based-filter?status=Working";
const Project = () => {
  const [isViewing, setIsViewing] = useState(false);
  const [viewedProject, setViewedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState(null);
  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const nav = useNavigate();
  const [form] = Form.useForm();

  //delete project
  const deleteProject = (record) => {
    Modal.confirm({
      title: "Are you sure to delete this?",
      okText: "Yes",
      okType: "danger",
      onOk: async () => {
        try {
          // Get the ID of the record to be deleted
          const projectId = record._id;
          // console.log('id is' + customerId);
          // Send delete request to the backend API using the customer ID
          await axios.delete(
            `http://localhost:3001/v1/leads/project/${projectId}`
            // project/:projectId
          );

          // Remove the record from the dataSource state
          setDataSource((prevDataSource) => {
            return prevDataSource.filter((project) => project._id !== projectId);
          });

          // Show success message or perform any other actions as needed
          message.success(" project deleted successfully!");
        } catch (error) {
          // Handle error and show error message
          message.error("Failed to delete project. Please try again later.");
          console.log("Delete lead error:", error);
        }
      },
    });
  };

  //Edit project
  const editProject = (record) => {
    setEditedProject(record);
    setIsEditing(true);
  };

  //Update Lead
  const handleProjectUpdate = async (record) => {
    try {
      const projectId = record._id;
      // console.log(leadId);
      // Send update request to the backend API using the customer ID and updated data
      await axios.put(
        `http://localhost:3001/v1/leads/project/${projectId}`,
        editedProject
      );

      // Update the customer record in the dataSource
      setDataSource((prevDataSource) => {
        const updatedDataSource = prevDataSource.map((project) => {
          if (project._id === projectId) {
            return editedProject;
          }
          return project;
        });

        return updatedDataSource;
      });

      // Show success message or perform any other actions as needed
      message.success("project updated successfully!");

      // Clear the editedCustomer state and exit editing mode
      setEditedProject(null);
      setIsEditing(false);
    } catch (error) {
      // Handle error and show error message
      message.error("Failed to update project. Please try again later.");
      console.log("Update lead error:", error);
    }
  };

  //View Lead
  const viewProject = (record) => {
    setViewedProject(record);
    setIsViewing(true);
  };

  const handleFormChange = (changedValues, allValues) => {
    setEditedProject({
      ...editedProject,
      ...changedValues,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/v1/leads/project"
        );

        const list = res.data.data || [];
        const selectedColumns = [
          "title",
          "location",

        ]; // Replace with the desired column keys

        const actionColumn = {
          title: "Action",
          dataIndex: "action",
          key: "action",
          render: (_, record) => (
            <div className="space-x-1">
              <Button
                className="bg-blue-500"
                type="primary"
                icon={<EyeOutlined />}
                onClick={() => {
                  viewProject(record);
                }}
              />
              <Button
                className="bg-blue-500"
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  editProject(record);
                }}
              />
              <Button
                className="bg-blue-500"
                type="primary"
                icon={<DeleteOutlined />}
                onClick={() => {
                  deleteProject(record);
                }}
              />
            </div>
          ),
        };

        const cols = selectedColumns.map((key) => {
          if (key === "status") {
            return {
              title: key,
              dataIndex: key,
              key: key,
              render: (text) => {
                let colorClass = "bg-gray-500 text-white"; // Default color

                if (text === "Working") {
                  colorClass = "bg-green-500 text-white";
                } else if (text === "Pending") {
                  colorClass = "bg-yellow-500 text-black";
                } else if (text === "Contacted") {
                  colorClass = "bg-yellow-500 text-white";
                } else if (text === "Qualified") {
                  colorClass = "bg-blue-900 text-white";
                } else if (text === "Closed") {
                  colorClass = " bg-red-500 text-white";
                }

                return (
                  <span className={`${colorClass} px-2 py-1 rounded`}>
                    {text}
                  </span>
                );
              },
            };
          }

          return {
            title: key,
            dataIndex: key,
            key: key,
          };
        });

        cols.push(actionColumn);

        setColumns(cols);
        setDataSource(list);
        setIsLoading(false);
      } catch (error) {
        console.log("error:", error);
      }
    };

    fetchData();
  }, []);

  const handleClicked = () => {
    nav("addProject");
  };

  return (
    <>
      <div className="bg-gray-200 h-screen w">
        <div className="flex justify-between pt-6 mb-8 p-5">
          <div className=" text-2xl font-semibold">Project Information</div>
          <div>
            <div>Home / Project</div>
          </div>
        </div>

        <div className="bg-red-700 rounded flex justify-center items-center w-[80px] h-[40px] mb-2 ml-6">
          <button className="text-white" onClick={handleClicked}>
            Add New
          </button>
        </div>

        <div style={{ height: "500px", overflow: "auto" }}>
          <Table
            className="rounded p-5 w-full"
            columns={columns}
            dataSource={dataSource}
            pagination={true}
          />
        </div>

        <Modal
          title="Edit Project"
          visible={isEditing}
          onCancel={() => {
            setIsEditing(false);
          }}
          okButtonProps={{
            className: 'bg-blue-300 hover:bg-blue-800 border-blue-300 hover:border-blue-800',
          }}
          onOk={() => handleProjectUpdate(editedProject)} // Call handleStaffUpdate on Ok button click
        >
          {editedProject && (
            <Form form={form} onValuesChange={handleFormChange}>
              <Form.Item label="cover" name="cover">
                <Input />
              </Form.Item>
              <Form.Item label="title" name="title">
                <Input />
              </Form.Item>
              <Form.Item label="location" name="location">
                <Input />
              </Form.Item>
              {/* Lead Status:
              <select
                value={editedLead.status}
                onChange={(e) =>
                  setEditedLead({
                    ...editedLead,
                    status: e.target.value,
                  })
                }
              >
                <option value="Working">Working</option>
                <option value="Failed">Failed</option>
                <option value="Contacted">Contacted</option>
              </select> */}
            </Form>
          )}
        </Modal>

        <Modal
          title="View Project"
          visible={isViewing}
          onCancel={() => {
            setIsViewing(false);
          }}
          footer={null}
        >
          {viewedProject && (
            <div>
              <p>title: {viewedProject.title}</p>
              <p>cover: {viewedProject.cover}</p>
              <p>location: {viewedProject.location}</p>
              {/* <p>Status: {viewedLead.status}</p> */}
            </div>
          )}
        </Modal>
      </div>
    </>
  );
};

export default Project;
