import { Button, Col, Divider, Row, Tabs } from "antd";
import React, { memo, useState } from "react";
import Resul from "../component/Resul";
import UploadComponent from "../component/UploadComponent";
const ocr = ({ resultConnect }) => {
  console.log("🚀 ~ file: ocr.js:6 ~ ocr ~ resultConnect", resultConnect);
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
//   var mysql = require("mysql2");

//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//   });

//   con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
//   const result = con.query(
//     `INSERT INTO mydata.table1 (id, content)
// VALUES (5, 'content 5')`,
//     function (err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );
//   return {
//     props: {

//   }
// }
