import React from "react";
import "./main.css";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          position: "sticky",
          top: "0px",
          height: "100vh",
          background: "gray",
        }}
      >
        <div style={{ padding: "2rem" }}>
          <h3>SideBar</h3>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "lightpink",
          padding: "2rem",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default MainLayout;
