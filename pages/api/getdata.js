import mysql from "mysql2/promise";
import { useSession } from "next-auth/react";

import { v4 as uuidv4 } from "uuid";
export default async function hanlerPostData(req, res) {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mydata",
  });
  const id = uuidv4();
  try {
    const query = `INSERT INTO mydata.datalogin (Id, Imgage, FullName,Email)
    VALUES ('${id}', '${req.body.image}', '${req.body.name}','${req.body.email}')`;
    console.log("🚀 ~ file: getdata.js:20 ~ hanlerPostData ~ query", query);

    const [data] = await db.execute(query);
    res.status(200).json({ result: data });
  } catch (error) {
    console.log("error", error);
  }
}
