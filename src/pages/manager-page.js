import React from "react";
import ManagerContainer from "../containers/manager-container";

const ManagerPage = props => (
  <main className="manager_page">
    <ManagerContainer {...props} />
  </main>
);

export default ManagerPage;
