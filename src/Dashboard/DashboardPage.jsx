import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import {
  SettingOutlined,
  SolutionOutlined,
  UploadOutlined,
  FundViewOutlined,
  AlignLeftOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DashBoardPage = () => {
  const [pageTitle, setpageTitle] = useState("Welcome Admin");
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleMenuItem = (e) => {
    setOpen(false);
    if (e.key === "/dashBoard") setpageTitle("Welcome Admin");
    if (e.key === "pageadd") setpageTitle("Page Add");
    if (e.key === "pagelist") setpageTitle("page List");
    // if (e.key === "addresidence") setpageTitle("Add Residence");
    // if (e.key === "residencelist") setpageTitle("Residence List");
    // if (e.key === "roomadd") setpageTitle("Room Add");
    nav(e.key);
  };

  const adminItems = [
    {
      label: "DashBoard",
      key: "/dashboard",
      icon: <SettingOutlined />,
      style: { fontSize: "15px" },
    },
    {
      label: "Page",
      key: "page",
      icon: <UploadOutlined />,
      style: { fontSize: "15px" },
    },
    // {
    //   label: "Podrtfolio",
    //   key: "haddlist",
    //   icon: <SolutionOutlined />,
    //   style: { fontSize: "15px" },
    // },
    {
      label: "Project",
      key: "project",
      icon: <SolutionOutlined />,
      style: { fontSize: "15px" },
    },
    {
      label: "Media",
      key: "media",
      icon: <SolutionOutlined />,
      style: { fontSize: "15px" },
    },
    {
      label: "Carier",
      key: "carier",
      icon: <SolutionOutlined />,
      style: { fontSize: "15px" },
    },
    {
      label: "Reset Password",
      key: "resetPassword",
      icon: <SolutionOutlined />,
      style: { fontSize: "15px" },
    },
  ];

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear authentication tokens, redirect to login page, etc.
    console.log("Logout clicked");
  };

  return (
    <>
      <div className="px-3 py-2 mt-3 flex bg-red-700 text-white relative">
        <div className="cursor-pointer">
          <AlignLeftOutlined
            onClick={showDrawer}
            style={{ fontSize: "20px" }}
          />
        </div>
        <div className="flex justify-center items-center w-screen text-2xl">
          {pageTitle}
        </div>
        <div
          className="absolute top-0 right-0 p-2 cursor-pointer"
          onClick={handleLogout}
        >
          <LogoutOutlined style={{ fontSize: "20px" }} />
        </div>
      </div>
      <Drawer
        onClose={onClose}
        open={open}
        placement="left"
        width={300}
        extra={<Button className="bg-red-600 text-white" onClick={onClose}>Cancel</Button>}
        closeIcon
      >
        <Menu
          defaultSelectedKeys={"1"}
          style={{ padding: 0, border: "none" }}
          onClick={handleMenuItem}
          theme="light"
          mode="vertical"
          items={adminItems}
        ></Menu>
      </Drawer>
      <Outlet />
      {/* <div className="bg-red-800 h-5 w-screen  bottom-1"></div> */}
    </>
  );
};

export default DashBoardPage;
