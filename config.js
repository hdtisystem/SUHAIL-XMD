const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© HDTI SYSTEM" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_49_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA4MyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgMjM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDI4LFxuICAgICAgICA4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNixcbiAgICAgICAgODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxdTRTQWN4dWdkekdRZXBMbGIzY1J4RlVCdHBlb2x6dGdQNHJ1SEY4OHV3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI4MTEwNDQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4N0QwRkMxOTA0MzVCNDI0NzQ2OTU5QzMyODVGRkRFNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE1NTYxNjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyODExMDQ0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0ZFODg0QjgzQkY5QjhBMEI0NzA5QkQ2MzJEOThERUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNTU2MTY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjgxMTA0NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZEQUVBNzc0NTg4NjQyRURCMUQxNEI3MkI5NEFBRUU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTU1NjE2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI4MTEwNDQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMjE3NEI3MEFBMTYzRkY2NjBCQkNERkZCNzJGMTY3RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE1NTYxNjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibW41TFNIVXRRYjYxcS1PTXpCQXdJQVwiLFxuICBcInBob25lSWRcIjogXCI4MzJkYzMwOC0wZThjLTQwYTEtODkxZC02YmQyYmFhMDhiMmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTkyLFxuICAgICAgNzgsXG4gICAgICAyNDYsXG4gICAgICAyNDksXG4gICAgICA3NixcbiAgICAgIDc1LFxuICAgICAgMjMwLFxuICAgICAgMTg2LFxuICAgICAgMjcsXG4gICAgICAxNTksXG4gICAgICA1OSxcbiAgICAgIDExOCxcbiAgICAgIDE2OCxcbiAgICAgIDIxMSxcbiAgICAgIDE0NyxcbiAgICAgIDUxLFxuICAgICAgODMsXG4gICAgICAxNixcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDE3OCxcbiAgICAgIDc5LFxuICAgICAgMTcyLFxuICAgICAgMjA1LFxuICAgICAgMjA4LFxuICAgICAgNzIsXG4gICAgICAxMjEsXG4gICAgICAyMjksXG4gICAgICA4NSxcbiAgICAgIDE1MCxcbiAgICAgIDE3MixcbiAgICAgIDI1LFxuICAgICAgMzUsXG4gICAgICAxNDEsXG4gICAgICA1OSxcbiAgICAgIDEzNSxcbiAgICAgIDE1NSxcbiAgICAgIDIxOSxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzUThRUTFHVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjgxMTA0NDU6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIZHRpIFN5c3RlbVwiLFxuICAgIFwibGlkXCI6IFwiMjAzNjE2MjI5MDE5NzA2OjY4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUUDE2RUdFTURtMWJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ05QaWZwUEJkUjU5L0J1UWIyeVQvT3dpSVVvU0VKeVlITkV0dERRbVgxRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxdzdhL2xON0lHM2V4ZDVXR09JbEw0VS9EZTZlaGJnUVdNelJ5Z2dLelZVK3lsSUd1SGVoTExsbkVLcjR2UUYzUXhtMzZLbEdaVGhkOElsb0pzSkZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQUUVUYVk3Qi9JQkVkYTBuczJ0YWRmWHJHYU54MGFDY0dmeGgzbC9mQXpSQ01QN1B2eVRmR0orNy90dGxhRG94NjJ1UjlacE85NmxhVWw0bVBxZlppQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyODExMDQ0NTo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTU1NjE2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtoelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2h6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNFVzbjhDL1FTM25weUtmQUNSREFUd3B1Uy9pcnFja3hRVlNjNmdhbm00QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjgxMjU0MzA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE1NTYxNjUxMzlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ᴛʜᴀʀɪ.ʙʀᴏ",
  packname: process.env.PACK_NAME || "ʜᴅᴛɪ ᴡᴀ-ʙᴏᴛ",
  botname : process.env.BOT_NAME  || "ʜᴅᴛɪ ꜱʏꜱᴛᴇᴍ",
  ownername:process.env.OWNER_NAME|| "ᴛʜᴀʀɪ.ʙʀᴏ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "group",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
