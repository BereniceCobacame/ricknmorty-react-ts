import React from "react";
import SideBar from "../components/SideBar";
import "./main.css";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="main-layout">
      <div style={{ width: "550px" }}>
        <SideBar />
      </div>
      <div className="children-container">{children}</div>
    </div>
  );
};
export default MainLayout;
