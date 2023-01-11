import mysql from "mysql2/promise";

import { v4 as uuidv4 } from "uuid";
export default async function hanlerPostData(req, res) {
  const db = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  const id = uuidv4();
  try {
    const query = `INSERT INTO mydata.datalogin (Id, Imgage, FullName,Email)
    VALUES ('${id}', '${req.body.image}', '${req.body.name}','${req.body.email}')`;
    const [data] = await db.execute(query);
    res.status(200).json({ result: data });
  } catch (error) {
    console.log("error", error);
  }
}
