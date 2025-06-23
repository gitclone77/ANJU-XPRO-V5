//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xjVWxLK3JVNVdUNzM5ZE5TV2I0OTltL1JPOE1KY3piSHZGQkkySzRYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY251WU1HS00rVFZwNmtrQzNLVWFMRENWOFhHM1dvYUViZC84dHhKeFd5OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQTd6cEE3UTFLQVErb0I0RkZCYTBTMVZDMWQ0MDlNc3FYV0c0RWtNNmxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnNVhpZ1JXZkVqMmtxTll4TFZ3TlgrbjhWMHNRVHdjNWtDMGpaUGp1ZnhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQQnRnYWlTSjVRcndoN0c0ek9IbFBMd3RGbkUwRHlnM2JiYlJoN3ZNWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV6U3hoc28rT29LVmNDeUZsMmdUYnZLbDlwelBuVzBGQTdLT25QY2RxRXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZLUTMyN3RYVTlwdExjRm9uMGFNeUdnWitFRi8zTnp1RXA1SkM4dEVuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlF4YW9JOHlDS2lGeS9OZlBJNXIwNEZxM1FITUExajEzU2JlVllOQWJncz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN2WUJYTWxGNmEwQVFPaS8wQmJIeVltZWkrdVFWSkhRczh6Vnp1dDJEUGFlQStoOEg4NEhJamJUNElITFlVVkRPYWNkUVM3S0dKMjhzNGJFeWFVV2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJBVXhoUWhzTjh1ZXp4OTVjSG1HWlJWNURiNE41QzZmZTFwVXRNclNTcUxjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyNjY2MTk4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MkIxMEQ1NkUxNEJEMTJFQ0ZGQ0M2ODk1REEwMDcyRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNjc1NjE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjY2NjE5ODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjFFQTI2QUFFNEJCREQ1Q0U0NDM4MEY4MzBCNUI5N0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDY3NTYxNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNmZmaWxNUW5TTGU1b2F4MGFoMGNSUSIsInBob25lSWQiOiJiNzZkOWE4Ny1mYjA1LTQ5ZjQtOTdlNS0zMjVmOTZiMzBmMDgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjNYaDdKeW96YXJ6cnFkTjhQS2E2MzQ2RmE0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV5SUhzS1VXV1M0ZnQ2cmo4NlZPYUtZMm9RST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFQ0dBVFhZNyIsIm1lIjp7ImlkIjoiOTIzMTI2NjYxOTg1OjgyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjc1MTcwNTE4NDE3NTQzOjgyQGxpZCIsIm5hbWUiOiJBUkogVFJBREVSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPYjZreGNRaitIa3dnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGOVhVbW02ZElVdjRTNkxkMjNlNWNHU0JJRW5EVXhOMlBqaTZQayt3T1h3PSIsImFjY291bnRTaWduYXR1cmUiOiI0d0RMN0FWRXY2UnVpblo2REFPYVEyODRIbkMxVktiYnFNYnBLVkFZTE9KQWl3eVlQVGRWTFhuR1VHMXUyNFZpMVlIeXNYdC9JNnJFUUcvYWhnejdEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNzRmSW5xNlAzdVVnTEdNRlpxOCtYV3JVRldqTTFhOGViOGx0djBnY1A2cHFKS3YvV1JocndnMnRkWnlBUWdRK3AwZmZIdi9sQ01NeFJaWWV2LzJDaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMjY2NjE5ODU6ODJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmZWMUpwdW5TRkwrRXVpM2R0M3VYQmtnU0JKdzFNVGRqNDR1ajVQc0RsOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FrSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNjc1NjEyLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURUayJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "923126661985",
  PASSWORD: 
    process.env.PASSWORD || "28may2008",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "923126661985"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
