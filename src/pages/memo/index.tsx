import React, { useState } from "react";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

interface Memo {
  id?: number;
  content: string;
  createAt?: number;
}

function MemoPage() {
  // const [memos, setMemos] = useState<Memo[]>({
  //   content: '',
  //   createAt: 0
  // });
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Main></Main>
    </Layout>
  );
}

export default MemoPage;
