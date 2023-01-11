import { Button, Col, Divider, Row, Tabs } from "antd";
import React, { memo, useState } from "react";
import Resul from "../component/Resul";
import UploadComponent from "../component/UploadComponent";
import Head from "next/head";
const ocr = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [result, setResult] = useState();
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Head>
        <title>Nhận diện ký tự</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <h3
        style={{
          fontSize: "20px",
          marginBottom: 24,
          fontWeight: 600,
        }}
      >
        Nhận diện ký tự
      </h3>
      <Divider orientation="left" plain>
        Chọn sản phẩm
      </Divider>

      <div style={{ border: "1px solid rgba(0,0,0,.07)" }}>
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          style={{ padding: "0 20px" }}
          items={[
            {
              label: `Giấy tờ tùy thân`,
              key: "1",
              children: <Button>Content of Tab Pane 1</Button>,
            },
            {
              label: `Giấy tờ xe`,
              key: "2",
              children: `Content of Tab Pane 2`,
            },
            {
              label: `
Tài liệu doanh nghiệp
`,
              key: "3",
              children: `Content of Tab Pane 3`,
            },
          ]}
        />
        <Button></Button>
      </div>
      <Row gutter={[30, 60]}>
        <Col xs={24} md={12}>
          <UploadComponent result={result} setResult={setResult} />
        </Col>
        <Col xs={24} md={12}>
          <Resul result={result} />
        </Col>
      </Row>
    </>
  );
};

export default memo(ocr);
