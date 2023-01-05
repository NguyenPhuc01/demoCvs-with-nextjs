import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from "antd";
import Image from "next/image";
import React, { useState } from "react";
import globe from "../images/globe-outline.svg";
const layout = {
  wrapperCol: {
    span: 24,
  },
  layout: "vertical ",
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
function Header(props) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const handleChange = (value) => {
    // console.log("🚀 ~ file: Header.js:48 ~ handleChange ~ value", value);
  };
  return (
    <Row>
      <Col xs={24}>
        <header
          style={{
            height: 56,
            width: "100%",
            background: "#FFFFFF",

            borderBottom: "1px solid #F0F0F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              style={{ border: "none", boxShadow: "none" }}
              href="https://www.computervision.com.vn/"
              target="_blank"
            >
              <Image src={globe} alt="" />
              <span style={{ marginLeft: 10, color: "red", fontSize: "13px" }}>
                {" "}
                www.computervision.com.vn
              </span>
            </Button>
          </div>
          <div>
            <Button
              onClick={showDrawer}
              type="primary"
              ghost
              style={{ height: 36, fontSize: "12px", marginRight: 20 }}
            >
              LIÊN HỆ DÙNG THỬ
            </Button>
            <Drawer
              title="Liên hệ dùng thử"
              placement="right"
              onClose={onClose}
              open={open}
              width={572}
              extra={
                <Space>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button type="primary" onClick={onClose}>
                    Submit
                  </Button>
                </Space>
              }
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a
                  href="tel:0982 925 220"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "red", marginBottom: 20, marginLeft: 24 }}
                >
                  {" "}
                  0982 925 220
                </a>

                <a
                  href="mailto:sales@computervision.com.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "red", marginBottom: 20, marginLeft: 24 }}
                >
                  sales@computervision.com.vn
                </a>
              </div>

              <div style={{ padding: "0 24px" }}>
                <Form
                  {...layout}
                  name="nest-messages"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item name="name">
                    <Input placeholder="Họ và tên" size="large" />
                  </Form.Item>
                  <Form.Item name="comany">
                    <Input placeholder="Tên công ty" size="large" />
                  </Form.Item>
                  <Form.Item name="email">
                    <Input placeholder="Email" size="large" />
                  </Form.Item>
                  <Form.Item name="sdt">
                    <InputNumber
                      placeholder="Số điện thoại"
                      controls={false}
                      style={{ width: "100%" }}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item name="help">
                    <Select
                      placement={"topLeft"}
                      placeholder="Chúng tôi có thể giúp đỡ gì cho bạn?"
                      onChange={handleChange}
                      size="large"
                      options={[
                        {
                          value:
                            "Tôi muốn trao đổi về các sản phẩm của Computer Vision Vietnam",
                          label:
                            "Tôi muốn trao đổi về các sản phẩm của Computer Vision Vietnam",
                        },
                        {
                          value: "Tôi muốn một bản demo sản phẩm",
                          label: "Tôi muốn một bản demo sản phẩm",
                        },
                        {
                          value:
                            "Tôi muốn tạo tài khoản dùng thử CVS Vision API",
                          label:
                            "Tôi muốn tạo tài khoản dùng thử CVS Vision API",
                        },
                        {
                          value: "Tôi là khách hàng và cần hỗ trợ",
                          label: "Tôi là khách hàng và cần hỗ trợ",
                        },
                        {
                          value:
                            "Tôi muốn làm việc tại Computer Vision Vietnam",
                          label:
                            "Tôi muốn làm việc tại Computer Vision Vietnam",
                        },
                        {
                          value:
                            "Tôi muốn là đối tác của Computer Vision Vietnam",
                          label:
                            "Tôi muốn là đối tác của Computer Vision Vietnam",
                        },
                        {
                          value: "Lý do khác",
                          label: "Lý do khác",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item name="message">
                    <Input.TextArea placeholder="Tin nhắn" rows={3} />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ height: 44, width: 124 }}
                    >
                      GỬI
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Drawer>
          </div>
        </header>
      </Col>
    </Row>
  );
}

export default Header;
