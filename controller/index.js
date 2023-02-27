const bodyParser = require("body-parser");
const express = require("express");
const oracledb = require("oracledb");
const app = express();
const PORT = 3333;

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/get-account-details", (req, res) => {
//   const accountNumber = `'${req.body.accountNumber}'`;
//   async function getAccountDetails() {
//     let con;

//     try {
//       con = await oracledb.getConnection({
//         user: "BANKOWNER",
//         password: "pass1234",
//         connectString: "192.168.1.60:9534/UNSGP",
//       });

//       const data = await con.execute(
//         `SELECT
//            ACCT_LINK, AV_BAL, BOOKBAL,
//            OD_LIM, POST_AV_BAL, POST_BOOKBAL,
//            POST_OD_LIM, SYSPOST_AV_BAL, UNCLEARED_BAL,
//            ACCOUNT_NUMBER, ACCOUNT_DESCRP, POST_ACCT_DESCRP,
//            BRANCH_CODE, BRDESC, STATUS_INDICATOR,
//            STATUS_DESC, CURRENCY_CODE, GET_CURRDESC(CURRENCY_CODE) Currency, LFM_TEMP,
//            MAX_DEPO_AMT, DEPO_ALLOW, MAX_WITHD_AMT,
//            WITHD_ALLOW, PROD_CODE, UNAUTH_OD,
//            CHQ_ALLOWED, CHQ_DEPO_ALLOW, TYPE_OF_ACCT,
//            LEGAL_FORM, CUST_NO, CASH_FLAG,
//            CHQ_FLAG, ACR_CHG, ACR_PENAL,
//            ACR_INT, VIEW_FLAG
//         FROM BANKOWNER.VW_CASA_LEDGER
//         WHERE ACCT_LINK = ${accountNumber}
//         `
//       );

//       if (data.rows) {
//         const arr = [];

//         for (let i = 0; i < data.rows.length; i++) {
//           const ACCT_LINK = data.rows[i][0];
//           const AV_BAL = data.rows[i][1];
//           const BOOKBAL = data.rows[i][2];
//           const OD_LIM = data.rows[i][3];
//           const POST_AV_BAL = data.rows[i][4];
//           const POST_BOOKBAL = data.rows[i][5];
//           const POST_OD_LIM = data.rows[i][6];
//           const SYSPOST_AV_BAL = data.rows[i][7];
//           const UNCLEARED_BAL = data.rows[i][8];
//           const ACCOUNT_NUMBER = data.rows[i][9];
//           const ACCOUNT_DESCRP = data.rows[i][10];
//           const POST_ACCT_DESCRP = data.rows[i][11];
//           const BRANCH_CODE = data.rows[i][12];
//           const BRDESC = data.rows[i][13];
//           const STATUS_INDICATOR = data.rows[i][14];
//           const STATUS_DESC = data.rows[i][15];
//           const CURRENCY_CODE = data.rows[i][16];
//           const Currency = data.rows[i][17];
//           const LFM_TEMP = data.rows[i][18];
//           const MAX_DEPO_AMT = data.rows[i][19];
//           const DEPO_ALLOW = data.rows[i][20];
//           const MAX_WITHD_AMT = data.rows[i][21];
//           const WITHD_ALLOW = data.rows[i][22];
//           const PROD_CODE = data.rows[i][23];
//           const UNAUTH_OD = data.rows[i][24];
//           const CHQ_ALLOWED = data.rows[i][25];
//           const CHQ_DEPO_ALLOW = data.rows[i][26];
//           const TYPE_OF_ACCT = data.rows[i][27];
//           const LEGAL_FORM = data.rows[i][28];
//           const CUST_NO = data.rows[i][29];
//           const CASH_FLAG = data.rows[i][30];
//           const CHQ_FLAG = data.rows[i][31];
//           const ACR_CHG = data.rows[i][32];
//           const ACR_PENAL = data.rows[i][33];
//           const ACR_INT = data.rows[i][34];
//           const VIEW_FLAG = data.rows[i][35];

//           arr.push({
//             ACCT_LINK: ACCT_LINK,
//             AV_BAL: AV_BAL,
//             BOOKBAL: BOOKBAL,
//             OD_LIM: OD_LIM,
//             POST_AV_BAL: POST_AV_BAL,
//             POST_BOOKBAL: POST_BOOKBAL,
//             POST_OD_LIM: POST_OD_LIM,
//             SYSPOST_AV_BAL: SYSPOST_AV_BAL,
//             UNCLEARED_BAL: UNCLEARED_BAL,
//             ACCOUNT_NUMBER: ACCOUNT_NUMBER,
//             ACCOUNT_DESCRP: ACCOUNT_DESCRP,
//             POST_ACCT_DESCRP: POST_ACCT_DESCRP,
//             BRANCH_CODE: BRANCH_CODE,
//             BRDESC: BRDESC,
//             STATUS_INDICATOR: STATUS_INDICATOR,
//             STATUS_DESC: STATUS_DESC,
//             CURRENCY_CODE: CURRENCY_CODE,
//             Currency: Currency,
//             LFM_TEMP: LFM_TEMP,
//             MAX_DEPO_AMT: MAX_DEPO_AMT,
//             DEPO_ALLOW: DEPO_ALLOW,
//             MAX_WITHD_AMT: MAX_WITHD_AMT,
//             WITHD_ALLOW: WITHD_ALLOW,
//             PROD_CODE: PROD_CODE,
//             UNAUTH_OD: UNAUTH_OD,
//             CHQ_ALLOWED: CHQ_ALLOWED,
//             CHQ_DEPO_ALLOW: CHQ_DEPO_ALLOW,
//             TYPE_OF_ACCT: TYPE_OF_ACCT,
//             LEGAL_FORM: LEGAL_FORM,
//             CUST_NO: CUST_NO,
//             CASH_FLAG: CASH_FLAG,
//             CHQ_FLAG: CHQ_FLAG,
//             ACR_CHG: ACR_CHG,
//             ACR_PENAL: ACR_PENAL,
//             ACR_INT: ACR_INT,
//             VIEW_FLAG: VIEW_FLAG,
//           });
//         }

//         res.send(arr);
//       } else {
//         res.send(err);
//       }
//       //   await con.close();
//     } catch (err) {
//       // res.send(err);
//       throw err;
//     }
//   }

//   getAccountDetails();
// });

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
