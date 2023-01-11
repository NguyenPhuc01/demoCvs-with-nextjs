import React, { useEffect, useState } from "react";
const getConfidence = (confidence) => {
  return (confidence * 100).toFixed(2) + "%";
};
function Field({ name, value, confidence }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <b style={{ color: "hsla(0,0%,100%,.34)" }}>{name}:</b>
      <div>
        {value ? (
          <>
            <span>{value}</span>
            <span style={{ marginLeft: 5, color: "hsla(0,0%,100%,.34)" }}>
              - Độ tin cậy:
            </span>
            <span>
              {" "}
              {confidence
                ? getConfidence(confidence)
                : confidence === ""
                ? (confidence = 100 + "%")
                : ""}
            </span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
function Resul({ result }) {
  const [resultData, setResultData] = useState({});
  // console.log("🚀 ~ file: Resul.js:33 ~ Resul ~ result", result);
  const data = result;
  useEffect(() => {
    result?.forEach((e) => {
      setResultData(e.info);
    });
  }, [result]);
  console.log("resultData", resultData);
  return (
    <div
      style={{
        backgroundColor: "#1d1e22",
        color: "#fff",
        minHeight: "454px",
        padding: 24,
      }}
    >
      {data ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Field
            name="Số thẻ"
            value={resultData.id}
            confidence={resultData.id_confidence}
          />
          <Field
            name="Họ tên"
            value={resultData.name}
            confidence={resultData.name_confidence}
          />
          <Field
            name="Ngày sinh"
            value={resultData.dob}
            confidence={resultData.dob_confidence}
          />
          <Field
            name="Giới tính"
            value={resultData.gender}
            confidence={resultData.gender_confidence}
          />
          <Field
            name="Quốc tịch"
            value={resultData.nationality}
            confidence={resultData.nationality_confidence}
          />
          <Field
            name="Dân tộc"
            value={resultData.ethnicity}
            confidence={resultData.ethnicity_confidence}
          />
          <div className="field">
            <div style={{ color: "hsla(0,0%,100%,.34)" }}>Quê quán:</div>
            <div className="field-value">
              {resultData.hometown}{" "}
              {resultData.hometown_confidence && (
                <>
                  {" "}
                  <span style={{ color: "hsla(0,0%,100%,.34)" }}>
                    - Độ tin cậy:{" "}
                  </span>
                  {getConfidence(resultData.hometown_confidence)}
                </>
              )}
              <br />
              Tỉnh/TP:{" "}
              {resultData.hometown_town_code >= 0 && (
                <>
                  {resultData.hometown_town_code} - {resultData.hometown_town}
                </>
              )}
              <br />
              Quận/Huyện:{" "}
              {resultData.hometown_district_code >= 0 && (
                <>
                  {resultData.hometown_district_code} -{" "}
                  {resultData.hometown_district}
                </>
              )}
              <br />
              Phường/Xã:{" "}
              {resultData.hometown_ward_code >= 0 && (
                <>
                  {resultData.hometown_ward_code} - {resultData.hometown_ward}
                </>
              )}
            </div>
          </div>
          <div className="field">
            <div style={{ color: "hsla(0,0%,100%,.34)" }}>Thường trú:</div>
            <div className="field-value">
              {resultData.address}{" "}
              {resultData.address_confidence && (
                <>
                  <span style={{ color: "hsla(0,0%,100%,.34)" }}>
                    - Độ tin cậy:{" "}
                  </span>
                  {getConfidence(resultData.address_confidence)}
                </>
              )}{" "}
              <br />
              Tỉnh/TP:{" "}
              {resultData.address_town_code >= 0 && (
                <>
                  {resultData.address_town_code} - {resultData.address_town}
                </>
              )}
              <br />
              Quận/Huyện:{" "}
              {resultData.address_district_code >= 0 && (
                <>
                  {resultData.address_district_code} -{" "}
                  {resultData.address_district}
                </>
              )}
              <br />
              Phường/Xã:{" "}
              {resultData.address_ward_code >= 0 && (
                <>
                  {resultData.address_ward_code} - {resultData.address_ward}
                </>
              )}
            </div>
          </div>
          <Field
            name="Giá trị đến ngày"
            value={resultData.due_date}
            confidence={resultData.due_date_confidence}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "454px",
          }}
        >
          <span>Vui lòng thêm ảnh và nhấn "Xử lý" để trải nghiệm dịch vụ</span>
        </div>
      )}
    </div>
  );
}

export default Resul;
