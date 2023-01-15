const axios = require("axios");
const FormData = require("form-data");
import formidable from "formidable";
import multer from "multer";
const url = "https://demo.computervision.com.vn/api/v3/ekyc/face_matching";

const recaptchaValidation = async ({ recaptchaToken }) => {
  try {
    const response = await axios({
      url: "https://www.google.com/recaptcha/api/siteverify",
      method: "POST",
      params: {
        secret: process.env.GATSBY_RECAPTCHA_V3_SECRET_KEY,
        response: recaptchaToken,
      },
    });
    return {
      success: response.data.success,
      message: response.data["error-codes"] || "error",
      score: response.data.score,
    };
  } catch (error) {
    let message;
    if (error.response) {
      message = `reCAPTCHA server responded with non 2xx code: ${error.response.data}`;
    } else if (error.request) {
      message = `No reCAPTCHA response received: ${error.request}`;
    } else {
      message = `Error setting up reCAPTCHA response: ${error.message}`;
    }
    return { success: false, message };
  }
};
async function parseFormData(req, res) {
  const storage = multer.memoryStorage();
  const multerUpload = multer({ storage });
  const multerFiles = multerUpload.any();
  await new Promise((resolve, reject) => {
    multerFiles(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
  return {
    fields: req.body,
    files: req.files,
  };
}
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res) {
  const result = await parseFormData(req, res);

  if (req.method === `POST`) {
    console.log("🚀 ~ file: face-matching.js:60 ~ handler ~ req", req);
    const file1 = result.files[0];
    const file2 = result.files[1];
    let form = new FormData();
    form.append("img1", file1.buffer, file1.originalname);
    form.append("img2", file2.buffer, file2.originalname);

    const recaptchaValidationResult = await recaptchaValidation({
      recaptchaToken: req.query.recaptchaToken,
    });

    if (
      !recaptchaValidationResult.success ||
      recaptchaValidationResult.score < 0.5
    ) {
      res.status(400).send(recaptchaValidationResult.message);
    } else {
      axios({
        method: "POST",
        url: `${url}?format_type=file&type1=card`,
        auth: {
          username: process.env.GATSBY_API_USERNAME,
          password: process.env.GATSBY_API_PASSWORD,
        },
        data: form,
        headers: form.getHeaders(),
      })
        .then((response) => {
          res.json(response.data);
        })
        .catch((err) => {
          res.status(400).send(err);
          // console.log(err)
        });
    }
  }

  if (req.method === `GET`) {
    const img1 = req.query.img1;
    const img2 = req.query.img2;

    const recaptchaValidationResult = await recaptchaValidation({
      recaptchaToken: req.query.recaptchaToken,
    });

    if (
      !recaptchaValidationResult.success ||
      recaptchaValidationResult.score < 0.5
    ) {
      res.status(400).send(recaptchaValidationResult.message);
    } else {
      axios({
        method: "GET",
        url: `${url}?format_type=url&type1=card&img1=${encodeURI(
          img1
        )}&img2=${encodeURI(img2)}`,
        auth: {
          username: process.env.GATSBY_API_USERNAME,
          password: process.env.GATSBY_API_PASSWORD,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          res.json(response.data);
        })
        .catch((err) => {
          res.status(400).send(err);
          // console.log(err)
        });
    }
  }
}
