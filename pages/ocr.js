import { Button, Col, Divider, Row, Tabs } from "antd";
import React, { memo, useState } from "react";
import Resul from "../component/Resul";
import UploadComponent from "../component/UploadComponent";
const ocr = () => {
  const [result, setResult] = useState();
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <h3
        style={{
          fontSize: "20px",
          marginBottom: 24,
          fontWeight: 600,
        }}
      >
        Nhận diện khuôn mặt
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
// export async function getServerSideProps(context) {
//   const user = process.env.MYSQL_USER;
//   const password = process.env.MYSQL_PASSWORD;
//   const host = process.env.MYSQL_HOST;
//   const database = process.env.MYSQL_DATABASE;
//   const port = process.env.MYSQL_PORT;
//   console.log(
//     "🚀 ~ file: db.js:30 ~ getServerSideProps ~ data",
//     database,
//     password,
//     user,
//     host,
//     port
//   );
//   return {
//     props: {
//       user: user,
//     },
//   };
// }
