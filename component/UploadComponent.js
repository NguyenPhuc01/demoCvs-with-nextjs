import { Button, Input, Upload } from "antd";
import { LoadingOutlined, PlusOutlined, DeleteFilled } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  return false;
};

function UploadComponent({ setResult, result }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const [urlImageInput, setUrlImageInput] = useState("");
  const handleChange = (info) => {
    setImageUrl(info.file);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const handleSubmit = () => {
    setLoading(true);
    const options = {
      method: "GET",
      auth: {
        username: "0bd6a2540de64bf7a3204ed733eb3486",
        password:
          "bf5447d99f7e084fdc1786e141cbfb5f6351be83494c3be1006bd39d174b0636",
      },

      url: `https://demo.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_infor_all?url=${urlImageInput}`,
    };
    axios(options)
      .then((res) => {
        setLoading(false);
        console.log("🚀 ~ file: Home.js:37 ~ useEffect ~ res", res);
        setResult(res);
      })
      .catch((error) => {
        setLoading(false);
        setResult(error);
        console.log("🚀 ~ file: Home.js:38 ~ useEffect ~ error", error);
      });
  };
  const onDelete = (e) => {
    e.stopPropagation();
    setImageUrl("");
    setUrlImageInput("");
    setResult("");
  };
  return (
    <div style={{ position: "relative" }}>
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl || urlImageInput ? (
          <div>
            <picture style={{ width: "100%", height: "400px" }}>
              <img
                src={imageUrl ? URL.createObjectURL(imageUrl) : urlImageInput}
                alt="Landscape picture"
                style={{ width: "100%", height: "inherit" }}
              />
            </picture>
            <Button
              icon={<DeleteFilled />}
              style={{ position: "absolute", top: 0, right: 0 }}
              type="primary"
              onClick={onDelete}
            />
          </div>
        ) : (
          uploadButton
        )}
      </Upload>
      <Input
        placeholder="Hoặc nhập link ảnh"
        value={urlImageInput}
        size="large"
        style={{ marginTop: 10 }}
        onChange={(e) => {
          setUrlImageInput(e.target.value);
        }}
      />
      <Button
        onClick={handleSubmit}
        type="primary"
        size="large"
        style={{ width: "100%", marginTop: 30 }}
        loading={loading}
      >
        XỬ LÝ
      </Button>
    </div>
  );
}

export default UploadComponent;
