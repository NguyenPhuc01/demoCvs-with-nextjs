// import mysql from "serverless-mysql";
// const db = mysql({
//   config: {
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     // host: process.env.MYSQL_HOST,
//     // port: process.env.MYSQL_PORT,
//     // database: process.env.MYSQL_DATABASE,
//     // user: process.env.MYSQL_USER,
//     // password: process.env.MYSQL_PASSWORD
//   },
// });
// export default async function excuteQuery() {
//   db.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
//   db.query(
//     `INSERT INTO mydata.table1 (id, content)
//   VALUES (5, 'content 5')`,
//     function (err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );
// }

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
//       password: password,
//       database: database,
//       host: host,
//       port: port,
//     },
//   };
// }
