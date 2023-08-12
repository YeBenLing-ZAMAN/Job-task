import React, { useState } from "react";
import AppContent from "./appContent";
import Sidebar from "../components/Sidebar/SideBar";

const Dashboard = () => {
  // add custom attribute on body tag
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <BrowserRouter> */}
      <div className="flex" show-menu={show ? "false" : "true"}>
        {/* sidebar */}
        <div className="w-72 bg-white fixed left-0 h-full overflow-auto transition-all ease-in-out duration-300 overflow-x-hidden z-50 border border-solid border-gray-300">
          <Sidebar sideBarShow={setShow} />
        </div>
        {!show && (
          <div
            className="hidden tablet:block"
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
        <div className="relative ml-auto transition-all ease-in-out w-full tablet:w-[calc(100%-0px)] laptop:w-[calc(100%-103px)]">
          {/* header */}
          {/* <Header setShow={setShow} show={show} /> */}
          <div
            className="pt-5 pr-5 pl-5 relative"
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
