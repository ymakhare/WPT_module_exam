const mysql = require("mysql");

var Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

const ConnectionCheck = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  console.log("Connection ok...");

  await connection.endAsync();
};

const addmsg = async (data) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let addquery = `insert into message values (?)`;
  await connection.queryAsync(addquery, [data.chats]);
  console.log("message sent");

  await connection.endAsync();
};

const showmsg = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let showquery = `select * from message`;
  const list = await connection.queryAsync(showquery);
  //console.log(list);

  await connection.endAsync();
  return list;
};
// const data = {
//   chats: "hi",
// };

//addmsg(data);
//ConnectionCheck();
//showmsg();

module.exports = { addmsg, showmsg };
