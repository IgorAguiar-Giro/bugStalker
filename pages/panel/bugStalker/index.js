import React, { useState } from "react";
import Layout from "./layout";

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Layout isCollapsed={isCollapsed}>
      {/* Your Home component content goes here */}
      <h1>Home Page Content</h1>
    </Layout>
  );
};

export default Home;