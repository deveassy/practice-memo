import React from "react";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

function HomePage() {
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Main></Main>
    </Layout>
  );
}

export default HomePage;
