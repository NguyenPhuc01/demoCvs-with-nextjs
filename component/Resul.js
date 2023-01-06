import React from "react";
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
  const data = result?.data?.data;
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
            name={"Số thẻ"}
            value={data?.id}
            confidence={data?.id_confidence}
          />
          <Field
            name={"Họ Tên"}
            value={data?.name}
            confidence={data?.name_confidence}
          />
          <Field
            name={"Ngày sinh"}
            value={data?.born}
            confidence={data?.name_confidence}
          />
          <Field name={"Giới Tính"} value={data?.sex} confidence={""} />
          <Field name={"Quốc tịch"} value={data?.quoctich} confidence={""} />
          <Field name={"Dân tộc"} value={""} confidence={""} />
          <Field
            name={"Quê quán"}
            value={data?.country}
            confidence={data?.hometown_confidence}
          />
          <Field
            name={"Thường trú"}
            value={data?.address}
            confidence={data?.address_confidence}
          />
          <Field
            name={"Giá trị đến ngày"}
            value={data?.duedate}
            confidence={""}
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
