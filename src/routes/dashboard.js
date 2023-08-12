import React, { useState } from "react";
import AppContent from "./appContent";
import Sidebar from "../components/Sidebar/SideBar";

const Dashboard = () => {
  // add custom attribute on body tag
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <BrowserRouter> */}
      <div className="home_wrapper" show-menu={show ? "false" : "true"}>
        {/* sidebar */}
        <div className="sidebar_wrapper">
          <Sidebar sideBarShow={setShow} />
        </div>
        {!show && (
          <div
            className="menu_backdrop"
            style={{
              position: "fixed",
              backgroundColor: "#0000001c",
              width: "100%",
              height: "100%",
              zIndex: "99",
            }}
            onClick={() => setShow(true)}
          ></div>
        )}
        {/* body container */}
        <div className="body_content_wrapper">
          {/* header */}
          {/* <Header setShow={setShow} show={show} /> */}
          <div
            className="content_wrapper"
            style={{
              minHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Routers for every page render on the UI */}
            <AppContent />
            {/* <Footer /> */}
          </div>
        </div>
      </div>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Dashboard;
